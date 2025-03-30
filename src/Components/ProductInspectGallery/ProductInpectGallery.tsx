import React from 'react';
import styles from './ProductInspectGallery.module.css';
import ProductInspectCarousel from '../ProductInspectCarousel/ProductInspectCarousel';
import clubIco from '../../Assets/Img/ico_content_card_promotion.webp';

interface ProductInspectGalleryProps {
    gallery: string[];
    selectedImage: string;
    setSelectedImage: React.Dispatch<React.SetStateAction<string>>;
    isMobile: boolean;
}

const ProductInspectGallery: React.FC<ProductInspectGalleryProps> = ({ gallery, selectedImage, setSelectedImage, isMobile }) => {
    return (
        <>
            {isMobile ? (
                <ProductInspectCarousel
                    gallery={gallery}
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                    isMobile={isMobile}
                />
            ) : (
                <>
                    <img src={selectedImage} alt="Imagem do produto" className={styles['product-image-large']} />
                    <div className={styles['content-product-ico']} >
                        <img className={styles['product-ico-promotion']} src={clubIco} alt="" />
                    </div>
                    <div className={styles['gallery']}>
                        {gallery.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Imagem ${index + 1}`}
                                className={`${styles['thumbnail']} ${selectedImage === img ? styles['selected'] : ''}`}
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </div>
                </>
            )}
        </>
    );
};

export default ProductInspectGallery;