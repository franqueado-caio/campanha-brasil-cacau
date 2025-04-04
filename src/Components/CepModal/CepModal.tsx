import React, { useState } from 'react';
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
    const [endereco, setEndereco] = useState<Endereco | null>(null);
    const [erro, setErro] = useState<string | null>(null);
    const [lojaProxima, setLojaProxima] = useState<Loja | null>(null);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        setShowOptions(false);
    };

    const buscarEndereco = async () => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (response.data.erro) {
                setErro('CEP não encontrado.');
                setEndereco(null);
            } else {
                setEndereco(response.data);
                setErro(null);
                encontrarLojaProximaHandler(); // Chama a função para encontrar a loja mais próxima
            }
        } catch (error) {
            setErro('Erro ao buscar CEP.');
            setEndereco(null);
        }
    };

    const encontrarLojaMaisProxima = (cepUsuario: string, lojas: Loja[]) => {
        let menorDiferenca = Infinity;
        let lojaMaisProxima: Loja | null = null;

        for (const loja of lojas) {
            const diferenca = Math.abs(parseInt(cepUsuario) - parseInt(loja.cep));
            if (diferenca < menorDiferenca) {
                menorDiferenca = diferenca;
                lojaMaisProxima = loja;
            }
        }

        return lojaMaisProxima;
    };

    const encontrarLojaProximaHandler = () => {
        const loja = encontrarLojaMaisProxima(cep, lojas);
        setLojaProxima(loja);
        setShowOptions(true);
    };

    return (
        <div className={styles['cep-modal']}>
            <div className={styles['cep-input']} onClick={toggleOpen}>
                <span className={styles['location-ico']}> <img src={locationICO} alt="icone-localização" /></span>
                <input
                    type="text"
                    placeholder="00000-000"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
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
                        onChange={(e) => setCep(e.target.value)}
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
                        <button className={styles['go-shopping']}>Ir para as compras</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CepModal;