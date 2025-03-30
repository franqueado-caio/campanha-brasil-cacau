import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../Components/ProductCard/ProductCard'; // Importe o componente ProductCard
import styles from './CategoryDetails.module.css'; // Importe o arquivo CSS
import exampleProducts from '../DataProducts/DataProducts'; // Importe o array de produtos

interface CategoryDetailsProps {
    searchTerm: string;
    className?: string;
    icoHeart: string;
}

const CategoryDetails: React.FC<CategoryDetailsProps> = ({ searchTerm, icoHeart }) => {
    const navigate = useNavigate();

    const filteredProducts = exampleProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleProductClick = (product: any) => {
        navigate(`/product/${product.id}`); // Redireciona para /product/:id
    };

    return (
        <div className={styles['category-details']}>
            <div className={styles['product-section']}>
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        icoHeart={icoHeart}
                        onClick={() => handleProductClick(product)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoryDetails;