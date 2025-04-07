import React, { useState, useEffect } from 'react';
import HeaderCheck from '../../Components/HeaderCheck/HeaderCheck';
import CartCheck from '../../Components/CartCheck/CartCheck';
import Footer from '../../Components/Footer/Footer';
import styles from './CartCheckPage.module.css';
import { useShoppingBag } from '../../Contexts/ShoppingBagContext';
import DeliveryOptions from '../../Components/DeliveryOptions/DeliveryOptions'; // Importa o componente DeliveryOptions

const CartCheckPage = () => {
    const { bagItems } = useShoppingBag();
    const [deliveryPrice, setDeliveryPrice] = useState<number | null>(null);
    const [pickupPrice, setPickupPrice] = useState<number | null>(null);
    const [zipCode, setZipCode] = useState(''); // Você pode manter o estado do CEP aqui se precisar dele para outras coisas
    const [totalBagPrice, setTotalBagPrice] = useState(0); // Estado para o valor total dos itens na sacola

    useEffect(() => {
        // Calcula o valor total dos itens na sacola
        const total = bagItems.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);
        setTotalBagPrice(total);
    }, [bagItems]);

    const handleDeliverySelect = (price: number | null) => {
        setDeliveryPrice(price);
        setPickupPrice(null);
    };

    const handlePickupSelect = (price: number | null) => {
        setPickupPrice(price);
        setDeliveryPrice(null);
    };

    // Função para calcular o valor total da compra (incluindo frete)
    const calculateTotalPrice = () => {
        let totalPrice = totalBagPrice;
        if (deliveryPrice !== null) {
            totalPrice += deliveryPrice;
        } else if (pickupPrice !== null) {
            totalPrice += pickupPrice;
        }
        return totalPrice.toFixed(2);
    };

    return (
        <div className={styles['content-header-check']}>
            <HeaderCheck />
            <div className={styles['cart-content']}>
                <h1 className={styles['cart-content-title']}>Revisão do seu pedido</h1>
                <CartCheck bagItems={bagItems} />
                <div className={styles['delivery-options-section']}>
                    <h2 className={styles['cart-content-title']}>Opções de Entrega e Retirada</h2>
                    <DeliveryOptions
                        totalPrice={totalBagPrice} // Passa o valor total da sacola como prop
                        onDeliveryOptionSelect={handleDeliverySelect}
                        onPickupOptionSelect={handlePickupSelect}
                    />
                </div>
                <div className={styles['total-section']}>
                    <p className={styles['cart-price']}>Total: R$ {calculateTotalPrice()}</p>
                </div>
                {/* Outros componentes da página de checkout */}
            </div>
            <Footer />
        </div>
    );
}

export default CartCheckPage;