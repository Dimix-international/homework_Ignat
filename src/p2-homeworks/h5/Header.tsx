import React, {MouseEvent, useState} from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import s from './Header.module.css'


function Header() {
    let[active, setActive] = useState(false)
    const onChangeHeader = () => {
        setActive(!active)
    }
    const classNameTrigger = active ? `${s.header_trigger} ${s.right}` : `${s.header_trigger} ${s.left}`;
    return (
        <div className={s.header}>
            <ul className={active ? `${s.list} ${s.active}` : s.list }>
                <li>
                    <NavLink to={PATH.PRE_JUNIOR}>
                        PRE_JUNIOR
                    </NavLink>
                </li>
                <li>
                    <NavLink to={PATH.JUNIOR}>
                        JUNIOR
                    </NavLink>
                </li>
                <li>
                    <NavLink to={PATH.JUNIOR_PLUS}>
                        JUNIOR-PLUS
                    </NavLink>
                </li>
                <li
                    className={classNameTrigger}
                    onClick={onChangeHeader}
                >
                </li>
            </ul>
        </div>
    )
}

export default Header
