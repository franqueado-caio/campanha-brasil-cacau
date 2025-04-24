import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderCheck from '../../Components/HeaderCheck/HeaderCheck';
import CartCheck from '../../Components/CartCheck/CartCheck';
import Footer from '../../Components/Footer/Footer';
import styles from './CartCheckPage.module.css';
import { useShoppingBag } from '../../Contexts/ShoppingBagContext';
import DeliveryOptions from '../../Components/DeliveryOptions/DeliveryOptions';
import { useAuth } from '../../Contexts/AuthContext';
import ModalResponse from '../../Components/ModalResponse/ModalResponse';
import LoginOrRegisterModal from '../../Components/LoginOrRegisterModal/LoginOrRegisterModal';

const CartCheckPage = () => {
    const { bagItems } = useShoppingBag();
    const { loggedInUser } = useAuth();
    const [deliveryPrice, setDeliveryPrice] = useState<number | null>(null);
    const [pickupPrice, setPickupPrice] = useState<number | null>(null);
    const [zipCode, setZipCode] = useState('');
    const [totalBagPrice, setTotalBagPrice] = useState(0);
    const [showLoginRequiredModal, setShowLoginRequiredModal] = useState(false);
    const [showLoginOrRegisterModal, setShowLoginOrRegisterModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const total = bagItems.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);
        setTotalBagPrice(total);

        if (!loggedInUser?.id) {
            setShowLoginRequiredModal(true);
        }
    }, [bagItems, loggedInUser]);

    const handleDeliverySelect = (price: number | null) => {
        setDeliveryPrice(price);
        setPickupPrice(null);
    };

    const handlePickupSelect = (price: number | null) => {
        setPickupPrice(price);
        setDeliveryPrice(null);
    };

    const calculateTotalPrice = () => {
        let totalPrice = totalBagPrice;
        if (deliveryPrice !== null) {
            totalPrice += deliveryPrice;
        } else if (pickupPrice !== null) {
            totalPrice += pickupPrice;
        }
        return totalPrice.toFixed(2);
    };

    const handleCloseLoginRequiredModal = () => {
        setShowLoginRequiredModal(false);
        setShowLoginOrRegisterModal(true); // Abre o modal de login/cadastro
    };

    const handleCloseLoginOrRegisterModal = () => {
        setShowLoginOrRegisterModal(false);
    };

    if (loggedInUser?.id) {
        return (
            <div className={styles['content-header-check']}>
                <HeaderCheck />
                <div className={styles['cart-content']}>
                    <h1 className={styles['cart-content-title']}>Revisão do seu pedido</h1>
                    <CartCheck bagItems={bagItems} userId={loggedInUser.id} />
                    <div className={styles['delivery-options-section']}>
                        <h2 className={styles['cart-content-title']}>Opções de Entrega e Retirada</h2>
                        <DeliveryOptions
                            totalPrice={totalBagPrice}
                            onDeliveryOptionSelect={handleDeliverySelect}
                            onPickupOptionSelect={handlePickupSelect}
                        />
                    </div>
                    <div className={styles['total-section']}>
                        <p className={styles['cart-price']}>Total: R$ {calculateTotalPrice()}</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <HeaderCheck />
            <div className={styles['cart-content']}>
                <h1 className={styles['cart-content-title']}>Revisão do seu pedido</h1>
                {/* Conteúdo da página que pode ser visível mesmo sem login (se houver) */}
            </div>
            <Footer />

            <ModalResponse
                show={showLoginRequiredModal}
                onClose={handleCloseLoginRequiredModal}
                title="Atenção"
                message="Você precisa estar logado para continuar com o seu pedido."
            />

            <LoginOrRegisterModal
                isOpen={showLoginOrRegisterModal}
                onClose={handleCloseLoginOrRegisterModal}
            />
        </div>
    );
}

export default CartCheckPage;
