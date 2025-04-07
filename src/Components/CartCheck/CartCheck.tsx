import React from 'react';
import styles from './CartCheck.module.css';
import trash from '../../Assets/Img/garbage-can.png';
import { BagItem, useShoppingBag } from '../../Contexts/ShoppingBagContext';

export interface CartCheckProps {
    bagItems: BagItem[];
}

const CartCheck: React.FC<CartCheckProps> = ({ bagItems }) => {
    const { removeItem, updateItemQuantity } = useShoppingBag();

    const handleQuantityChange = (id: string | number, newQuantity: number) => {
        updateItemQuantity(id, Math.max(1, newQuantity));
    };

    const handleRemove = (id: string | number) => {
        removeItem(id);
    };

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
                            <span className={styles['item-entrega']}>Em até 3 dias úteis</span> {/* Valor fixo por enquanto */}
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
        </div>
    );
};

export default CartCheck;