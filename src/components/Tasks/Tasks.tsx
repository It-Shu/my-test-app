import React, {FC} from 'react';
import {TableItemsResponseType} from "../../api/table-api";
import s from './Tasks.module.css'

type TasksType = {
    tasks: TableItemsResponseType[]
    loading: boolean
}

const Tasks: FC<TasksType> = ({tasks, loading}) => {

    // const mapFunc = (task: TableItemsResponseType, i: number) => {
    //     return <tr key={task.id || i} className={s.tableData}>
    //
    //             <td className={s.column1}>{task.id}{task.created_date}</td>
    //             {/*<td className={s.order}></td>*/}
    //
    //
    //             <td className={s.order}>{task.order_type.name}</td>
    //             <td className={s.order}>{task.created_user.name}</td>
    //
    //
    //             <td className={s.order}>{task.account.name}</td>
    //             <td className={s.order}>{task.terminal.name}</td>
    //
    //
    //             <td className={s.order}>{task.status}</td>
    //
    //     </tr>
    // }

    // if (loading) {
    //     return <h2>LOADING...</h2>
    // }

    return (
        <div>
            {/*{tasks.map(mapFunc)}*/}
        </div>
    );
};

export default Tasks;
