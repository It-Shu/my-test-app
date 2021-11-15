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
            <td>
                <div>

                </div>
                <td key={'id-cell-' + item.id}>
                    {item.id}
                    {/*<Link to={PATH.ORDER_PAGE + '/' + item.id}>{item.id}</Link>*/}
                    <hr/>
                    <td style={{color: 'grey'}}>{item.created_date}</td>

                </td>
            </td>
    },
    {
        header: index =>
            <th key={'order-title-' + index}>
                Тип задания / Автор
            </th>,
        body: (item: TableItemsResponseType) =>
            <td>
                <td key={'order-cell-' + item.order_type.name}>
                    {item.order_type.name}
                    <hr/>
                   <td style={{color: 'grey'}}>{item.created_user.name}</td>
                </td>
                {/*<td key={'name-cell-' + item.created_user.name}>{item.created_user.name}</td>*/}
            </td>

    },
    {
        header: index =>
            <th key={'account-title-' + index}>
                Аккаунт / Терминал
            </th>,
        body: (item: TableItemsResponseType) =>
            <td>
                <td key={'account-cell-' + item.account.name}>
                    {item.account.name}
                    <hr/>
                    <td style={{color: 'grey'}}>{item.terminal.name}</td>
                </td>
                {/*<td key={'terminal-cell-' + item.terminal.name}>{item.terminal.name}</td>*/}
            </td>

    },
    {
        header: index =>
            <th key={'status-title-' + index}>
                Статус
            </th>,
        body: (item: TableItemsResponseType) =>
            <td key={'status-cell-' + item.status}>{item.status}</td>
    },
]
