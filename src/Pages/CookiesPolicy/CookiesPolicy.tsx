import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import CepModal from '../../Components/CepModal/CepModal';
import Footer from '../../Components/Footer/Footer'
import styles from './CookiesPolicy.module.css';
import { Product, DataProducts } from '../../Components/DataProducts/DataProducts';


function CookiesPolicy() {
    const [filteredProducts, setFilteredProducts] = useState(DataProducts);

    const handleSearchResults = (results: Product[]) => {
        setFilteredProducts(results);
    };


    return (
        <div>
            <Header onSearchResults={handleSearchResults} />
            <CepModal />
            <div className={styles['cookies-policy-content']}>
                <h1 className={styles['text-title-policy']}>Política de Cookies</h1>
                <p>Versão de: março de 2023</p>
                <p>Nossa missão é acreditar, proporcionar felicidade, promover a diversidade, a liberdade e valorizar as pessoas, refletindo nossa cultura popular com respeito e sabedoria, por meio de toda linha de produtos. Fazer isto com transparência, informando como seus dados são utilizados é extremamente importante, por isso, valorizamos e respeitamos essas informações.</p>
                <p>Esta Política de Cookies (Política) não é um contrato e não cria nenhum direito ou obrigação legal, mas são diretrizes referentes ao nosso uso de cookies, sendo aplicada a todos os produtos e serviços do Site www.brasilcacau.com.br (“Site”).</p>
                <p>Nesta política usamos o termo “cookies” para nos referirmos aos cookies, web beacons e outras tecnologias similares.</p>
                <p>Para maiores informações sobre como utilizamos os dados pessoais que obtemos acesso, leia nossa <a href="/politica-de-privacidade">Política de Privacidade I</a>.</p>
                <span className={styles['cookies-policy-content-subtitle']}>O Site da Brasil Cacau utiliza cookies?</span>
                <p>Sim, utilizamos cookies e outras tecnologias similares para que aqueles que acessam o Site tenham a melhor experiência possível.</p>
                <p>Ao continuar a visitar o Site ou usar nossos serviços, você está concordando com a utilização de cookies e tecnologias semelhantes para os fins descritos especificamente nesta Política.</p>
                <span className={styles['cookies-policy-content-subtitle']}>O que é um cookie?</span>
                <p>Um cookie é um pequeno arquivo adicionado ao seu dispositivo ou computador que permite ativar os recursos e funcionalidades do Site. Por exemplo, os cookies nos permitem identificar o seu dispositivo ou computador, viabilizando entrar e sair do Site com segurança, e nos ajudam a saber se alguém tentou acessar sua conta a partir de um outro dispositivo ou computador. Os cookies também nos permitem compartilhar conteúdo da Brasil Cacau com facilidade, ajudando-nos a apresentar anúncios relevantes para você.</p>
                <span className={styles['cookies-policy-content-subtitle']}>Quando o Site da Brasil Cacau utiliza cookies?</span>
                <p>O Site utiliza cookies no momento em que é realizado um acesso pelo usuário. Todos os navegadores que visitarem o Site receberão nossos cookies.</p>
                <span className={styles['cookies-policy-content-subtitle']}>Que tipos de cookies o Site da Brasil Cacau utiliza?</span>
                <p>Usamos dois tipos de cookies: cookies persistentes e cookies de sessão.</p>
                <p>Um cookie persistente ajuda a reconhecer o usuário, possibilitando retornar ou interagir com o Site. Depois de entrar na sua conta, um cookie persistente permanecerá no seu navegador e será lido pela Brasil Cacau quando você retornar ao nosso Site ou ao site de um parceiro que utilize os nossos serviços.</p>
                <p>Os cookies de sessão duram até a sessão terminar (geralmente durante a visita a um Site ou durante uma sessão do navegador).</p>
                <span className={styles['cookies-policy-content-subtitle']}>Para que os cookies são utilizados?</span>
                <p>Os cookies podem ser utilizados para reconhecê-lo quando você acessa o Site da Brasil Cacau, com o objetivo de armazenar suas preferências e para proporcionar uma experiência mais personalizada de acordo com suas configurações, além de tornar as suas interações com o Site mais rápidas e seguras.</p>
                <p>Os cookies também tornam suas interações com a Brasil Cacau mais rápidas e seguras.</p>
                <p>Além disso, os cookies permitem que nós apresentemos publicidade dentro do Site.</p>
                <span className={styles['cookies-policy-content-subtitle']}>Controle de cookies</span>
                <p>A maioria dos navegadores permite que você controle cookies em suas configurações. Entretanto, se você limitar a utilização de cookies, você não terá a experiência que preparamos para você, pois não haverá mais a personalização.</p>
                <p>Você também poderá impedir que configurações personalizadas sejam salvas, como por exemplo, nome de usuário e senha.</p>
                <span className={styles['cookies-policy-content-subtitle']}>Como desativar ou remover os cookies?</span>
                <p>Você pode escolher rejeitar ou bloquear tipos específicos de cookies que não sejam essenciais para o funcionamento do Site, configurados através da sua visita ao nosso Site ao clicar nas preferências de cookies em nossa central de privacidade.</p>
                <p>Porém, se você rejeitar ou apagar a utilização de cookies obrigatórios e essenciais para o funcionamento do Site (alterando cookies diretamente no navegador), algumas das funções do Site poderão não funcionar corretamente e o Site, na sua próxima visita, poderá não lembrar quais cookies você desativou. Por exemplo, se você desativar o cookie que identifica o usuário.</p>
                <p>Dessa forma, ao utilizar o nosso Site sem apagar ou rejeitar os cookies obrigatórios, você concorda que podemos posicionar os cookies que você não apagou ou rejeitou nos seus dispositivos, para que o Site funcione normalmente e respeite a sua decisão.</p>
                <span className={styles['cookies-policy-content-subtitle']}>Nossos Cookies</span>
                <p>• Cookies Necessários:</p>
                <p>Cookie: __Secure-3PAPISID</p>
                <p>Provedor: Google.com.br</p>
                <p>Descrição: Constrói um perfil de interesses do visitante do site para mostrar anúncios relevantes e personalizados por meio de retargeting.</p>
                <p>Retenção: Persistente</p>
                <p>Cookie: SSID</p>
                <p>Provedor: Google.com.br</p>
                <p>Descrição: O Google coleta informações do visitante para vídeos hospedados pelo YouTube em mapas integrados ao Google Maps.</p>
                <p>Retenção: Persistente</p>
                <p className={styles['cookies-policy-content-subtitle']}>• Cookies de Preferências:</p>
                <p>Cookie: pll_language</p>
                <p>Provedor: xxxxxxxxxxx</p>
                <p>Descrição: Para armazenar configurações de idioma</p>
                <p>Retenção: Persistente</p>
                <p>• Cookies de Estatística:</p>
                <p>Cookie: _gid</p>
                <p>Provedor: xxxxxxxx</p>
                <p>Descrição: O cookie é usado para armazenar informações de como os visitantes usam um site e ajuda na criação de um relatório analítico de como o website está se saindo. Os dados coletados incluem o número de visitantes, a fonte de onde vieram e as páginas visitadas de forma anônima.</p>
                <p>Retenção: Persistente</p>
                <p>• Cookies de Publicidade:</p>
                <p>Cookie: _fbp</p>
                <p>Provedor: Hotjar.com</p>
                <p>Descrição: Este cookie é configurado pelo Facebook para fornecer publicidade quando eles estiverem no Facebook ou em uma plataforma digital alimentada por publicidade do Facebook após visitar este site.</p>
                <p>Retenção: Persistente</p>
                <p>Cookie: Lang</p>
                <p>Provedor: Ads.linkedin.com</p>
                <p>Descrição: Utilizado pelo Linkedin quando um website contém um painel “siga-nos” incorporado.</p>
                <p>Retenção: Sessão</p>
                <span className={styles['cookies-policy-content-subtitle']}>Alterações da Política de Cookies</span>
                <p>A Brasil Cacau pode alterar esta Política de Cookies conforme necessário e a qualquer tempo, sendo as alterações informadas com destaque em nosso Site.</p>
                <span className={styles['cookies-policy-content-subtitle']}>Entre em contato</span>
                <p>Se você tiver dúvidas ou achar que suas preocupações não foram tratadas nesta Política de Cookies, entre em contato enviando um e-mail para <b>privacidade@grupocrm.com.br.</b></p>
            </div>
            <Footer />

        </div>
    );
}

export default CookiesPolicy;