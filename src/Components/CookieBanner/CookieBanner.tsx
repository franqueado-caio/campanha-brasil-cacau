import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CookieBanner.module.css';

function CookieBanner() {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (consent) {
            setIsVisible(false);
        }
    }, []); // Executa apenas na montagem do componente

    const handleCookiesPolicyClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        navigate('/cookies-policy');
    };

    const handleAcceptAll = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
    };

    const handleRejectAll = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className={styles['cookie-banner']}>
            <div className={styles['cookie-content']}>
                <div className={styles['cookie-logo']}>
                    <b className={styles['cookie-logo-br']}>BRASIL</b>
                    <b className={styles['cookie-logo-ca']}>CACAU</b>
                </div>
                <div className={styles['cookie-text']}>
                    <p className={styles['cookie-paragraph']}>
                        Nós utilizamos cookies para personalizar a sua experiência no site. Ao continuar navegando, você concorda com a nossa{' '}
                        <a className={styles['link-text']} href="/politica-de-cookies" target="_blank" rel="noopener noreferrer">
                            Política de Cookies
                        </a>{' '}
                        e{' '}
                        <a className={styles['link-text']} href="/politica-de-privacidade" onClick={handleCookiesPolicyClick} target="_blank" rel="noopener noreferrer">
                            Política de Privacidade
                        </a>
                        .
                    </p>
                </div>
                <div className={styles['content-cookie-options']}>
                    <button className={styles['cookie-options-privacy']}>Opções de Privacidade</button>
                    <button className={styles['cookie-options']} onClick={handleRejectAll}>
                        Rejeitar Todos os Cookies
                    </button>
                    <button className={styles['cookie-options-submit']} onClick={handleAcceptAll}>
                        Aceitar Todos
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CookieBanner;