import Image from "next/image";
import style from "./style.module.css"
import imageShopee from "../../assets/images/iconShopee.png"
import ExportedImage from "next-image-export-optimizer";

function PageSobreNos(){
    return(
        <main className={style.main}>
            <article className={'container, ' + style.articleSobreNos}>
                <h3 className={style.articleTitle}>Sobre Nós</h3>
                <section>
                    <strong>Bem-vindos à Kindwear:</strong> Onde o Amor e o Conforto se Encontram
                    <br/><br/>
                    A Kindwear nasceu em junho de 2024, no coração da Serra, ES, com um sonho: oferecer aos pequenos e às mamães produtos de qualidade excepcional, que proporcionem conforto, segurança e muito amor em cada detalhe. Somos apaixonados por crianças e acreditamos que elas merecem o melhor. Por isso, selecionamos cuidadosamente cada item que faz parte do nosso catálogo, buscando marcas confiáveis e materiais de alta qualidade, sempre com foco na segurança e no bem-estar dos pequenos.
                    <br/><br/>
                    <strong>Nossos Valores:</strong>
                    <br/><br/>
                    <strong>Qualidade acima de tudo:</strong> Acreditamos que a qualidade dos produtos é fundamental para a saúde e o desenvolvimento das crianças. Por isso, não abrimos mão de oferecer itens duráveis, seguros e confortáveis.
                    <br/>
                    <strong>xperiência impecável:</strong>E Queremos que sua experiência na Kindwear seja única e memorável. Oferecemos um atendimento personalizado, entrega rápida e eficiente, e políticas de troca e devolução justas e transparentes.
                    <br/>
                    <strong>Amor e cuidado em cada detalhe:</strong>E Acreditamos que o amor está presente em tudo o que fazemos. Desde a seleção dos produtos até o atendimento ao cliente, buscamos transmitir carinho e cuidado em cada etapa da sua jornada conosco.
                    <br/>
                    <strong>Sustentabilidade:</strong>E Estamos comprometidos com o meio ambiente e buscamos, sempre que possível, oferecer produtos eco-friendly e embalagens sustentáveis.
                    <br/><br/>
                    Na Kindwear, você encontra muito mais do que produtos infantis. Você encontra um espaço acolhedor, onde o amor, o cuidado e a qualidade se unem para proporcionar momentos especiais para você e sua família.
                    <br/><br/>
                    Junte-se à nossa família Kindwear e descubra um mundo de possibilidades para os seus pequenos!
                </section>
                <section>
                    <h4 className={style.articleTitle}>Canais</h4>
                    Nosso objetivo é disponibilizar nossos produtos nos principais players do mercado, facilitando o acesso ao consumidor, abaixo players disponíveis:
                    <div className={style.containerPlayers}>
                        <a target="_blank" href="https://shopee.com.br/shop/1278182444">
                            <ExportedImage src={imageShopee} alt="Botão Shopee" className={style.iconPlayer}/>
                        </a>
                    </div>
                </section>
            </article>
        </main>
    )
}

export default PageSobreNos;