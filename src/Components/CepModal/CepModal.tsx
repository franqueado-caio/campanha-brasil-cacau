import React, { useState } from 'react';
import locationICO from '../../Assets/Img/pin.png';
import homeICO from '../../Assets/Img/home.png';
import storeIco from '../../Assets/Img/shop.png';

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
                <input type="text" placeholder="04236052" />
                <span className={styles['arrow-icon']}>▼</span>
            </div>
            {isOpen && !showOptions && (
                <div className={styles['cep-menu']}>
                    {/* Conteúdo do menu de input de CEP aqui */}
                    <input type="text" placeholder="Digite o CEP" />
                    <button onClick={showDeliveryOptions}>Mostrar opções de entrega</button>
                </div>
            )}
            {isOpen && showOptions && (
                <div className={styles['cep-menu']}>
                    {/* Conteúdo do menu de opções de entrega aqui */}
                    <div>
                        <h3>Como deseja receber suas compras?</h3>
                        <p>Receber em:</p>
                        <div>
                            <input type="radio" id="receiveHome" name="deliveryOption" />
                            <label htmlFor="receiveHome">
                                <span><img src={homeICO} alt="icone-casa" /></span> Rua das Crianças, - Sacomã - São Paulo/SP
                            </label>
                        </div>
                        <p>Retirar na loja:</p>
                        <div>
                            <input type="radio" id="pickupStore" name="deliveryOption" />
                            <label htmlFor="pickupStore">
                                <span><img src={storeIco} alt="" /></span> Chocolates Brasil Cacau - Sacoma Rua Greenfield, 63 - Ipiranga São Paulo/SP
                            </label>
                        </div>
                        <button>Ir para as compras</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CepModal;