import React, {FC} from 'react';
import s from "./Statuses.module.sass";
import {TableItemsResponseType} from "../../../api/table-api";
import {NavLink} from "react-router-dom";
import {PATH} from "../../../routes/routes";

type StatusesType = {
    data: TableItemsResponseType
}

const Statuses: FC<StatusesType> = ({data}) => {

    let statusArr: string[] = ['']

    const MapStatuses = (st: string) => {
        if (data.status === 'new') {
            return <td key={st} className={s.status_new}>{data.status}</td>
        } else if (data.status === 'assigned_to') {
            return <td key={st} className={s.status_assigned_to}>{data.status}</td>
        } else if (data.status === 'completed') {
            return <td key={st} className={s.status_completed}>{data.status}</td>
        } else if (data.status === 'started') {
            return <td key={st} className={s.status_started}>{data.status}</td>
        } else if (data.status === 'declined') {
            return <td key={st} className={s.status_declined}>{data.status}</td>
        }
    }

    return (
        <NavLink to={PATH.ORDER_PAGE+ '/' + data.id + '/' + data.order_type.name + '/' + data.account.name + '/' + data.status} className={s.navStatus}>
            {statusArr.map(MapStatuses)}
        </NavLink>
    );
};

export default Statuses;
