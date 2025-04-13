import React, { useState } from 'react';
import './Header.module.css';
import styles from './Header.module.css';
import searchIcon from '../../Assets/Img/search.png';
import userIco from '../../Assets/Img/user.png';
import suportIco from '../../Assets/Img/support.png';
import bagIco from '../../Assets/Img/shopping-bag.png';
import { useNavigation } from './script';
import LoginOrRegisterModal from '../LoginOrRegisterModal/LoginOrRegisterModal';
import { useAuth } from '../../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useShoppingBag } from '../../Contexts/ShoppingBagContext'; // Importe o hook do contexto

interface HeaderProps {
    // onBagIconClick?: () => void; // Remova ou deixe como está, a lógica agora está interna
}

function Header({ /* onBagIconClick */ }: HeaderProps) {
    const { navigateToHome } = useNavigation();
    const [showModal, setShowModal] = useState(false);
    const { loggedInUser, logout } = useAuth();
    const navigate = useNavigate();
    const { bagItems } = useShoppingBag(); // Acesse os itens da sacola
    const itemCount = bagItems.reduce((sum, item) => sum + item.quantity, 0);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const handleBagClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        navigate('/bag'); // Navega para a página da sacola
    };

    return (
        <header className="custon-header">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <b className="navbar-brand" onClick={navigateToHome} style={{ cursor: "pointer" }}>
                        <b className='text-header_b' style={{ color: 'white', fontWeight: "900", fontSize: "25px" }}>BRASIL</b>
                        <b className='text-logo_c' style={{ color: '#63251e', fontWeight: "900", fontSize: "25px" }}>CACAU</b>
                    </b>

                    <div id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item search-input-mobile" >
                                <form className="form-inline my-2 my-lg-0 d-flex align-items-center">
                                    <button type="submit" style={{ background: 'none', border: 'none', marginLeft: '10px' }}>
                                        <img id='search-ico' src={searchIcon} alt="Buscar" style={{ width: '24px', height: '24px', position: "absolute", display: "flex", justifyContent: "flex-start", direction: "initial", marginLeft: "12px", marginTop: "-10px" }} />
                                    </button>
                                    <input
                                        className="form-control custon-input"
                                        type="search"
                                        placeholder="O que você busca? (Ex: trufa)"
                                        aria-label="Search"
                                    />
                                </form>
                            </li>
                            <li className={styles['nav-item']} >
                                <a className="nav-link" href="#" style={{ color: "white" }}>
                                    Seja um franqueado
                                </a>
                            </li>
                            <li className={styles['nav-item']}>
                                <a className="nav-link" href="#" style={{ color: "white" }}>
                                    Clube Brasil Cacau
                                </a>
                            </li>
                            {loggedInUser ? (
                                <li className={styles['user-login-or-register']}>
                                    <div className="nav-link" style={{ color: "white", display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                        <img className={styles['iteration-header']} src={userIco} alt="Usuário logado" />
                                        <span className={styles['iteration-header-text']}>Bem-vindo(a), {loggedInUser.nome}</span>
                                    </div>
                                </li>
                            ) : (
                                <li className={styles['user-login-or-register']}>
                                    <a
                                        className="nav-link"
                                        href="#"
                                        style={{ color: "white" }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setShowModal(true);
                                        }}
                                    >
                                        <img className={styles['iteration-header']} src={userIco} alt="login ou registro" />
                                        <span className={styles['iteration-header-text']}>Entre ou cadastre-se</span>
                                    </a>
                                </li>
                            )}
                            <li className={styles['nav-item']}>
                                <a className="nav-link" href="#" style={{ color: "white" }}>
                                    <img className={styles['iteration-header']} src={suportIco} alt="Suporte" />
                                </a>
                            </li>
                            <li className={styles['iteration-bag-item']}>
                                <a
                                    className="nav-link"
                                    href="#"
                                    style={{ color: "white", cursor: "pointer", position: 'relative', display: 'inline-block' }}
                                    onClick={handleBagClick}
                                >
                                    <img className={styles['iteration-header']} src={bagIco} alt="Sacola de compras" />
                                    {itemCount > 0 && (
                                        <div className={styles['content-item-count']}>
                                            <span className={styles['item-count']}>{itemCount}</span>
                                        </div>
                                    )}
                                </a>
                            </li>
                            {loggedInUser && (
                                <li className={styles['nav-item']}>
                                    <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                                        Sair
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: "white" }}>
                                    {/* Todos os Produtos */}
                                </a>
                            </li>
                            {/* Outros links de categoria */}
                        </ul>
                    </div>
                </nav>
            </div >
            {showModal && <LoginOrRegisterModal isOpen={showModal} onClose={() => setShowModal(false)} />}
        </header >
    );
}

export default Header;