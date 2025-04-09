// src/Components/ProductDetails/ProductDetails.tsx
import React, { useState, useEffect } from 'react';
import styles from './ProductDetails.module.css';
import DataProducts, { Product } from '../../Components/DataProducts/DataProducts';
import { useNavigate, useParams } from 'react-router-dom';
import { useShoppingBag } from '../../Contexts/ShoppingBagContext';
import ModalResponse from '../ModalResponse/ModalResponse'; // Importe o ModalResponse

interface ProductDetailsProps {
    productId?: number;
}

interface DeliveryOption {
    id: string;
    name: string;
    price: number;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ productId }) => {
    const { id } = useParams<{ id?: string }>();
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product | undefined>(
        DataProducts.find((p) => p.id === parseInt(id || productId?.toString() || '0'))
    );
    const { addItem } = useShoppingBag();

    const [showDescription, setShowDescription] = useState(false);
    const [showChocolateType, setShowChocolateType] = useState(true);
    const [showProductInfo, setShowProductInfo] = useState(false);
    const [showIngredients, setShowIngredients] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalTitle, setModalTitle] = useState('');

    // Estados e lógica de cálculo de frete (COPIADOS DO BagSideMenu)
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
    // Para usar o freeShippingThreshold, você precisaria de alguma forma acessar o total do carrinho aqui.
    // Como estamos na página de detalhes do produto, essa lógica pode não ser diretamente aplicável.
    // Vou deixar como está, mas tenha em mente que 'bagTotal' não está definido neste componente.
    const bagTotal = 0;
    const isFreeShipping = bagTotal >= freeShippingThreshold;
    const shippingCost = selectedShippingPrice !== null ? selectedShippingPrice : (isFreeShipping ? 0 : null);
    const totalWithShipping = bagTotal + (shippingCost !== null ? shippingCost : 0);

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

    useEffect(() => {
        const newProduct = DataProducts.find((p) => p.id === parseInt(id || productId?.toString() || '0'));
        if (newProduct) {
            setProduct(newProduct);
        }
    }, [id, productId]);

    if (!product) {
        return <div>Produto não encontrado.</div>;
    }

    const handleAddToCart = () => {
        if (product) {
            addItem(product);
            setModalTitle('Sucesso!');
            setModalMessage(`${product.name} adicionado à sacola!`);
            setModalVisible(true);
        }
    };

    const handleCloseMainModal = () => {
        setModalVisible(false);
    };

    const handleProductClick = (relatedProductId: number) => {
        setTimeout(() => {
            navigate(`/product/${relatedProductId}`);
        }, 1000);
    };

    return (
        <div className={styles['product-details']}>
            <h1 className={styles['product-name']}>{product.name}</h1>
            <p className={styles['product-price']}>R$ {product.price?.toFixed(2) || 'Preço indisponível'}</p>

            <div className={styles['gallery']}>
                {DataProducts.slice(0, 5).map((relatedProduct) => (
                    <img
                        key={relatedProduct.id}
                        src={relatedProduct.imageUrl}
                        alt={relatedProduct.name}
                        className={styles['gallery-image']}
                        onClick={() => handleProductClick(relatedProduct.id)}
                    />
                ))}
            </div>

            <button className={styles['add-to-cart']} onClick={handleAddToCart}>Adicionar à sacola</button>

            {/* SEÇÃO DE CÁLCULO DE FRETE (COPIADA DO BagSideMenu) */}
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
            {/* FIM DA SEÇÃO DE CÁLCULO DE FRETE */}

            <div className={styles['description']}>
                <div className={styles['section-header']} onClick={() => setShowDescription(!showDescription)}>
                    Descrição <span className={styles['toggle-icon']}>{showDescription ? '▲' : '▼'}</span>
                </div>
                {showDescription && <p className={styles['content-description']}>{product.description}</p>}
            </div>

            <div className={styles['chocolate-type']}>
                <div className={styles['section-header']} onClick={() => setShowChocolateType(!showChocolateType)}>
                    Tipo de Chocolate <span className={styles['toggle-icon']}>{showChocolateType ? '▲' : '▼'}</span>
                </div>
                {showChocolateType && <p className={styles['content-description']}>{product.chocolateType}</p>}
            </div>

            <div className={styles['product-info']}>
                <div className={styles['section-header']} onClick={() => setShowProductInfo(!showProductInfo)}>
                    Informações do Produto <span className={styles['toggle-icon']}>{showProductInfo ? '▲' : '▼'}</span>
                </div>
                {showProductInfo && <p className={styles['content-description']}>{product.productInfo}</p>}
            </div>

            <div className={styles['ingredients']}>
                <div className={styles['section-header']} onClick={() => setShowIngredients(!showIngredients)}>
                    Ingredientes <span className={styles['toggle-icon']}>{showIngredients ? '▲' : '▼'}</span>
                </div>
                {showIngredients && product.ingredients && (
                    <ul>
                        {product.ingredients.map((ingredient: string, index: number) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                )}
            </div>

            <ModalResponse
                show={modalVisible}
                onClose={handleCloseMainModal}
                title={modalTitle}
                message={modalMessage}
            />
            {isCepInvalid && (
                <ModalResponse
                    show={isCepInvalid}
                    onClose={handleCloseModal}
                    title="CEP Inválido"
                    message="Por favor, digite um CEP com 8 dígitos."
                />
            )}
        </div>
    );
};

export default ProductDetails;