import React, {FC} from 'react';
import {useParams} from "react-router-dom";
import s from './OrderPage.module.css'


export const OrderPage: FC = () => {

    const {id, order_type, account, status} = useParams()


    return (
        <div>
           <h1 className={s.title}>ORDER PAGE</h1>
            <div className={s.orderPage}>
                <div className={s.orderItem}>Номер</div>
                <div className={s.orderItem}>Тип задания</div>
                <div className={s.orderItem}>Аккаунт</div>
                <div className={s.orderItem}>Статус</div>
            </div>
            <div className={s.orderPage}>
                <div className={s.orderItem}>{id}</div>
                <div className={s.orderItem}>{order_type}</div>
                <div className={s.orderItem}>{account}</div>
                <div className={s.orderItem}>{status}</div>
            </div>

        </div>
    );
};
