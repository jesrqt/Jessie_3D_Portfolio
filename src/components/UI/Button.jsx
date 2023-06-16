import React from 'react'
import { NavLink } from 'react-router-dom';
import './Button.css';

export const Button = (props) => {
    return (
        <button className={props.className}>
            <NavLink to={props.href}>{props.children}</NavLink>
        </button>
    )
}
