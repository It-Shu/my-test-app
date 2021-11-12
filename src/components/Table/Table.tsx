import React, {FC, useEffect, useState} from 'react';
import {orderAPI, TableItemsResponseType} from "../../api/table-api";
import TableData from './TableData/TableData';
import {tableModel} from "./TableModel/TableModel";
import {Pagination} from "../Pagination/Pagination";
import {Select} from "../Select/Select";
import s from './Table.module.sass'

export const Table: FC<any> = () => {

    // local state
    const [data, setData] = useState<TableItemsResponseType[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [countPerPage, setCountPerPage] = useState<number | string>(10)
    const [selectPages] = useState<number[]>([10, 25, 50])


    // Request
    useEffect(() => {
        setLoading(true)
        orderAPI.getOrder()
            .then((res) => {
                setTimeout(() => {
                    setData(res.data)
                    setLoading(false)
                }, 500)
            })
    }, [])



    // Find current number of orders on the page
    const lastOrderIndex = currentPage * +(countPerPage)
    const firstOrderIndex = lastOrderIndex - +(countPerPage)
    const currentOrders = data.slice(firstOrderIndex, lastOrderIndex)

    // Change page
    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    // Show selected current order count
    const onSelectChangeHandler = (option: string) => {
        setCountPerPage(option)
        setCurrentPage(1)
    }

    // Show loading
    if (loading) {
        return <h1 className={s.loading}>LOADING...</h1>
    }

    return (
        <div className={s.table}>
            <TableData data={currentOrders} model={tableModel()}/>

            <div className={s.paginationBlock}>
                <div className={s.pagination}>
                    <Pagination
                        totalCount={data.length}
                        currentPage={currentPage}
                        countPerPage={countPerPage}
                        onChange={paginate}
                    />
                </div>
                <div className={s.selectGroup}>
                    <span className={s.span}>по</span>
                    <Select options={selectPages} onChangeOption={onSelectChangeHandler}/>
                    <span className={s.span2}>записей</span>
                </div>
            </div>
        </div>
    );
};
