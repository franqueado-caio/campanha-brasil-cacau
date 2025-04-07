import React, { useState, useEffect } from 'react';
import styles from './ProductInspect.module.css';
import GoBack from "../../Assets/Img/left.png";
import ProductInspectGallery from '../../Components/ProductInspectGallery/ProductInpectGallery'; // Importe o componente

export interface ProductInspectProps {
    product: {
        id: number;
        name: string;
        imageUrl: string;
        secondaryImageUrl?: string;
        gallery: string[];
    };
    onBack: () => void;
}

const ProductInspect: React.FC<ProductInspectProps> = ({ product, onBack }) => {
    const [selectedImage, setSelectedImage] = useState(product.imageUrl);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className={styles['product-inspect']}>
            <div className={styles['to-go-back']}>
                <img
                    src={GoBack} // Use apenas GoBack
                    className={styles['back-button']}
                    onClick={onBack}
                    alt="Ícone de voltar"
                />
                <b className={styles['back-text']}>Voltar</b>
            </div>

            <div className={styles['product-details']}>
                <div className={styles['inspection-title']}>
                    <h1 className={styles['inspection-name']}>{product.name}</h1>
                </div>
                {/* Lógica de renderização de imagem e galeria */}
                <ProductInspectGallery
                    gallery={product.gallery}
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                    isMobile={isMobile}
                />
                {/* Lógica de interação, pagamento, frete e descrição */}
            </div>
        </div>
    );
};

export default ProductInspect;