import AppLogo from '../applogo';
import NavMenu from '../navmenu';
import style from './style.module.css'

function AppHeader(){
    return(
        <header className={'container, ' + style.appHeader}>
                <AppLogo />
                <NavMenu />
        </header>
    )
}

export default AppHeader;