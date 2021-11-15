import {Link} from 'react-router-dom'
import React from 'react'
import {TableModel} from "./Table";
import {TableItemsResponseType} from "../../api/table-api";
import {PATH} from "../../routes/routes";

export const tableModel = (): TableModel[] => [
    {
        header: index =>
            <th key={'id-title-' + index}>
                Номер / Дата
            </th>,
        body: (item: TableItemsResponseType) =>

            <td key={'id-cell-' + item.id} style={{textAlign: 'center'}}>
                {item.id}
                {/*<Link to={PATH.ORDER_PAGE + '/' + item.id}>{item.id}</Link>*/}
                <br/>
                {item.created_date}
            </td>

    },
    {
        header: index =>
            <th key={'order-title-' + index}>
                Тип задания / Автор
            </th>,
        body: (item: TableItemsResponseType) =>

            <td key={'order-cell-' + item.order_type.name} style={{textAlign: 'center'}}>
                {item.order_type.name}
                <br/>
                {item.created_user.name}
            </td>


    },
    {
        header: index =>
            <th key={'account-title-' + index}>
                Аккаунт / Терминал
            </th>,
        body: (item: TableItemsResponseType) =>

            <td key={'account-cell-' + item.account.name} style={{textAlign: 'center'}}>
                {item.account.name}
                <br/>
                {item.terminal.name}
            </td>


    },
    {
        header: index =>
            <th key={'status-title-' + index}>
                Статус
            </th>,
        body: (item: TableItemsResponseType) =>
            <td key={'status-cell-' + item.status} style={{textAlign: 'center'}}>{item.status}</td>
    },
]
