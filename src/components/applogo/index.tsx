import style from "./style.module.css"

function AppLogo(){
    return(
        <>
            <div className={style.appLogo}>
                KIND<span className={style.logoSpan}>WEAR</span>
            </div>
            <div className={style.smLogo}>
                K<span className={style.smLogoSpan}>W</span>
            </div>
        </>
    )
}

export default AppLogo;