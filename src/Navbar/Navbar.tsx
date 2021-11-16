import React from 'react';
import {NavLink} from 'react-router-dom';


export const Navbar = () => {
    return <nav >
        <div>
            <h3>This is a Test Task from Sergei Shustov</h3>
            <NavLink to={'/home'}>
                <button>Get Table</button>
            </NavLink>
        </div>

    </nav>
}
