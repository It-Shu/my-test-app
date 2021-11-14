import React, {FC, useEffect, useState} from 'react'
// import s from './Table.module.css'
// import {TableItemsResponseType} from "../../api/table-api";
// import axios from "axios";
//
// // type TableType = {
// //     tasks: TableItemsResponseType[]
// //     loading: boolean
// // }
//
//
// export const Table = () => {
//
//
//     const [tasks, setTasks] = useState([])
//     const [loading, setLoading] = useState(false)
//     const [currentPage, setCurrentPage] = useState(1)
//     const [countPerPage] = useState(5)
//
//     useEffect(() => {
//         setLoading(true)
//         axios.get('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9f15021c-fcd4-4657-aff4-2782f62b60b6/test_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211114T154941Z&X-Amz-Expires=86400&X-Amz-Signature=fbbd46aa7978ccb0460272dac2fb79e18f38752f815c356795ad2b6966841e3c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22test_data.json%22')
//             .then((res) => {
//                 setTasks(res.data)
//                 setLoading(false)
//             })
//     }, [])
//
//     const lastTaskIndex = currentPage * countPerPage
//     const firstTaskIndex = lastTaskIndex - countPerPage
//     const currentTasks = tasks.slice(firstTaskIndex, lastTaskIndex)
//
//
//     const mapFunc = (task: TableItemsResponseType, i: number) => {
//         return <tr key={task.id || i} className={s.tableData}>
//
//             <td>{task.id}</td>
//             <td>{task.created_date}</td>
//
//             <td>{task.order_type.name}</td>
//             <td>{task.created_user.name}</td>
//
//
//             <td>{task.account.name}</td>
//             <td>{task.terminal.name}</td>
//
//             <td>{task.status}</td>
//         </tr>
//     }
//
//     // const routing = (e: any) => {
//     //     if (e.target){
//     //         debugger
//     //         return <Route path={'/orderPage'} element ={<OrderPage/>}/>
//     //     } else {
//     //         return
//     //     }
//     // }
//
//     const column: [] = [
//
//     ]
//
//
//     if (loading) {
//         return <h2>LOADING...</h2>
//     }
//     return (
//         <div>
//             <table className={s.table}>
//                 <caption>Тестовое задание Sergei Shustov</caption>
//                 <tbody>
//                 <tr className={s.head}>
//                     <th className={s.headColumn}>Номер / Дата</th>
//                     <th className={s.headColumn}>Тип задания / Автор</th>
//                     <th className={s.headColumn}>Аккаунт / Терминал</th>
//                     <th className={s.headColumn}>Статус</th>
//                 </tr>
//                {currentTasks.map(mapFunc)}
//
//
//                 </tbody>
//
//
//             </table>
//         </div>
//     )
// }
import {useTable} from "react-table";

type TableType = {
    columns: any
    data: any
}

const Table: FC<TableType> = ({columns, data}) => {

    const {
        getTableProps, // table props from react-table
        getTableBodyProps, // table body props from react-table
        headerGroups, // headerGroups, if your table has groupings
        rows, // rows for the table based on the data passed
        prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
    } = useTable({
        columns,
        data
    });

    return (
        <table {...getTableProps}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps}>
            {rows.map((row, i) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                        })}
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
};

export default Table;
