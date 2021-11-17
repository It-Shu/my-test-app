import React, {FC} from 'react';
import s from "./Table.module.css";
import {TableItemsResponseType} from "../../api/table-api";

type StatusesType = {
    data: TableItemsResponseType
}

const Statuses: FC<StatusesType> = ({data}) => {

    let statusArr: string[] = ['']

    const MapStatuses = (st: string) => {
        if (data.status === 'new') {
            return <td key={st} className={s.status_new}>{data.status}</td>
        } else if (data.status === 'assigned_to') {
            return <td className={s.status_assigned_to}>{data.status}</td>
        } else if (data.status === 'completed') {
            return <td className={s.status_completed}>{data.status}</td>
        } else if (data.status === 'started') {
            return <td className={s.status_started}>{data.status}</td>
        } else if (data.status === 'declined') {
            return <td className={s.status_declined}>{data.status}</td>
        }
    }

    return (
        <>
            {statusArr.map(MapStatuses)}
        </>
    );
};

export default Statuses;
