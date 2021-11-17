import React from 'react';
import {NavLink} from 'react-router-dom';


export const GetTable = () => {
    return <nav >
        <div>
            <h3>Test Task from Sergei Shustov</h3>
            <NavLink to={'/home'}>
                <button>Get Table</button>
            </NavLink>
        </div>

    </nav>
}
