import { NavLink } from 'react-router-dom';
import c from './Friend.module.css';

function Friend(props) {
    let path = '/dialogs/' + props.id;

    return (
        <NavLink to={path} className={c.friend}>
                {props.name}
        </NavLink>
    )
}

export default Friend;