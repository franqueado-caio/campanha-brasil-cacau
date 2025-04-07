import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import locationICO from '../../Assets/Img/pin.png';
import homeICO from '../../Assets/Img/home.png';
import storeIco from '../../Assets/Img/shop.png';
import arrowIco from '../../Assets/Img/down-arrow.png';
import styles from './CepModal.module.css';
import axios from 'axios';
import lojas from '../../Data/StoreAddress.json'; // Importa o arquivo data.json

interface Endereco {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
    erro?: boolean;
}

interface Loja {
    nome: string;
    endereco: string;
    cep: string;
}


function CepModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [cep, setCep] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [endereco, setEndereco] = useState<Endereco | null>(null);
    const [erro, setErro] = useState<string | null>(null);
    const [lojaProxima, setLojaProxima] = useState<Loja | null>(null);
    const navigate = useNavigate();

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        setShowOptions(false);
    };

    const formatCep = useCallback((value: string) => {
        const cleanedValue = value.replace(/\D/g, '');
        if (cleanedValue.length <= 5) {
            return cleanedValue;
        } else if (cleanedValue.length === 8) {
            return `${cleanedValue.slice(0, 5)}-${cleanedValue.slice(5)}`;
        }
        return cleanedValue;
    }, []);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setCep(e.target.value);
        setIsTyping(true);
    }, []);

    useEffect(() => {
        if (cep.length === 8 && isTyping) {
            setCep(formatCep(cep));
            setIsTyping(false);
        } else if (cep.length < 8) {
            setIsTyping(true);
        }
    }, [cep, formatCep, isTyping]);

    const buscarEndereco = useCallback(async () => {
        try {
            const formattedCepForApi = cep.replace('-', '');
            const response = await axios.get(`https://viacep.com.br/ws/${formattedCepForApi}/json/`);
            if (response.data.erro) {
                setErro('CEP não encontrado.');
                setEndereco(null);
            } else {
                setEndereco(response.data);
                setErro(null);
                encontrarLojaProximaHandler();
            }
        } catch (error) {
            setErro('Erro ao buscar CEP.');
            setEndereco(null);
        }
    }, [cep]);

    const encontrarLojaMaisProxima = useCallback((cepUsuario: string, lojas: Loja[]) => {
        const cleanedCepUsuario = cepUsuario.replace('-', '');
        let menorDiferenca = Infinity;
        let lojaMaisProxima: Loja | null = null;

        for (const loja of lojas) {
            const cleanedCepLoja = loja.cep.replace('-', '');
            const diferenca = Math.abs(parseInt(cleanedCepUsuario) - parseInt(cleanedCepLoja));
            if (diferenca < menorDiferenca) {
                menorDiferenca = diferenca;
                lojaMaisProxima = loja;
            }
        }
        return lojaMaisProxima;
    }, []);

    const encontrarLojaProximaHandler = useCallback(() => {
        const formattedCepForSearch = cep.replace('-', '');
        const loja = encontrarLojaMaisProxima(formattedCepForSearch, lojas);
        setLojaProxima(loja);
        setShowOptions(true);
    }, [cep, encontrarLojaMaisProxima, lojas]);

    const handleShopClick = () => {
        navigate('/bag');
    };


    return (
        <div className={styles['cep-modal']}>
            <div className={styles['cep-input']} onClick={toggleOpen}>
                <span className={styles['location-ico']}> <img src={locationICO} alt="icone-localização" /></span>
                <input
                    type="text"
                    placeholder="00000-000"
                    value={cep}
                    onChange={handleInputChange}
                    className={styles['number-content-input']}
                    maxLength={9}
                />
                <span className={styles['arrow-icon']}> <img src={arrowIco} alt="" /></span>
            </div>
            {isOpen && !showOptions && (
                <div className={styles['cep-menu']}>
                    <span className={styles['content-text-cep-menu']}>Digite seu CEP para ter acesso aos produtos e ofertas da sua região:</span>
                    <input
                        className={styles['content-input-menu']}
                        type="text"
                        placeholder="Digite o CEP"
                        value={cep}
                        onChange={handleInputChange}
                        maxLength={8}
                        onBlur={() => setCep(formatCep(cep))}
                    />
                    <button className={styles['content-btn-menu']} onClick={buscarEndereco}>Verificar</button>
                    {erro && <p style={{ color: 'red' }}>{erro}</p>}
                </div>
            )}
            {isOpen && showOptions && endereco && lojaProxima && (
                <div className={styles['cep-menu-select-address']}>
                    <div>
                        <h3 className={styles['content-menu-select-address']}>Como deseja receber suas compras?</h3>
                        <p className={styles['content-menu-option-address']}>Receber em:</p>
                        <div className={styles['content-home-address']}>
                            <input className={styles['content-home-address-radio']} type="radio" id="receiveHome" name="deliveryOption" />
                            <label className={styles['content-home-address-text']} htmlFor="receiveHome">
                                <span><img className={styles['content-home-address-ico']} src={homeICO} alt="icone-casa" /></span> {endereco.logradouro}, {endereco.bairro} - {endereco.localidade}/{endereco.uf}
                            </label>
                        </div>
                        <p className={styles['content-menu-option-address']}>Retirar na loja:</p>
                        <div className={styles['content-store-address']}>
                            <input className={styles['content-home-address-radio']} type="radio" id="pickupStore" name="deliveryOption" />
                            <label className={styles['content-home-address-text']} htmlFor="pickupStore">
                                <span><img className={styles['content-home-store-ico']} src={storeIco} alt="" /></span> {lojaProxima.nome} - {lojaProxima.endereco}
                            </label>
                        </div>
                        <button onClick={handleShopClick} className={styles['go-shopping']}>Ir para as compras</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CepModal;