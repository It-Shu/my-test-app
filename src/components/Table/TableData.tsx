import React, {FC, useEffect, useState} from 'react';
import {orderAPI, TableItemsResponseType} from "../../api/table-api";
import Table from './Table';
import {tableModel} from "./TableModel";
import {Pagination} from "../Pagination/PaginationTable";
import {Select} from "../Select/Select";


export const TableData: FC<any> = () => {

    const [data, setData] = useState<TableItemsResponseType[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [countPerPage, setCountPerPage] = useState<number | string>(10)
    const [selectPages] = useState<number[]>([10,25,50])

    useEffect(() => {
        setLoading(true)
        orderAPI.getOrder()
            .then((res) => {
                setTimeout(()=> {
                    setData(res.data)
                    setLoading(false)
                }, 1000)
            })
    }, [])

    // Find current number of orders on the page
    const lastOrderIndex = currentPage * +(countPerPage)
    const firstOrderIndex = lastOrderIndex - +(countPerPage)
    const currentOrders = data.slice(firstOrderIndex, lastOrderIndex)

    // Change page
    const paginate = (pageNumber: number ) => {
        setCurrentPage(pageNumber)
    }

    const onSelectChangeHandler = (option: string) => {
        setCountPerPage(option)
    }


    if (loading) {
        return <h1 style={{textAlign: 'center'}}>LOADING...</h1>
    }

    return (
        <div>
            <Table data={currentOrders} model={tableModel()}/>
            <Pagination
            totalCount={data.length}
            currentPage={currentPage}
            countPerPage={countPerPage}
            onChange={paginate}
            />
            <Select options={selectPages} onChangeOption={onSelectChangeHandler}/>
        </div>
    );
};
