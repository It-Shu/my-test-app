import React from 'react'
import s from './Pagination.module.css'

type PaginationPropsType = {
    totalOrderCount: any
    countPerPage: number
    paginate: (n: number) => void
    currentPage: number
}

export const Pagination = ({countPerPage, totalOrderCount, paginate}: PaginationPropsType) => {

    let pageNumbers: number[] = []

    for (let i = 1; i <= Math.ceil(totalOrderCount / countPerPage); i++) {
        pageNumbers.push(i)
    }

    return (

        <div className={s.pagination}>
            {/*<span onClick={() => pageNumbers.map(p => p - 1)}>{'<'}</span>*/}
            {pageNumbers.map(n => (
                <span key={n} style={{paddingLeft: '10px'}} className={s.pageNumber}>
                    <button onClick={()=> paginate(n)} className={s.number}>{n}</button>
                </span>
            ))}
            {/*<span onClick={() => pageNumbers.map(p => p + 1)} style={{paddingLeft: '20px'}}>{'>'}</span>*/}
        </div>
    )
}
