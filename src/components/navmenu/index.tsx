import Link, { LinkProps } from "next/link";
import style from "./style.module.css"
import { PropsWithChildren } from "react";
import { Menu } from "@mui/icons-material";

const StyledLink = (props: LinkProps & PropsWithChildren) => (
    <Link
        {...props}
        className={style.menuLink}
    >
    </Link>
)

function NavMenu(){
    return(
        <nav className={style.containerMenu}>
            
            <ul className={style.menu}>
                <Menu className={style.iconMenu} />
                <li>
                    <StyledLink href="/">HOME</StyledLink>
                </li>
                <li>
                    <StyledLink href="/sobrenos">QUEM SOMOS</StyledLink>
                </li>
            </ul>
        </nav>
    )
}


export default NavMenu;