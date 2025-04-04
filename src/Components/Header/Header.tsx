import React, { useState } from 'react';
import './Header.module.css';
import styles from './Header.module.css';
import searchIcon from '../../Assets/Img/search.png';
import userIco from '../../Assets/Img/user.png';
import suportIco from '../../Assets/Img/support.png';
import bagIco from '../../Assets/Img/shopping-bag.png';
import { useNavigation } from './script';
import LoginOrRegisterModal from '../LoginOrRegisterModal/LoginOrRegisterModal'; // Importe o modal

function Header() {
    const { navigateToHome } = useNavigation();
    const [showModal, setShowModal] = useState(false); // Estado para controlar o modal

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
                            <li className={styles['nav-item']}>
                                <a className="nav-link" href="#" style={{ color: "white" }}>
                                    <img className={styles['iteration-header']} src={suportIco} alt="Suporte" />
                                </a>
                            </li>
                            <li className={styles['iteration-bag-item']}>
                                <a className="nav-link" href="#" style={{ color: "white" }}>
                                    <img className={styles['iteration-header']} src={bagIco} alt="Sacola de compras" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: "white" }}>
                                    Todos os Produtos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: "white" }}>
                                    Páscoa
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: "white" }}>
                                    Brasil Cacau para Empresas
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: "white" }}>
                                    Novidades
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: "white" }}>
                                    Cartão Presente
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: "white" }}>
                                    Infantil
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: "white" }}>
                                    Trufas
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: "white" }}>
                                    Presentes
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: "white" }}>
                                    Tabletes
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: "white" }}>
                                    Bem me Faz
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div >
            {showModal && <LoginOrRegisterModal onClose={() => setShowModal(false)} />} {/* Renderiza o modal */}
        </header >
    );
}

export default Header;