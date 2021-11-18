import React, {FC, ReactNode} from 'react'
import {TableItemsResponseType} from '../../../api/table-api';
import s from './TableData.module.sass'
import {PATH} from "../../../routes/routes";
import { NavLink } from 'react-router-dom';


export type TableModel = {
    header: (index: number) => ReactNode
    body: (data: TableItemsResponseType) => ReactNode
}


type TableType = {
    model: TableModel[]
    data: TableItemsResponseType[]
}


const TableData: FC<TableType> = ({data, model}) => {

    // document.addEventListener('DOMContentLoaded', () => {
    //     const rowLink = document.querySelectorAll('tr[data-href]')
    //
    //     rowLink.forEach(row => {
    //         row.addEventListener('click', () => {
    //            window.location.href =
    //         })
    //     })
    //
    // })


    return <table className={s.contentTable}>
        <thead>
        <tr className={s.headTR}>{model.map((m, index) => m.header(index))}</tr>
        </thead>
        <tbody className={s.tableBody}>
        {data.map((items: TableItemsResponseType, index) => (
                <tr key={'row' + (items.id || index)} className={s.bodyRow}>
                    {model.map(m => m.body(items))}
                </tr>
        ))}
        </tbody>
    </table>
};

export default TableData;
