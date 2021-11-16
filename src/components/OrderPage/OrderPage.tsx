import React, {FC, useState} from 'react';
import {TableItemsResponseType} from "../../api/table-api";
import OrderPageData from "./OrderPageData";
import {useParams} from "react-router-dom";


export const OrderPage: FC = () => {

    const {id, order_type, account, status} = useParams()
    // const {} = useParams()

    return (
        <div>
           <h1>ORDER PAGE</h1>
            <div>{id}</div>
            <div>{order_type}</div>
            <div>{account}</div>
            <div>{status}</div>

            {/*<OrderPageData  />*/}
        </div>
    );
};
