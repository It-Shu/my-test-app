import React, {FC} from 'react';
import {TableItemsResponseType} from "../../api/table-api";
import s from './Tasks.module.css'

type TasksType = {
    tasks: TableItemsResponseType[]
    loading: boolean
}

const Tasks: FC<TasksType> = ({tasks, loading}) => {

    const mapFunc = (task: TableItemsResponseType, i: number) => {
        return  <div key={task.id || i}>
            <div className={s.number}>
                <div>{task.id}</div>
                <div>{task.created_date}</div>
            </div>
            <div>{task.order_type.name}</div>
            <div>{task.created_user.name}</div>
            <div>{task.created_user.surname}</div>
            <div>{task.account.name}</div>
            <div>{task.terminal.name}</div>
            <div>{task.status}</div>
        </div>
    }

    if (loading) {
        return <h2>LOADING...</h2>
    }

    return (
        <div>
            {tasks.map(mapFunc)}
            <hr/>
        </div>
    );
};

export default Tasks;
