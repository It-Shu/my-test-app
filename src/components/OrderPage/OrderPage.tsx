import React, {FC} from 'react';
import {useParams} from "react-router-dom";


export const OrderPage: FC = () => {

    const {id, order_type, account, status} = useParams()


    return (
        <div>
           <h1>ORDER PAGE</h1>
            <div>{id}</div>
            <div>{order_type}</div>
            <div>{account}</div>
            <div>{status}</div>
        </div>
    );
};
