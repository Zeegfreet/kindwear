import style from "./style.module.css"
import { ICard } from "@/interfaces/ICard";
import ExportedImage from "next-image-export-optimizer";

function Card(props: ICard){
    const handleClick = (event: React.MouseEvent) => {
        if (props.link) {
          window.location.href = props.link  
        }
    }
    

    return(
        <div  className={style.card}>
            <a target="_blank" href={props.link} className={style.cardLink}>
                <h3 className={style.cardTitulo}>{props.titulo}</h3>
                {props.imagem ? <div className={style.contentImage}>
                    <ExportedImage
                        src={props.imagem}
                        alt={props.titulo}
                        className={style.cardImage}
                    />
                </div> : null}
                <div className={style.cardDescricao}>
                    {props.children}
                </div>
                {
                    props.valor ?
                        <div className={style.cardValor}>
                            {props.valor}
                        </div>
                : null}
            </a>
        </div>
    )
}

export default Card;