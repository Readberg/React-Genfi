import c from './Nav.module.css'

function Nav() {
    return (
        <nav className={c.nav}>
        <ul className={c.list}>
          <li className={c.item}><a href="#" className={c.link}>Profile</a></li>
          <li className={c.item}><a href="#" className={c.link}>Feed</a></li>
          <li className={c.item}><a href="#" className={c.link}>Messages</a></li>
          <li className={c.item}><a href="#" className={c.link}>Music</a></li>
          <li className={c.item}><a href="#" className={c.link}>Settings</a></li>
        </ul>
      </nav>
    )
}

export default Nav;