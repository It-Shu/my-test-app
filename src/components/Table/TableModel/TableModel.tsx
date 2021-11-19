import React from 'react'
import {TableModel} from "../TableData/TableData";
import {TableItemsResponseType} from "../../../api/table-api";
import ss from './TableModel.module.sass'
import {PATH} from '../../../routes/routes';
import {NavLink} from 'react-router-dom';
import Statuses from "../Statuses/Statuses";


export const tableModel = (): TableModel[] => [
    {
        header: index =>
            <th key={'id-title-' + index} className={ss.headerTH}>
                Номер / Дата
            </th>,
        body: (item: TableItemsResponseType) =>

            <td key={'id-cell-' + item.id} className={ss.bodyTD}>
                <NavLink
                    to={PATH.ORDER_PAGE + '/' + item.id + '/' + item.order_type.name + '/' + item.account.name + '/' + item.status}>
                    {item.id}
                </NavLink>
                <br/>
                {item.created_date}
            </td>
    },
    {
        header: index =>
            <th key={'order-title-' + index} className={ss.headerTH}>
                Тип задания / Автор
            </th>,
        body: (item: TableItemsResponseType) =>
            <td key={'order-cell-' + item.order_type.name} className={ss.bodyOrderTD}>
                {item.order_type.name}
                <br/>
                {item.created_user.name}
            </td>
    },
    {
        header: index =>
            <th key={'account-title-' + index} className={ss.headerTH}>
                Аккаунт / Терминал
            </th>,
        body: (item: TableItemsResponseType) =>

            <tr key={'account-cell-' + item.account.name} className={ss.bodyTD}>
                <td className={ss.accountTerminal}>{item.account.name}</td>

                <td className={ss.accountTerminal}>{item.terminal.name}</td>
            </tr>
    },
    {
        header: index =>
            <th key={'status-title-' + index} className={ss.headerTH}>
                Статус
            </th>,
        body: (item: TableItemsResponseType) =>
            <td key={'status-cell-' + item.status} className={ss.bodyTD}>{
                <Statuses data={item}/>
            }</td>
    },
]
