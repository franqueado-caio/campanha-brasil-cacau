import React from 'react';
import Header from '../../Components/Header/Header';
import ContentImages from '../../Components/ContentImages/ContentImages';
import CepModal from '../../Components/CepModal/CepModal'; // Importe o componente CepModal
import DesktopInlineButtons from '../../Components/DesktopInlineButtons/DesktopInlineButtons'; // Importe o componente DesktopInlineButtons
import CookieBanner from '../../Components/CookieBanner/CookieBanner';
import Footer from '../../Components/Footer/Footer';
import './HomePage.module.css';

function Home() {
    const buttonTexts = ['seja um franqueado', 'Até 3x sem juros com parcelas à partir de R$30,00', '15% de desconto nos pagamentos via PIX', 'Frete Grátis em compras à partir de R$80,00* Aproveite!'];
    return (
        <div>
            <Header />
            <CookieBanner /> {/* Renderize o componente CookieBanner aqui */}
            <CepModal />
            <ContentImages />
            <DesktopInlineButtons buttons={buttonTexts} />

            < Footer />
        </div>
    );
}

export default Home;