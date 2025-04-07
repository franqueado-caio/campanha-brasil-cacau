import React from 'react';
import styles from './HeaderCheck.module.css';
import { useNavigate } from 'react-router-dom';

interface HeaderCheckProps {
    // Você pode adicionar props específicas para este header, se necessário
}

const HeaderCheck: React.FC<HeaderCheckProps> = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <b className={styles.logo} onClick={navigateToHome} style={{ cursor: 'pointer' }}>
                        <b className={styles.logoBrasil}>BRASIL</b>
                        <b className={styles.logoCacau}>CACAU</b>
                    </b>
                </div>
                {/* Você pode adicionar mais elementos aqui, se necessário */}
            </div>
        </header>
    );
};

export default HeaderCheck;