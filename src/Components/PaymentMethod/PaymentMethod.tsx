import React, { useState } from 'react';
import styles from './PaymentMethod.module.css';
import ModalResponse from '../ModalResponse/ModalResponse'; // Importe o ModalResponse

interface PaymentMethodProps {
    link: string;
    onClose: () => void;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({ link, onClose }) => {
    const [showCopySuccessModal, setShowCopySuccessModal] = useState(false);
    const [showCopyErrorModal, setShowCopyErrorModal] = useState(false);

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(link)
            .then(() => {
                setShowCopySuccessModal(true);
            })
            .catch((err) => {
                console.error('Falha ao copiar o link: ', err);
                setShowCopyErrorModal(true);
            });
    };

    const handleCloseSuccessModal = () => {
        setShowCopySuccessModal(false);
    };

    const handleCloseErrorModal = () => {
        setShowCopyErrorModal(false);
    };

    return (
        <div className={styles['payment-modal-overlay']}>
            <div className={styles['payment-modal']}>
                <h2 className={styles['modal-title']}><b className={styles['content-modaL-text-logo-b']}>BRASIL</b><b className={styles['content-modaL-text-logo-c']}>CACAU</b> <br /> Método de Pagamento</h2>
                <p className={styles['modal-message']}>Clique no link abaixo ou copie para pagar com PicPay:</p>
                <div className={styles['link-container']}>
                    <a href={link} target="_blank" rel="noopener noreferrer" className={styles['picpay-link']}>
                        Pagar com PicPay
                    </a>
                    <button onClick={handleCopyToClipboard} className={styles['copy-button']}>
                        Copiar Link
                    </button>
                </div>
                <button onClick={onClose} className={styles['close-button']}>
                    Fechar
                </button>
            </div>

            {/* Modal de sucesso ao copiar */}
            <ModalResponse
                show={showCopySuccessModal}
                onClose={handleCloseSuccessModal}
                title="Link Copiado!"
                message="O link do PicPay foi copiado para a área de transferência."
            />

            {/* Modal de erro ao copiar */}
            <ModalResponse
                show={showCopyErrorModal}
                onClose={handleCloseErrorModal}
                title="Erro ao Copiar"
                message="Não foi possível copiar o link para a área de transferência."
            />
        </div>
    );
};

export default PaymentMethod;