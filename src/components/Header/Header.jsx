import c from './Header.module.css'
import Logo from '../../images/Logo.svg'

function Header() {
    return (
        <header className={c.header}>
            <img src={Logo} alt="Logo" />
        </header>
    )
}

export default Header;