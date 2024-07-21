import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/card";
import imgKithigiene from "../assets/images/cardImages/kit_higiene_9259.png"
import imgNaninhas from "../assets/images/cardImages/un_0001_23f_ig_post_005_naninhas_200158.png"
import imgCopos from "../assets/images/cardImages/9608_1.jpg"
import imgMeiaBichinho from "../assets/images/cardImages/300451_1.jpg"
import imgNaninhasMasculino from "../assets/images/cardImages/9382_1.jpg"



export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Produtos</h1>
      <section className={styles.mainCards}>
        
          <Card 
            titulo="KIT HIGIENE PIMPOLHO"
            imagem={imgKithigiene}
            link="https://shopee.com.br/product/1278182444/23597628139/"
          >
            Cuidados essenciais para o seu pequeno com muito mais carinho 💙
            Apresentamos o Kit Higiene Pimpolho! 👶
            Um conjunto completo com tudo o que você precisa para garantir a higiene do seu bebê com delicadeza e praticidade. 💖
            Clique e conheça todos os detalhes! 😉
          </Card>
          <Card 
            titulo="NANINHA PIMPOLHO"
            imagem={imgNaninhas}
            link="https://shopee.com.br/product/1278182444/21797730281/"
          >
            Soninhos tranquilos e cheios de fofura com as Naninhas Pimpolho! ✨😴
            Apresentamos a turminha mais aconchegante que vai acompanhar os sonhos do seu bebê: as Naninhas Pimpolho! 🥰
            Macias, fofinhas e com um toque de diversão, elas são perfeitas para acalmar, estimular a imaginação e proporcionar momentos de muito carinho. 💖
            Escolha o amiguinho perfeito para o seu pequeno! 😍
          </Card>
          <Card 
            titulo="COPO ANTIVAZAMENTO PIMPOLHO"
            imagem={imgCopos}
            link="https://shopee.com.br/product/1278182444/18299331817/"
          >
            Hora da independência com muito mais praticidade! 💧😊
            Apresentamos os Copos Antivazamento Pimpolho! Perfeitos para o seu pequeno começar a tomar líquidos sozinho, sem fazer sujeira. 😉💖
            Com design ergonômico, alças confortáveis e sistema antivazamento, eles garantem uma experiência tranquila e divertida para os pequenos e para os papais. 😄
            Escolha o modelo e a cor que mais combinam com o seu bebê! 💙💖
          </Card>
          <Card 
            titulo="MEIAS BICHINHO PIMPOLHO"
            imagem={imgMeiaBichinho}
            link="https://shopee.com.br/product/1278182444/22293152501/"
          >
            Muita fofura para aquecer os pezinhos do seu amor! 💕👣
            Apresentamos as Meias Bichinho Pimpolho! 🐱🐶🐰🦋
            Além de macias e confortáveis, elas vêm com um detalhe encantador: apliques de bichinhos que vão deixar os pezinhos do seu bebê ainda mais fofos. 😍
            Perfeitas para completar o look com muito charme e diversão! ✨
            Garanta já as suas! 😉
          </Card>
          <Card 
            titulo="E MAIS NANINHAS PIMPOLHO 💙"
            imagem={imgNaninhasMasculino}
            link="https://shopee.com.br/product/1278182444/22997634036/"
          >
            A turminha mais fofa e inseparável para o seu bebê! 🥰💕
            Apresentamos as Naninhas Prendedora de Chupeta Pimpolho! 🐘🐨🦕🐻
            Com um toque suave e design encantador, elas são perfeitas para acalmar, estimular a imaginação e manter a chupeta sempre pertinho. ✨
            Escolha o amiguinho que mais combina com o seu pequeno! 💖
          </Card>
      </section>
    </main>
  );
}
