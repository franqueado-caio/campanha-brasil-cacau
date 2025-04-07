// src/Pages/ProductInspectPage/ProductInpectPage.tsx
import React, { useState, useEffect } from 'react';
import styles from './ProductInspectPage.module.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import DataProducts, { Product } from '../../Components/DataProducts/DataProducts';
import ProductInspect, { ProductInspectProps } from '../../Components/ProductInspect/ProductInspect'; // Importe a interface de props
import ProductDetails from '../../Components/ProductDetails/ProductDetails';

const ProductInpectPage = () => {
    const { id } = useParams<{ id?: string }>();
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product | undefined>(undefined);

    useEffect(() => {
        const foundProduct = DataProducts.find((p) => p.id === parseInt(id || '0'));
        setProduct(foundProduct);
    }, [id]);

    const handleGoBack = () => {
        navigate('/');
    };

    if (!product) {
        return <div>Produto não encontrado.</div>;
    }

    return (
        <div className={styles['product-inspect-page']}>
            <div className={styles['content-product-inspect-page']}>
                <Header />
                <ProductInspect
                    product={{
                        id: product.id,
                        name: product.name,
                        imageUrl: product.imageUrl || '',
                        secondaryImageUrl: product.secondaryImageUrl,
                        gallery: product.gallery || [], // Fornece array vazio como fallback
                    }}
                    onBack={handleGoBack}
                />
                <ProductDetails productId={product.id} /> {/* Renderize o componente ProductDetails */}
                <Footer />
            </div>
        </div>
    );
};

export default ProductInpectPage;