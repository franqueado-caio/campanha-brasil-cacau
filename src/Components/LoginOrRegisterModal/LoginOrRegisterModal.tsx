import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './LoginOrRegisterModal.module.css';

interface LoginOrRegisterModalProps {
    onClose: () => void;
}

const LoginOrRegisterModal: React.FC<LoginOrRegisterModalProps> = ({ onClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRobot, setIsRobot] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        // Verifica se o usuário já está logado
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
            onClose(); // Fecha o modal se o usuário estiver logado
        }
    }, [onClose]);

    const formatPhone = (value: string) => {
        let formattedValue = value.replace(/\D/g, '');
        formattedValue = formattedValue.replace(/(\d{2})(\d)/, '($1) $2');
        formattedValue = formattedValue.replace(/(\d{5})(\d)/, '$1-$2');
        setPhone(formattedValue);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            let response;
            if (isLogin) {
                response = await axios.post('/api/login', {
                    email,
                    password,
                });
            } else {
                response = await axios.post('/api/register', {
                    name,
                    phone,
                    email,
                    password,
                    isRobot,
                });
            }

            // Salva o estado do usuário logado no localStorage
            localStorage.setItem('loggedInUser', JSON.stringify(response.data.user));
            onClose(); // Fecha o modal após o sucesso
        } catch (err) {
            setError(isLogin ? 'Erro ao fazer login. Tente novamente.' : 'Erro ao cadastrar. Tente novamente.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles['modal-overlay']}>
            <div className={styles['modal-content']}>
                <h2 className={styles['modal-text-login']}>{isLogin ? 'Login' : 'Cadastro'}</h2>
                <div className={styles['modal-content-text-logo']}>
                    <b className={styles['modal-text-logo-b']}>BRASIL</b> <b className={styles['modal-text-logo-c']}>CACAU</b>
                </div>
                <form onSubmit={handleSubmit}>
                    {!isLogin && <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />}
                    {!isLogin && <input type="tel" placeholder="Telefone (11 9950-9999)" value={phone} onChange={(e) => formatPhone(e.target.value)} required />}
                    <input  className={styles['modal-welcome-email']} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input className={styles['modal-welcome-passworld']} type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    {!isLogin && (
                        <label className={styles['modal-checkbox']}>
                            <input className={styles['modal-checkbox-input']} type="checkbox" checked={isRobot} onChange={(e) => setIsRobot(e.target.checked)} required />
                            Não sou um robô
                        </label>
                    )}
                    {error && <p className={styles.error}>{error}</p>}
                    <button className={styles['modal-btn-submit']} type="submit" disabled={loading}>
                        {loading ? (isLogin ? 'Entrando...' : 'Cadastrando...') : isLogin ? 'Entrar' : 'Cadastrar'}
                    </button>
                </form>
                <button className={styles['modal-btn-islogin']} onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Criar conta' : 'Já tenho conta'}
                </button>
                <button className={styles['close-button']} onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
};

export default LoginOrRegisterModal;