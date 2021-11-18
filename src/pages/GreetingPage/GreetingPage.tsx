import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './GreetingPage.module.sass'

export const GreetingPage = () => {
    return <div className={s.startPage}>
            <h2>Hi, my name is Sergei</h2>

        <h2>Please, click on this button, to see my test task</h2>
            <NavLink to={'/home'} className={s.a}>
                <button className={s.button}>Get Table</button>
            </NavLink>
    </div>
}
