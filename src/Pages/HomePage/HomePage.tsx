import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import ContentImages from '../../Components/ContentImages/ContentImages';
import CepModal from '../../Components/CepModal/CepModal';
import DesktopInlineButtons from '../../Components/DesktopInlineButtons/DesktopInlineButtons';
import CookieBanner from '../../Components/CookieBanner/CookieBanner';
import Footer from '../../Components/Footer/Footer';
import CategoryDetails from '../../Components/CategoryDetails/CategoryDetails';
import styles from './HomePage.module.css';
import { Product, DataProducts } from '../../Components/DataProducts/DataProducts';

function Home() {
    const buttonTexts = ['seja um franqueado', 'Até 3x sem juros com parcelas à partir de R$30,00', '15% de desconto nos pagamentos via PIX', 'Frete Grátis em compras à partir de R$80,00* Aproveite!'];
    const [filteredProducts, setFilteredProducts] = useState(DataProducts);

    const handleSearchResults = (results: Product[]) => {
        setFilteredProducts(results);
    };

    return (
        <div className={styles['content-home-page']}>
            <Header onSearchResults={handleSearchResults} />
            <CookieBanner />
            <CepModal />
            <ContentImages />
            <DesktopInlineButtons buttons={buttonTexts} />
            <CategoryDetails searchTerm="" icoHeart="../../Assets/Img/heart.png" products={filteredProducts} /> {/* Passa filteredProducts */}
            <Footer />
        </div>
    );
}

export default Home;