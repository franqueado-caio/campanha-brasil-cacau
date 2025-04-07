// src/Components/CategoryDetails/CategoryDetails.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard, { ProductCardProps } from '../../Components/ProductCard/ProductCard';
import styles from './CategoryDetails.module.css';
import exampleProducts, { Product } from '../DataProducts/DataProducts';

interface CategoryDetailsProps {
    searchTerm: string;
    className?: string;
    icoHeart: string;
}

const CategoryDetails: React.FC<CategoryDetailsProps> = ({ searchTerm, icoHeart }) => {
    const navigate = useNavigate();

    const filteredProducts = exampleProducts.filter(
        (product): product is Product => product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleProductClick = (product: Product) => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div className={styles['category-details']}>
            <div className={styles['product-section']}>
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={{
                            id: product.id,
                            name: product.name,
                            imageUrl: product.imageUrl || '', // Garante que imageUrl seja string
                            secondaryImageUrl: product.secondaryImageUrl,
                            price: product.price,
                            discount: product.discount,
                        }}
                        icoHeart={icoHeart}
                        onClick={() => handleProductClick(product)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoryDetails;