import React, { useState } from 'react';
import styles from './ProductDetails.module.css';
import DataProducts from '../../Components/DataProducts/DataProducts';
import { useNavigate } from 'react-router-dom';

interface ProductDetailsProps {
    productId: number;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ productId }) => {
    const product = DataProducts.find((p) => p.id === productId);
    const navigate = useNavigate();

    const [showDescription, setShowDescription] = useState(false);
    const [showChocolateType, setShowChocolateType] = useState(true);
    const [showProductInfo, setShowProductInfo] = useState(false);
    const [showIngredients, setShowIngredients] = useState(false);

    if (!product) {
        return <div>Produto não encontrado.</div>;
    }

    const handleProductClick = (relatedProductId: number) => {
        window.location.href = `/campanha-basil-cacau/product/${relatedProductId}`;
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

            <button className={styles['add-to-cart']}>Adicionar à sacola</button>

            <div className={styles['delivery-calc']}>
                <input type="text" placeholder="Digite seu CEP" className={styles['cep-input']} />
                <button className={styles['calc-button']}>Calcular</button>
                <a href="#" className={styles['cep-link']}>Não sei meu CEP</a>
            </div>

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
                {showIngredients && (
                    <ul>
                        {product.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;