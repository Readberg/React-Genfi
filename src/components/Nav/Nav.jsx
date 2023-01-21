import Chapters from './Chapters/Chapters';
import c from './Nav.module.css'

function Nav() {
    return (
        <nav className={c.nav}>
          <Chapters />
        </nav>
    )
}

export default Nav;