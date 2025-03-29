import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Header.module.css';

import searchIcon from '../../Assets/Img/search.png';
import { useNavigation } from './script'; // Importe a função


function Header() {
    const { navigateToHome } = useNavigation(); // Obtenha a função de navegação
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
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Seja um franqueado
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Clube Brasil Cacau
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Entre ou cadastre-se
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-headphones-alt"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-shopping-bag"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Todos os Produtos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Páscoa
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Brasil Cacau para Empresas
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Novidades
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Cartão Presente
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Infantil
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Trufas
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Presentes
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Tabletes
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Bem me Faz
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div >
        </header >
    );
}

export default Header;