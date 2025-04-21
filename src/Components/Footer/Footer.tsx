import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';
import icoInstagram from '../../Assets/Img/instagram.png';
import icoFacebook from '../../Assets/Img/facebook-app-symbol.png';
import icoYoutube from '../../Assets/Img/youtube.png';
import amexIco from '../../Assets/Img/amex-ico.svg';
import visaIco from '../../Assets/Img/visa-ico.svg';
import masterIco from '../../Assets/Img/master-card-ico.svg';
import eloIco from '../../Assets/Img/elo-ico.svg';
import dinersIco from '../../Assets/Img/diners-ico.svg';
import seloIco from '../../Assets/Img/recomenta-ico.webp';
import ModalResponse, { ModalResponseProps } from '../../Components/ModalResponse/ModalResponse';

function Footer() {
    const [isInstitutionalOpen, setIsInstitutionalOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalProps, setModalProps] = useState<ModalResponseProps>({
        show: false,
        title: '',
        message: '',
        onClose: () => setShowModal(false),
    });

    const toggleInstitutional = () => {
        if (isMobile) {
            setIsInstitutionalOpen(!isInstitutionalOpen);
        }
    };

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleCloseModal = () => {
        setShowModal(false);
        setModalProps(prevProps => ({ ...prevProps, show: false }));
    };

    const handleSubscribeTest = () => {
        setModalProps({
            show: true,
            title: 'Cadastro Realizado!',
            message: 'Obrigado! Você receberá nossas ofertas.',
            onClose: handleCloseModal, // Use a função para fechar o modal
        });
        setShowModal(true);
        setNome('');
        setEmail('');
    };

    return (
        <footer className={styles.footer}>
            <div className={styles['footer-content']}>
                <div className={styles['newsletter-section']}>
                    <span className={styles['newsletter-title']}>Fique por dentro das novidades</span>
                    <div className={styles['newsletter-form']}>
                        <input
                            type="text"
                            placeholder="Digite seu nome"
                            className={styles['newsletter-input']}
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Digite seu e-mail"
                            className={styles['newsletter-input']}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className={styles['newsletter-button']} onClick={handleSubscribeTest}>Cadastrar</button>
                    </div>
                </div>
                <div className={styles['social-section']}>
                    <div className={styles['content-logo-footer']}>
                        <b className={styles['cookie-logo-br-footer']}>BRASIL </b>
                        <b className={styles['cookie-logo-ca-footer']}>CACAU</b>
                    </div>
                    <div className={styles['content-social-icons']}>
                        <img className={styles['social-icon']} src={icoInstagram} alt="Instagram" />
                        <img className={styles['social-icon']} src={icoFacebook} alt="Facebook" />
                        <img className={styles['social-icon-youtube']} src={icoYoutube} alt="Twitter" />
                    </div>
                </div>
                <div className={styles['institutional-section']}>
                    <div className={styles['institutional-title-container']} onClick={toggleInstitutional}>
                        <span className={styles['institutional-title']}>Institucional</span>
                        {isMobile && (
                            <span className={styles['institutional-arrow']}>
                                {isInstitutionalOpen ? '▲' : '▼'}
                            </span>
                        )}
                    </div>
                    {isMobile ? (
                        isInstitutionalOpen && (
                            <div className={styles['institutional-links']}>
                                <a href="#">Sobre a gente</a>
                                <a href="#">Trabalhe Conosco</a>
                                <a href="#">Nossas Lojas</a>
                                <a href="#">Trocas e devoluções</a>
                                <a href="#">Política de Privacidade</a>
                                <a href="#">Política Promocional</a>
                                <a href="#">Política de Pagamento</a>
                                <a href="#">Política de Entrega</a>
                                <a href="#">Política de Cookies</a>
                                <a href="#">Dúvidas Frequentes</a>
                                <a href="#">FAQ Clube Brasil Cacau</a>
                                <a href="#">Brasil Cacau para empresas</a>
                                <a href="#">Regulamento Clube Brasil Cacau</a>
                                <a href="#">Governança Corporativa</a>
                                <a href="#">Fale Conosco</a>
                                <a href="#">Catálogo Completo</a>
                                <a href="#">Termos de Uso</a>
                                <a href="#">Política de qualidade e segurança dos alimentos</a>
                            </div>
                        )
                    ) : (
                        <div className={styles['institutional-links']}>
                            <a href="#">Sobre a gente</a>
                            <a href="#">Trabalhe Conosco</a>
                            <a href="#">Nossas Lojas</a>
                            <a href="#">Trocas e devoluções</a>
                            <a href="#">Política de Privacidade</a>
                            <a href="#">Política Promocional</a>
                            <a href="#">Política de Pagamento</a>
                            <a href="#">Política de Entrega</a>
                            <a href="#">Política de Cookies</a>
                            <a href="#">Dúvidas Frequentes</a>
                            <a href="#">FAQ Clube Brasil Cacau</a>
                            <a href="#">Brasil Cacau para empresas</a>
                            <a href="#">Regulamento Clube Brasil Cacau</a>
                            <a href="#">Governança Corporativa</a>
                            <a href="#">Fale Conosco</a>
                            <a href="#">Catálogo Completo</a>
                            <a href="#">Termos de Uso</a>
                            <a href="#">Política de qualidade e segurança dos alimentos</a>
                        </div>
                    )}
                </div>
                <div className={styles['payment-section']}>
                    <span className={styles['payment-title']}>Compre Seguro</span>
                    <div className={styles['payment-icons']}>
                        <img className={styles['payment-ico']} src={amexIco} alt="Amex" />
                        <img className={styles['payment-ico']} src={visaIco} alt="Visa" />
                        <img className={styles['payment-ico']} src={masterIco} alt="Mastercard" />
                        <img className={styles['payment-ico']} src={eloIco} alt="Elo" />
                        <img className={styles['payment-ico']} src={dinersIco} alt="Diners" />
                    </div>
                    <div className={styles['payment-info']}>
                        <img src={seloIco} alt="Selo de Segurança" className={styles['security-seal']} />
                        {/* <img src="/caminho/para/linx-pay-icon.png" alt="Linx Pay" />
                        <img src="/caminho/para/vtex-icon.png" alt="VTEX" />
                        <img src="/caminho/para/avanti-icon.png" alt="AVANTI" /> */}
                    </div>
                    <hr className={styles['bar-content']} />
                </div>
                <div className={styles['company-info']}>
                    <p className={styles['company-text']} >Nibs Participações S.A. (CRCM), Sociedade Anônima, com sede na Rod. Fernão Dias, SN, KM 925,8, 1º andar, sala 1, Roseira, Extrema/MG, CEP 37640-000, inscrita no CNPJ/MF sob o nº 35.539.382/0001-30, detentora da marca Chocolates Brasil Cacau.</p>
                </div>
            </div>
            <ModalResponse {...modalProps} />
        </footer>
    );
}

export default Footer;