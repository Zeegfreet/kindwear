import { WhatsApp } from "@mui/icons-material";
import style from "./style.module.css"

function AppFooter(){
    return(
        <footer className={style.appFooter}>
            <div className={"container, " + style.appFooterContainer}>
                <div ><a target="_blank" href="https://wa.me/5527992718095" className={style.footerWhatsapp}><WhatsApp fontSize="large"/> (27) 9 9271-8095</a></div>
                <div>contato@kindwear.com.br</div>
                <div>Rua Castro Alves, 170, São Diogo II, Serra, ES</div>
                <div>55.389.778/0001-26</div>
            </div>
        </footer>
    )
}

export default AppFooter;