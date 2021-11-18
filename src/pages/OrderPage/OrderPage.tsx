import React, {FC} from 'react';
import {useParams} from "react-router-dom";
import s from '../../components/Table/TableData/TableData.module.sass'


export const OrderPage: FC = () => {

    const {id, order_type, account, status} = useParams()


    return (
        <>
            <h1 className={s.title}>ORDER PAGE</h1>
            <table className={s.contentTable}>
                <thead>
                <tr className={s.headTR}>
                    <th>Номер</th>
                    <th>Тип задания</th>
                    <th>Аккаунт</th>
                    <th>Статус</th>
                </tr>
                </thead>
                <tbody className={s.tableBody}>
                <tr>
                    <td>{id}</td>
                    <td>{order_type}</td>
                    <td>{account}</td>
                    <td>{status}</td>
                </tr>
                </tbody>
            </table>
        </>

    // <div>
    //     <div className={s.orderPage}>
    //         <div className={s.orderItem}>Номер</div>
    //         <div className={s.orderItem}>Тип задания</div>
    //         <div className={s.orderItem}>Аккаунт</div>
    //         <div className={s.orderItem}>Статус</div>
    //     </div>
    //     <div className={s.orderPage}>
    //         <div className={s.orderItem}>{id}</div>
    //         <div className={s.orderItem}>{order_type}</div>
    //         <div className={s.orderItem}>{account}</div>
    //         <div className={s.orderItem}>{status}</div>
    //     </div>
    //
    // </div>
)
    ;
};
