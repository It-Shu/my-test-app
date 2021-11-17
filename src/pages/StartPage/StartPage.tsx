import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './StartPage.module.css'

export const StartPage = () => {
    return <div className={s.startPage}>
            <h3>Test Task from Sergei Shustov</h3>
            <NavLink to={'/home'}>
                <button className={s.button}>Get Table</button>
            </NavLink>
    </div>
}
