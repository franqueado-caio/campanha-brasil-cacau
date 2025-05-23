import React, { useState, useContext } from 'react';
import styles from './ProductCard.module.css';
import thumbsUpIcon from '../../Assets/Img/ico_content_card_promotion.webp';
import clubIco from '../../Assets/Img/ico_content_card_promotion.webp';
import { useShoppingBag, BagItem } from '../../Contexts/ShoppingBagContext';

export interface ProductCardProps {
    product: {
        id: number;
        name: string;
        imageUrl: string;
        secondaryImageUrl?: string;
        price?: number;
        oldPrice?: number;
        discount?: string;
    };
    icoHeart: string;
    onClick?: (product: {
        id: number;
        name: string;
        imageUrl: string;
        secondaryImageUrl?: string;
        price?: number;
        oldPrice?: number;
        discount?: string;
    }) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, icoHeart, onClick }) => {
    const [liked, setLiked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const { addItem } = useShoppingBag(); // Use o hook do contexto para adicionar itens

    const handleAddToCart = () => {
        if (product.id && product.name && product.price !== undefined) {
            const newItem: Omit<BagItem, 'quantity'> = {
                id: product.id,
                name: product.name,
                price: product.price,
                imageUrl: product.imageUrl,
            };
            addItem(newItem);
            console.log(`${product.name} adicionado à sacola!`);
            // Você pode adicionar um feedback visual aqui, se desejar
        } else {
            console.warn('Informações do produto incompletas para adicionar à sacola.');
        }
    };

    return (
        <div
            className={styles['product-card']}
            onClick={() => onClick && onClick(product)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {product.discount && (
                <span className={styles['discount-badge']}>{product.discount}</span>
            )}
            <img
                src={isHovered && product.secondaryImageUrl ? product.secondaryImageUrl : product.imageUrl}
                alt={product.name}
                className={styles['product-image']}
            />

            <div className={styles['circle-of-the-heart']} onClick={() => setLiked(!liked)}>
                <img
                    src={clubIco}
                    alt="Favoritar"
                    className={`${styles['icoHeart']} ${styles['default-icon']} ${liked ? styles['hidden'] : ''}`}
                />
                <img
                    src={thumbsUpIcon}
                    alt="Like"
                    className={`${styles['icoHeart']} ${styles['hover-icon']} ${liked ? '' : styles['hidden']}`}
                />
            </div>

            <h3 className={styles['product-name']}>{product.name}</h3>
            <div className={styles['product-prices']}>
                {product.oldPrice !== undefined && (
                    <span className={styles['old-price']}>
                        {product.oldPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </span>
                )}
                <span className={styles['discount-price']}>
                    {product.price?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) ||
                        'Preço indisponível'}
                </span>
            </div>
            <div className={styles['content-buy-button']} onClick={handleAddToCart}>
                <button className={styles['buy-button']}>+</button>
            </div>
        </div>
    );
};

export default ProductCard;