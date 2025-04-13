import React from 'react';
import styles from './PaymentMethod.module.css';

interface PaymentMethodProps {
    status: 'success' | 'failure' | 'pending' | null;
    onClose: () => void;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({ status, onClose }) => {
    let title = '';
    let message = '';
    let icon = null; // Você pode adicionar ícones aqui dependendo do status

    switch (status) {
        case 'success':
            title = 'Pagamento Concluído!';
            message = 'Seu pedido foi processado com sucesso.';
            // Exemplo de como adicionar um ícone (você precisaria importar a imagem)
            // icon = <img src={successIcon} alt="Sucesso" className={styles['status-icon']} />;
            break;
        case 'failure':
            title = 'Falha no Pagamento';
            message = 'Ocorreu um erro ao processar o seu pagamento. Por favor, tente novamente.';
            // icon = <img src={errorIcon} alt="Erro" className={styles['status-icon']} />;
            break;
        case 'pending':
            title = 'Pagamento Pendente';
            message = 'Seu pagamento está pendente de aprovação. Você será notificado sobre o status.';
            // icon = <img src={pendingIcon} alt="Pendente" className={styles['status-icon']} />;
            break;
        default:
            return null; // Não exibir o modal se o status for nulo
    }

    return (
        <div className={styles['payment-modal-overlay']}>
            <div className={styles['payment-modal']}>
                <h2 className={styles['modal-title']}>
                    <b className={styles['content-modaL-text-logo-b']}>BRASIL</b>
                    <b className={styles['content-modaL-text-logo-c']}>CACAU</b> <br /> Status do Pagamento
                </h2>
                {icon && <div className={styles['icon-container']}>{icon}</div>}
                <p className={styles['modal-message']}>{message}</p>
                <div className={styles['button-container']}>
                    <button onClick={onClose} className={styles['close-button']}>
                        Fechar
                    </button>
                    {status === 'failure' && (
                        <button onClick={() => {
                            onClose();
                            // Adicione aqui a lógica para tentar novamente o pagamento
                            // (ex: redirecionar para a página do carrinho ou checkout)
                            console.log('Tentar novamente o pagamento');
                        }} className={styles['retry-button']}>
                            Tentar Novamente
                        </button>
                    )}
                    {status === 'success' && (
                        <button onClick={() => {
                            onClose();
                            // Adicione aqui a lógica para redirecionar para a página de pedidos
                            console.log('Ir para meus pedidos');
                        }} className={styles['view-orders-button']}>
                            Ver Meus Pedidos
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;