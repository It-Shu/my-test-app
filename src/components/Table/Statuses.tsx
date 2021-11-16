import React, {FC} from 'react';
import s from "./Table.module.css";
import {TableItemsResponseType} from "../../api/table-api";

type StatusesType = {
    data: TableItemsResponseType
}

const Statuses: FC<StatusesType> = ({data}) => {

    // const statusStyle = (data: TableItemsResponseType) => {
    //     if (data.status === 'new') {
    //         return <td className={s.status_new}>{data.status}</td>
    //     } else if (data.status === 'completed') {
    //         return <td className={s.status_completed}>{data.status}</td>
    //     } else if (data.status === 'assigned_to') {
    //         return <td className={s.status_assigned_to}>{data.status}</td>
    //     } else if (data.status === 'started') {
    //         return <td className={s.status_started}>{data.status}</td>
    //     } else if (data.status === 'declined') {
    //         return <td className={s.status_declined}>{data.status}</td>
    //     }
    // }

    let statusArr: string[] = ['new', 'completed', 'assigned_to', 'started', 'declined']

    return (
        <>
            {statusArr.map(st => {
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
            })}
        </>
    );
};

export default Statuses;
