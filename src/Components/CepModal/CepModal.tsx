import React, { useState } from 'react';
import locationICO from '../../Assets/Img/pin.png';
import homeICO from '../../Assets/Img/home.png';
import storeIco from '../../Assets/Img/shop.png';
import arrowIco from '../../Assets/Img/down-arrow.png';
import styles from './CepModal.module.css'; // Importe o arquivo CSS

function CepModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [showOptions, setShowOptions] = useState(false); // Novo estado para controlar a visualização de opções

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        setShowOptions(false); // Reseta a visualização de opções ao abrir/fechar o modal
    };

    const showDeliveryOptions = () => {
        setShowOptions(true);
    };

    return (
        <div className={styles['cep-modal']}>
            <div className={styles['cep-input']} onClick={toggleOpen}>
                <span className={styles['location-ico']}> <img src={locationICO} alt="icone-localização" /></span> {/* Substitua por seu ícone de localização */}
                <input type="text" placeholder="00000-000" />
                <span className={styles['arrow-icon']}> <img src={arrowIco} alt="" /></span>
            </div>
            {isOpen && !showOptions && (
                <div className={styles['cep-menu']}>
                    <span className={styles['content-text-cep-menu']}>Digite seu CEP para ter acesso aos produtos e ofertas da sua região:</span>
                    <input className={styles['content-input-menu']} type="text" placeholder="Digite o CEP" />
                    <button className={styles['content-btn-menu']} onClick={showDeliveryOptions}>Verificar</button>
                </div>
            )}
            {isOpen && showOptions && (
                <div className={styles['cep-menu-select-address']}>
                    {/* Conteúdo do menu de opções de entrega aqui */}
                    <div>
                        <h3 className={styles['content-menu-select-address']}>Como deseja receber suas compras?</h3>
                        <p className={styles['content-menu-option-address']}>Receber em:</p>
                        <div className={styles['content-home-address']}>
                            <input className={styles['content-home-address-radio']} type="radio" id="receiveHome" name="deliveryOption" />
                            <label className={styles['content-home-address-text']} htmlFor="receiveHome">
                                <span><img className={styles['content-home-address-ico']} src={homeICO} alt="icone-casa" /></span> Rua das Crianças, - Sacomã - São Paulo/SP
                            </label>
                        </div>
                        <p className={styles['content-menu-option-address']}>Retirar na loja:</p>
                        <div className={styles['content-store-address']}>
                            <input className={styles['content-home-address-radio']} type="radio" id="pickupStore" name="deliveryOption" />
                            <label className={styles['content-home-address-text']} htmlFor="pickupStore">
                                <span><img className={styles['content-home-store-ico']} src={storeIco} alt="" /></span> Chocolates Brasil Cacau - Sacoma Rua Greenfield, 63 - Ipiranga São Paulo/SP
                            </label>
                        </div>
                        <button className={styles['go-shopping']}>Ir para as compras</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CepModal;