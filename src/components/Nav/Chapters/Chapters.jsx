import c from './Chapters.module.css'

function Chapters() {
    return (
        <ul className={c.list}>
          <li className={c.item}><a href="#" className={`${c.link} ${c.active}`}>Profile</a></li>
          <li className={c.item}><a href="#" className={c.link}>Feed</a></li>
          <li className={c.item}><a href="#" className={c.link}>Messages</a></li>
          <li className={c.item}><a href="#" className={c.link}>Music</a></li>
          <li className={c.item}><a href="#" className={c.link}>Settings</a></li>
        </ul>
    )
}

export default Chapters;