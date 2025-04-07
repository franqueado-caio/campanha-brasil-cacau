import React, { useState, useEffect } from 'react';
import styles from './BagSideMenu.module.css';
import trash from '../../Assets/Img/garbage-can.png';
import closeIcon from '../../Assets/Img/close.png';
import { BagItem, useShoppingBag } from '../../Contexts/ShoppingBagContext';
import { useNavigate } from 'react-router-dom';
import ModalResponse from '../../Components/ModalResponse/ModalResponse'; // Importe o ModalResponse

export interface BagSideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onClearBag: () => void;
  bagItems: BagItem[];
}

interface DeliveryOption {
  id: string;
  name: string;
  price: number;
}

const BagSideMenu: React.FC<BagSideMenuProps> = ({ isOpen, onClose, onClearBag, bagItems }) => {
  const { removeItem, updateItemQuantity } = useShoppingBag();
  const navigate = useNavigate();

  const [cep, setCep] = useState('');
  const [formattedCep, setFormattedCep] = useState('');
  const [showShippingOptions, setShowShippingOptions] = useState(false);
  const [selectedShippingPrice, setSelectedShippingPrice] = useState<number | null>(null);
  const [isCepInvalid, setIsCepInvalid] = useState(false); // Novo estado para controlar a exibição do modal

  const deliveryOptions: DeliveryOption[] = [
    { id: 'rapida', name: 'Rápida', price: 15.30 },
    { id: 'normal', name: 'Normal', price: 10.00 }, // Adicione mais opções conforme necessário
  ];
  const freeShippingThreshold = 135;
  const bagTotal = bagItems.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);
  const isFreeShipping = bagTotal >= freeShippingThreshold;
  const shippingCost = selectedShippingPrice !== null ? selectedShippingPrice : (isFreeShipping ? 0 : null);
  const totalWithShipping = bagTotal + (shippingCost !== null ? shippingCost : 0);

  const handleQuantityChange = (id: string | number, newQuantity: number) => {
    updateItemQuantity(id, Math.max(1, newQuantity));
  };

  const handleRemove = (id: string | number) => {
    removeItem(id);
  };

  const handleCheckoutClick = () => {
    navigate('/CartCheck');
  };

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, '');
    if (value.length <= 8) {
      setCep(value);
    }
  };

  useEffect(() => {
    if (cep) {
      if (cep.length === 8) {
        setFormattedCep(`${cep.substring(0, 5)}-${cep.substring(5)}`);
      } else {
        setFormattedCep(cep);
      }
    } else {
      setFormattedCep('');
    }
  }, [cep]);

  const handleCalculateShipping = () => {
    if (formattedCep.length === 9) {
      setShowShippingOptions(true);
      setIsCepInvalid(false); // Resetar o estado do modal se o CEP for válido
      // Aqui você faria a chamada real para a API de frete, mas por enquanto, exibimos opções fixas.
    } else {
      setShowShippingOptions(false);
      setIsCepInvalid(true); // Mostrar o modal de CEP inválido
    }
  };

  const handleShippingOptionSelect = (price: number | null) => {
    setSelectedShippingPrice(price);
  };

  const handleCloseModal = () => {
    setIsCepInvalid(false); // Fechar o modal
  };

  return (
    <div className={`${styles['bag-side-menu']} ${isOpen ? styles['open'] : ''}`}>
      <div className={styles['menu-header']}>
        <h2 className={styles['menu-header-title']}>Minha sacola</h2>
        <button onClick={onClose} className={styles['close-button']}>
          <img src={closeIcon} alt='botão de fechar' />
        </button>
      </div>

      {bagItems.length === 0 ? (
        <div className={styles['empty-bag']}>
          <p className={styles['empty-bag-title']}>Sua sacola está vazia</p>
          <div className={styles['menu-actions-empty']}>
            <button onClick={onClose} className={styles['continue-shopping-button']}>
              Continuar comprando
            </button>
          </div>
        </div>
      ) : (
        <div className={styles['menu-content']}>
          <ul className={styles['bag-items-list']}>
            {bagItems.map((item) => (
              <li key={item.id}>
                <div className={styles['bag-item']}>
                  {item.imageUrl && (
                    <img src={item.imageUrl} alt={item.name} className={styles['item-image']} />
                  )}
                  <div className={styles['item-details']}>
                    <h3 className={styles['item-name']}>{item.name}</h3>
                    <span className={styles['item-price']}>R$ {(item.price || 0).toFixed(2)}</span>
                    <div className={styles['quantity-control']}>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className={styles['quantity-button']}
                      >
                        -
                      </button>
                      <span className={styles['quantity']}>{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className={styles['quantity-button']}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button onClick={() => handleRemove(item.id)} className={styles['remove-button']}>
                    <img src={trash} alt='icone lixeira' />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles['shipping-info']}>
            {!isFreeShipping ? (
              <p>
                Falta R$ {(freeShippingThreshold - bagTotal).toFixed(2)} para atingir o{' '}
                <span className={styles['free-shipping']}>FRETE GRÁTIS</span>
              </p>
            ) : (
              <p className={styles['free-shipping-reached']}>Parabéns! Você atingiu o FRETE GRÁTIS.</p>
            )}
            <div className={styles['shipping-calculation']}>
              <p>Calcular frete:</p>
              <div className={styles['cep-input']}>
                <input
                  type="text"
                  placeholder="Digite seu CEP"
                  value={formattedCep}
                  onChange={handleCepChange}
                  maxLength={9}
                />
                <button className={styles['btn-submit-calculation']} onClick={handleCalculateShipping}>Calcular</button>
              </div>
            </div>

            {showShippingOptions && (
              <div className={styles['shipping-options-list']}>
                <h3>Opções de Entrega para {formattedCep}</h3>
                <ul>
                  {deliveryOptions.map((option) => (
                    <li key={option.id}>
                      <label>
                        <input
                          type="radio"
                          name="shippingOption"
                          value={option.id}
                          checked={selectedShippingPrice === (isFreeShipping ? 0 : option.price)}
                          onChange={() => handleShippingOptionSelect(isFreeShipping ? 0 : option.price)}
                          disabled={isFreeShipping}
                          className={styles['content-home-address-radio']}
                        />
                        {option.name} - R$ {(isFreeShipping ? 0 : option.price).toFixed(2)}
                        {isFreeShipping && <span className={styles['free-shipping-text']}>(Frete Grátis)</span>}
                      </label>
                    </li>
                  ))}
                  {deliveryOptions.length === 0 && <p>Opções de entrega não disponíveis para este CEP.</p>}
                </ul>
              </div>
            )}
          </div>

          <div className={styles['order-summary']}>
            <div className={styles['summary-item']}>
              <span>Subtotal</span>
              <span>R$ {bagTotal.toFixed(2)}</span>
            </div>
            {shippingCost !== null && (
              <div className={styles['summary-item']}>
                <span>Frete</span>
                <span>R$ {shippingCost.toFixed(2)}</span>
              </div>
            )}
            <div className={styles['summary-item']}>
              <span className={styles['total']}>Total</span>
              <span className={styles['total-price']}>R$ {totalWithShipping.toFixed(2)}</span>
            </div>
          </div>

          <div className={styles['menu-actions']}>
            <button onClick={onClose} className={styles['continue-shopping-button']}>
              Continuar comprando
            </button>
            {/* <button onClick={onClearBag} className={styles['clear-bag-button']}>
              Limpar Sacola
            </button> */}
            <button onClick={handleCheckoutClick} className={styles['checkout-button']}>Finalizar pedido</button>
          </div>
        </div>
      )}

      {/* Renderização condicional do ModalResponse - CORREÇÃO AQUI */}
      {isCepInvalid && (
        <ModalResponse
          show={isCepInvalid} // Use 'show' em vez de 'isOpen'
          onClose={handleCloseModal}
          title="CEP Inválido"
          message="Por favor, digite um CEP com 8 dígitos."
        />
      )}
    </div>
  );
};

export default BagSideMenu;