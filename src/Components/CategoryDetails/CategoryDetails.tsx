import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../Components/ProductCard/ProductCard';
import styles from './CategoryDetails.module.css';
import { Product } from '../DataProducts/DataProducts'; // Importe a interface Product

interface CategoryDetailsProps {
    searchTerm: string;
    className?: string;
    icoHeart: string;
    products: Product[]; // Adicionamos a prop products do tipo Product[]
}

const CategoryDetails: React.FC<CategoryDetailsProps> = ({ searchTerm, className, icoHeart, products }) => {
    const navigate = useNavigate();

    const handleProductClick = (product: Product) => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div className={`${styles['category-details']} ${className}`}>
            <div className={styles['product-section']}>
                {products.map((product) => ( // Renderiza a lista de produtos recebida via prop
                    <ProductCard
                        key={product.id}
                        product={{
                            id: product.id,
                            name: product.name,
                            imageUrl: product.imageUrl || '',
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