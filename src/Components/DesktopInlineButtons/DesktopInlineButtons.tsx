import React, { useState } from 'react';
import styles from './DesktopInlineButtons.module.css';

interface DesktopInlineButtonsProps {
    buttons: string[];
}

const DesktopInlineButtons: React.FC<DesktopInlineButtonsProps> = ({ buttons }) => {
    const [clickedButton, setClickedButton] = useState<string | null>(null);

    const handleButtonClick = (buttonText: string) => {
        setClickedButton(buttonText);
        // console.log(`Botão "${buttonText}" clicado!`); // Removido
    };

    return (
        <div className={styles['content-btn-desktop']}>
            {buttons.map((buttonText) => {
                const isFranchiseButton = buttonText === 'seja um franqueado';
                return (
                    <button
                        className={`${styles['btn-desktop']} ${isFranchiseButton ? styles['franchise-button'] : ''}`}
                        key={buttonText}
                        onClick={() => handleButtonClick(buttonText)}
                    >
                        {buttonText}
                    </button>
                );
            })}
            {/* {clickedButton && <p>Botão clicado: {clickedButton}</p>} Removido*/}
        </div>
    );
};

export default DesktopInlineButtons;