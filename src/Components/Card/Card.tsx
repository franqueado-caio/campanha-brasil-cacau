import React, { useState } from 'react';
import styles from './Card.module.css';

interface CardProps {
    product: {
        id: number;
        name: string;
        description: string;
        price: number;
        oldPrice?: number;
        discount?: string;
        imageUrl: string;
        secondaryImageUrl?: string;
    };
    icoHeart: string;
}

const Card: React.FC<CardProps> = ({ product, icoHeart }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={styles['card-container']}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Ícone de desconto redondo */}
            {product.discount && (
                <div className={styles['discount-icon']}>
                    <span>{product.discount}</span>
                </div>
            )}

            {/* Imagem do produto */}
            <img
                src={isHovered && product.secondaryImageUrl ? product.secondaryImageUrl : product.imageUrl}
                alt={product.name}
                className={styles['product-image']}
            />

            {/* Ícone de coração */}
            <img src={icoHeart} alt="Favoritar" className={styles['heart-icon']} />

            {/* Descrição do produto */}
            <div className={styles['product-description']}>{product.description}</div>

            {/* Preços */}
            <div className={styles['price-container']}>
                {product.oldPrice && (
                    <div className={styles['old-price']}>
                        <span>{product.oldPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </div>
                )}
                <div className={styles['current-price']}>
                    <strong>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                </div>
            </div>
        </div>
    );
};

export default Card;