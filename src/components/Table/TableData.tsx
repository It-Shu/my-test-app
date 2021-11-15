import React, {useEffect, useState} from 'react';
import {orderAPI, TableItemsResponseType} from "../../api/table-api";
import Table from './Table';
import {tableModel} from "./TableModel";




const TableData = () => {

    const [data, setData] = useState<TableItemsResponseType[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [countPerPage] = useState(5)

    useEffect(() => {
        setLoading(true)
        orderAPI.getOrder()
            .then((res) => {
                setData(res.data)
                setLoading(false)
            })
    }, [])

    const lastTaskIndex = currentPage * countPerPage
    const firstTaskIndex = lastTaskIndex - countPerPage
    const currentTasks = data.slice(firstTaskIndex, lastTaskIndex)

    if (loading) {
        return <h1 style={{textAlign: 'center'}}>LOADING...</h1>
    }



    return (
        <div>
            <Table data={currentTasks} model={tableModel()}/>
        </div>
    );
};

export default TableData;
