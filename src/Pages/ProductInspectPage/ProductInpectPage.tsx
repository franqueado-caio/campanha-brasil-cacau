import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ProductInspect from '../../Components/ProductInspect/ProductInspect';
import ProductDetails from '../../Components/ProductDetails/ProductDetails'; // Importe o componente ProductDetails
import DataProducts from '../../Components/DataProducts/DataProducts';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './ProductInspectPage.module.css'

function ProductInspectPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const product = DataProducts.find((p) => p.id.toString() === id);

    if (!product) {
        return <div>Produto não encontrado.</div>;
    }

    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <div className={styles['content-product-inspect-page']}>
            <Header />
            <ProductInspect product={product} onBack={handleGoBack} />
            <ProductDetails productId={product.id} /> {/* Renderize o componente ProductDetails */}
            <Footer />
        </div>
    );
}

export default ProductInspectPage;