// frontend/src/Components/LoginOrRegisterModal/LoginOrRegisterModal.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginOrRegisterModal.module.css';
import { registerUser, loginUser } from '../../Api/Auth';
import ModalResponse from '../ModalResponse/ModalResponse';
import { useAuth } from '../../Contexts/AuthContext';

interface LoginOrRegisterModalProps {
    onClose: () => void;
    isOpen: boolean;
}

const LoginOrRegisterModal: React.FC<LoginOrRegisterModalProps> = ({ onClose, isOpen }) => {
    // State for controlling the login/register toggle
    const [isLogin, setIsLogin] = useState(true);
    // State for form inputs
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    // State for loading and error handling
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    // State for the response modal
    const [showResponseModal, setShowResponseModal] = useState(false);
    const [responseModalTitle, setResponseModalTitle] = useState('');
    const [responseModalMessage, setResponseModalMessage] = useState('');
    // Hooks from react-router-dom and context
    const navigate = useNavigate();
    const { loggedInUser, login } = useAuth();

    useEffect(() => {
        if (isOpen && loggedInUser) {
            onClose();
        } else if (isOpen && !loggedInUser) {
            setResponseModalTitle('Atenção');
            setResponseModalMessage('Você precisa estar logado para continuar.');
            setShowResponseModal(true);
        }
    }, [isOpen, loggedInUser, onClose]);

    const formatPhone = useCallback((value: string) => {
        let formattedValue = value.replace(/\D/g, '');
        formattedValue = formattedValue.replace(/(\d{2})(\d)/, '($1) $2');
        formattedValue = formattedValue.replace(/(\d{5})(\d)/, '$1-$2');
        setTelefone(formattedValue);
    }, []);

    const handleCloseResponseModal = useCallback(() => {
        setShowResponseModal(false);
        if (!error && !isLogin) {
            setIsLogin(true);
        }
    }, [error, isLogin]);

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            let response;
            if (isLogin) {
                response = await loginUser({ email, senha });
                console.log('Resposta de login:', response);
                if (response?.user) {
                    login(response.user);
                    onClose();
                } else {
                    setResponseModalTitle('Erro');
                    setResponseModalMessage(response?.message || 'Erro ao fazer login.');
                    setShowResponseModal(true);
                }
            } else {
                const userData = { nome, telefone, email, senha };
                response = await registerUser(userData);
                console.log('Resposta de cadastro:', response);
                setResponseModalTitle('Sucesso');
                setResponseModalMessage('Cadastro realizado com sucesso! Faça login para continuar.');
                setShowResponseModal(true);
                setIsLogin(true);
            }
        } catch (err: any) {
            setError(err?.message || 'Erro desconhecido na requisição.');
            setResponseModalTitle('Erro');
            setResponseModalMessage(err?.response?.data?.message || err?.message || 'Erro ao processar a requisição.');
            setShowResponseModal(true);
            console.error('Erro na requisição:', err);
        } finally {
            setLoading(false);
        }
    }, [isLogin, email, senha, nome, telefone, login, onClose, registerUser, loginUser]);

    return isOpen ? (
        <div className={styles['modal-overlay']}>
            <div className={styles['modal-content']}>
                <h2 className={styles['modal-text-login']}>{isLogin ? 'Login' : 'Cadastro'}</h2>
                <div className={styles['modal-content-text-logo']}>
                    <b className={styles['modal-text-logo-b']}>BRASIL</b> <b className={styles['modal-text-logo-c']}>CACAU</b>
                </div>
                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <input
                            type="text"
                            placeholder="Nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    )}
                    {!isLogin && (
                        <input
                            type="tel"
                            placeholder="Telefone (11 9950-9999)"
                            value={telefone}
                            onChange={(e) => formatPhone(e.target.value)}
                        />
                    )}
                    <input
                        className={styles['modal-welcome-email']}
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className={styles['modal-welcome-passworld']}
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                    <button className={styles['modal-btn-submit']} type="submit" disabled={loading}>
                        {loading ? (isLogin ? 'Entrando...' : 'Cadastrando...') : isLogin ? 'Entrar' : 'Cadastrar'}
                    </button>
                </form>
                <button className={styles['modal-btn-islogin']} onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Criar conta' : 'Já tenho conta'}
                </button>
                <button className={styles['close-button']} onClick={onClose}>Fechar</button>
            </div>
            <ModalResponse
                show={showResponseModal}
                onClose={handleCloseResponseModal}
                title={responseModalTitle}
                message={responseModalMessage}
            />
        </div>
    ) : null;
};

export default LoginOrRegisterModal;