import React, {FC, ReactNode} from 'react'
import {TableItemsResponseType} from '../../api/table-api';
import s from './Table.module.css'


export type TableModel = {
    header: (index: number) => ReactNode
    body: (data: TableItemsResponseType) => ReactNode
}


type TableType = {
    model: TableModel[]
    data: TableItemsResponseType[]
}


const Table: FC<TableType> = ({data, model}) => {


    return <table className={s.contentTable}>
        <thead className={s.tableHead}>
        <tr className={s.headTR}>{model.map((m, index) => m.header(index))}</tr>
        </thead>
        <tbody className={s.tableBody}>
        {data.map((items: TableItemsResponseType, index) => (
                <tr key={'row' + (items.id || index)} >
                    {model.map(m => m.body(items))}
                </tr>
        ))}
        </tbody>
    </table>
};

export default Table;
