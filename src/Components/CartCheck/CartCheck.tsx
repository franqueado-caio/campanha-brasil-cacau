import React, { useState, useEffect } from 'react';
import styles from './CartCheck.module.css';
import trash from '../../Assets/Img/garbage-can.png';
import { BagItem, useShoppingBag } from '../../Contexts/ShoppingBagContext';
import PaymentMethod from '../PaymentMethod/PaymentMethod'; // Importe o componente PaymentMethod
import { useNavigate } from 'react-router-dom'; // Importe useNavigate
import { createPaymentPreference } from './api'; // Importe a função da API

export interface CartCheckProps {
    bagItems: BagItem[];
    userId: number; // Adicione a prop para receber o ID do usuário logado
}

const CartCheck: React.FC<CartCheckProps> = ({ bagItems, userId }) => {
    const { removeItem, updateItemQuantity } = useShoppingBag();
    const [totalPrice, setTotalPrice] = useState(0);
    const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
    const navigate = useNavigate();
    const [paymentStatus, setPaymentStatus] = useState<'success' | 'failure' | 'pending' | null>(null);
    const [showPaymentStatusModal, setShowPaymentStatusModal] = useState(false);

    useEffect(() => {
        const newTotalPrice = bagItems.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);
        setTotalPrice(newTotalPrice);
    }, [bagItems]);

    const handleQuantityChange = (id: string | number, newQuantity: number) => {
        updateItemQuantity(id, Math.max(1, newQuantity));
    };

    const handleRemove = (id: string | number) => {
        removeItem(id);
    };

    const handleCheckout = async () => {
        if (!userId) {
            console.error("ID do usuário não disponível.");
            return;
        }

        setIsCheckoutLoading(true);
        try {
            const data = await createPaymentPreference(totalPrice, Date.now(), userId);

            if (data && data.init_point) {
                window.location.href = data.init_point;
            } else {
                console.error("Erro ao obter init_point:", data);
                setPaymentStatus('failure');
                setShowPaymentStatusModal(true);
            }
        } catch (error: any) {
            console.error("Erro ao criar preferência de pagamento:", error);
            setPaymentStatus('failure');
            setShowPaymentStatusModal(true);
            // Você pode exibir uma mensagem de erro mais amigável ao usuário aqui,
            // talvez baseada na mensagem de erro da API.
        } finally {
            setIsCheckoutLoading(false);
        }
    };

    const closePaymentStatusModal = () => {
        setShowPaymentStatusModal(false);
        setPaymentStatus(null);
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const statusParam = params.get('payment_status');
        if (statusParam === 'success' || statusParam === 'failure' || statusParam === 'pending') {
            setPaymentStatus(statusParam);
            setShowPaymentStatusModal(true);
        }
    }, [window.location.search]);

    return (
        <div className={styles['cart-check']}>
            <div className={styles['cart-header']}>
                <span className={styles['header-produto']}>Produto</span>
                <span className={styles['header-entrega']}>Entrega</span>
                <span className={styles['header-preco']}>Preço</span>
                <span className={styles['header-quantidade']}>Quantidade</span>
                <span className={styles['header-total']}>Total</span>
            </div>
            {bagItems.length === 0 ? (
                <div className={styles['empty-cart']}>
                    <p>Sua sacola está vazia.</p>
                    {/* Você pode adicionar um link para a página de produtos aqui */}
                </div>
            ) : (
                <ul className={styles['cart-items-list']}>
                    {bagItems.map((item) => (
                        <li key={item.id} className={styles['cart-item']}>
                            <div className={styles['item-produto']}>
                                {item.imageUrl && (
                                    <img src={item.imageUrl} alt={item.name} className={styles['item-image']} />
                                )}
                                <h3 className={styles['item-name']}>{item.name}</h3>
                                {item.hasOwnProperty('weight') && <span className={styles['item-weight']}>{item.weight}</span>}
                            </div>
                            <span className={styles['item-entrega']}>Em até 2 horas</span> {/* Valor fixo por enquanto */}
                            <div className={styles['item-preco']}>
                                {item.oldPrice !== undefined && (
                                    <span className={styles['old-price']}>R$ {item.oldPrice.toFixed(2)}</span>
                                )}
                                <span className={styles['current-price']}>R$ {(item.price || 0).toFixed(2)}</span>
                            </div>
                            <div className={styles['item-quantidade']}>
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
                            <span className={styles['item-total']}>R$ {((item.price || 0) * item.quantity).toFixed(2)}</span>
                            <button onClick={() => handleRemove(item.id)} className={styles['remove-button']}>
                                <img src={trash} alt='remover item' />
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            {bagItems.length > 0 && (
                <div className={styles['cart-summary']}>
                    <span className={styles['total-label']}>Total:</span>
                    <span className={styles['total-price']}>R$ {totalPrice.toFixed(2)}</span>
                    <button className={styles['checkout-button']} onClick={handleCheckout} disabled={isCheckoutLoading}>
                        {isCheckoutLoading ? 'Redirecionando...' : 'Concluir Compra'}
                    </button>
                </div>
            )}

            {showPaymentStatusModal && paymentStatus && (
                <PaymentMethod status={paymentStatus} onClose={closePaymentStatusModal} />
            )}
        </div>
    );
};

export default CartCheck;