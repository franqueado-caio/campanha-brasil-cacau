import React, { useState, useEffect } from 'react';
import styles from './DeliveryOptions.module.css'; // Crie este arquivo CSS

interface DeliveryOption {
    id: string;
    name: string;
    price: number;
}

interface DeliveryOptionsProps {
    totalPrice: number; // Recebe o valor total da compra
    onDeliveryOptionSelect: (price: number | null) => void; // Callback para quando uma opção é selecionada
    onPickupOptionSelect: (price: number | null) => void; // Callback para quando uma opção de retirada é selecionada
}

const DeliveryOptions: React.FC<DeliveryOptionsProps> = ({
    totalPrice,
    onDeliveryOptionSelect,
    onPickupOptionSelect,
}) => {
    const [showEntrega, setShowEntrega] = useState(true);
    const [showRetirada, setShowRetirada] = useState(false);
    const [zipCode, setZipCode] = useState('');
    const [formattedZipCode, setFormattedZipCode] = useState('');
    const [deliveryOptionsWithFreeShipping, setDeliveryOptionsWithFreeShipping] = useState<DeliveryOption[]>([]);
    const pickupOptions: DeliveryOption[] = [
        { id: 'retirar-loja', name: 'Retirar na Loja "Temporariamente Indisponivel"', price: 0 },
    ];
    const [selectedDeliveryPrice, setSelectedDeliveryPrice] = useState<number | null>(null);
    const [selectedPickupPrice, setSelectedPickupPrice] = useState<number | null>(null);

    const freeShippingThreshold = 135;
    const baseDeliveryOptions: DeliveryOption[] = [
        { id: 'super-expressa', name: 'SUPER EXPRESSA', price: 19.50 },
        { id: 'rapida', name: 'RÁPIDA', price: 15.30 },
        { id: 'normal', name: 'NORMAL', price: 16.00 },
    ];

    const handleZipCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replace(/\D/g, '');
        if (value.length <= 8) {
            setZipCode(value);
        }
    };

    useEffect(() => {
        if (zipCode) {
            if (zipCode.length === 8) {
                setFormattedZipCode(`${zipCode.substring(0, 5)}-${zipCode.substring(5)}`);
            } else {
                setFormattedZipCode(zipCode);
            }
        } else {
            setFormattedZipCode('');
        }
    }, [zipCode]);

    useEffect(() => {
        if (totalPrice >= freeShippingThreshold) {
            setDeliveryOptionsWithFreeShipping(baseDeliveryOptions.map(option => ({ ...option, price: 0, name: `${option.name} (Frete Grátis)` })));
        } else {
            setDeliveryOptionsWithFreeShipping(baseDeliveryOptions);
        }
    }, [totalPrice]);

    const handleEntregaClick = () => {
        setShowEntrega(true);
        setShowRetirada(false);
        onPickupOptionSelect(null);
        setSelectedPickupPrice(null);
    };

    const handleRetiradaClick = () => {
        setShowEntrega(false);
        setShowRetirada(true);
        onDeliveryOptionSelect(null);
        setSelectedDeliveryPrice(null);
    };

    const handleDeliverySelect = (price: number) => {
        setSelectedDeliveryPrice(price);
        onDeliveryOptionSelect(price);
    };

    const handlePickupSelect = (price: number) => {
        setSelectedPickupPrice(price);
        onPickupOptionSelect(price);
    };

    return (
        <div className={styles['delivery-options-container']}>
            <div className={styles['tab-buttons']}>
                <button
                    className={`${styles['tab-button']} ${showEntrega ? styles['active'] : ''}`}
                    onClick={handleEntregaClick}
                >
                    Entrega
                </button>
                <button
                    className={`${styles['tab-button']} ${showRetirada ? styles['active'] : ''}`}
                    onClick={handleRetiradaClick}
                >
                    Retirada
                </button>
            </div>

            <div className={styles['zipcode-input-container']}>
                <label htmlFor="zipcode">CEP:</label>
                <input
                    type="text"
                    id="zipcode"
                    value={formattedZipCode} // Exibe o CEP formatado no input
                    onChange={handleZipCodeChange} // Ainda usa o handleZipCodeChange para atualizar o estado base
                    placeholder="00000-000"
                    maxLength={9}
                />
                {formattedZipCode && showEntrega && (
                    <div className={styles['delivery-options']}>
                        <h3>Receber em {formattedZipCode}</h3>
                        <ul className={styles['options-list']}>
                            {deliveryOptionsWithFreeShipping.map((option) => (
                                <li key={option.id} className={styles['option-item']}>
                                    <label className={styles['option-label']}>
                                        <input
                                            type="radio"
                                            name="deliveryOption"
                                            value={option.id}
                                            checked={selectedDeliveryPrice === option.price}
                                            onChange={() => handleDeliverySelect(option.price)}
                                            className={styles['content-home-address-radio']}
                                        />
                                        {option.name} - R$ {option.price.toFixed(2)}
                                    </label>
                                </li>
                            ))}
                            {deliveryOptionsWithFreeShipping.length === 0 && <p>Opções de entrega não disponíveis para este CEP.</p>}
                        </ul>
                    </div>
                )}

                {formattedZipCode && showRetirada && (
                    <div className={styles['pickup-options']}>
                        <h3>Opções de Retirada</h3>
                        <ul className={styles['options-list']}>
                            {pickupOptions.map((option) => (
                                <li key={option.id} className={styles['option-item']}>
                                    <label className={styles['option-label']}>
                                        <input
                                            type="radio"
                                            name="pickupOption"
                                            value={option.id}
                                            checked={selectedPickupPrice === option.price}
                                            onChange={() => handlePickupSelect(option.price)}
                                        />
                                        {option.name} - R$ {option.price.toFixed(2)}
                                    </label>
                                </li>
                            ))}
                            {pickupOptions.length === 0 && <p>Opções de retirada não disponíveis.</p>}
                        </ul>
                    </div>
                )}

                {!formattedZipCode && showEntrega && <p>Por favor, digite o CEP para ver as opções de entrega.</p>}
                {!formattedZipCode && showRetirada && <p>Opções de retirada disponíveis.</p>}
            </div>
        </div>
    );
};

export default DeliveryOptions;