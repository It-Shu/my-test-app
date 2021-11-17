import React, {FC} from 'react'
import { Select } from '../Select/Select';
import s from './Pagination.module.css'
import {Pagination} from "./PaginationTable";

type PacksPaginationProps = {
    totalCount: number
    pageCount: number
    currentPage: number
    countPerPage?: number[]
}

export const PacksPagination: FC<PacksPaginationProps> = props => {
    const {totalCount, pageCount, currentPage, countPerPage} = props

    const onPageChangeHandler = (page: number) => {
        return page
    }
    // const onSelectChangeHandler = (option: string) => {count: Number(option)}

    return (
        <div className={s.paginationContainer}>
            <Pagination
                totalCount={totalCount}
                countPerPage={pageCount}
                currentPage={currentPage}
                onChange={onPageChangeHandler}/>
            <div>
                <span style={{paddingRight: 16}}> Show on page:</span>

            </div>
        </div>
    )
}


// import s from './Pagination.module.css'
//
// type PaginationPropsType = {
//     totalOrderCount: any
//     countPerPage: number
//     paginate: (n: number) => void
//     currentPage: number
// }
//
// export const Pagination = ({countPerPage, totalOrderCount, paginate}: PaginationPropsType) => {
//
//     let pageNumbers: number[] = []
//
//     for (let i = 1; i <= Math.ceil(totalOrderCount / countPerPage); i++) {
//         pageNumbers.push(i)
//     }
//
//     return (
//         <div className={s.pagination}>
//             {/*<span onClick={() => pageNumbers.map(p => p - 1)}>{'<'}</span>*/}
//             {pageNumbers.map(n => (
//                 <span key={n} style={{paddingLeft: '10px'}} className={s.pageNumber}>
//                     <button onClick={()=> paginate(n)} className={s.number}>{n}</button>
//                 </span>
//             ))}
//             {/*<span onClick={() => pageNumbers.map(p => p + 1)} style={{paddingLeft: '20px'}}>{'>'}</span>*/}
//         </div>
//     )
// }

// import React, { useState } from 'react';
// import { Pagination } from './PaginationTable';
// export const PaginationContainer = () => {
//     const [page, setPage] = useState(1);
//     const totalPages = 15;
//     const handlePages = (updatePage: number) => setPage(updatePage);
//     return (
//         <div className="container">
//             <Pagination
//                 page={page}
//                 totalPages={totalPages}
//                 handlePagination={handlePages}
//             />
//         </div>
//     );
// };
