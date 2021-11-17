import React, {useEffect, useState} from 'react';
import s from './Pagination.module.css'

type PaginationProps = {
    totalCount: number,
    countPerPage: number | string,
    currentPage: number,
    onChange: (page: number) => void
    step?: number
}

export const Pagination = ({totalCount, countPerPage, currentPage, onChange, step = 10}: PaginationProps) => {
    const [prevIsHidden, setPrevIsHidden] = useState(false)
    const [nextIsHidden, setNextIsHidden] = useState(false)

    let pageNumbers: number = Math.ceil(totalCount / +(countPerPage))
    let pages = []
    for (let i = 1; i <= pageNumbers; i++) {
        pages.push(i)
    }

    const previousPage = currentPage !== 1 ? currentPage - 1 : 1
    const nextPage = currentPage !== pageNumbers ? currentPage + 1 : pageNumbers
    let pageNextStep = (currentPage + step) > pageNumbers ? pageNumbers : currentPage + step
    let pagePreviousStep = (currentPage - step) < 1 ? 1 : currentPage - step

    useEffect(() => {
        previousPage === currentPage ? setPrevIsHidden(true) : setPrevIsHidden(false)
        nextPage === currentPage ? setNextIsHidden(true) : setNextIsHidden(false)
    }, [currentPage, nextPage, previousPage])

    if (isNaN(pageNumbers) || totalCount === 0 || pageNumbers === 1) {
        return <></>
    }

    return (
        <div className={s.container}>
            <button className={`${prevIsHidden && s.hidden}`}
                    onClick={() => onChange(1)}>Start</button>
            <button className={`${prevIsHidden && s.hidden}`}
                  onClick={() => onChange(previousPage)}>{'<'}</button>



            <button className={`${prevIsHidden && s.hidden}`}
                  onClick={() => onChange(pagePreviousStep)}>{'<<'}</button>

            {/*<button className={`${prevIsHidden && s.hidden}`}*/}
            {/*      onClick={() => onChange(previousPage)}>{previousPage !== currentPage && previousPage}</button>*/}

            <span className={s.active}>{currentPage}</span>

            {/*<button className={`${nextIsHidden && s.hidden}`}*/}
            {/*      onClick={() => onChange(nextPage)}>{nextPage !== currentPage && nextPage}</button>*/}

            <button className={`${nextIsHidden && s.hidden}`}
                  onClick={() => onChange(pageNextStep)}>{'>>'}</button>

            <button className={`${nextIsHidden && s.hidden}`}
                  onClick={() => onChange(nextPage)}>{'>'}</button>
            <button className={`${nextIsHidden && s.hidden}`}
                    onClick={() => onChange(pageNumbers)}>End</button>
        </div>
    )
}



// import React, {FC} from 'react';
// import {Select} from "../Select/Select";
// import {tableModel} from "../Table/TableModel";
// import Table from "../Table/Table";
// import {TableItemsResponseType} from "../../api/table-api";
//
// type PaginationTableProps = {
//     totalCount: number
//     pageCount: number
//     currentPage: number
//     countPerPage: number[]
//     data: TableItemsResponseType[]
//     onChangeOption: (option: string) => void
// }
//
// export const PaginationTable: FC<PaginationTableProps> = props => {
//     const {countPerPage, data} = props
//
//
//
//
//     return (
//         <div>
//             <Table data={data} model={tableModel()}/>
//             {/*<Pagination totalCount={totalCount}*/}
//             {/*            countPerPage={pageCount}*/}
//             {/*            currentPage={currentPage}*/}
//             {/*            onChange={onPageChangeHandler}/>*/}
//             <div>
//                 {/*<span style={{paddingRight: 16}}> Show on page:</span>*/}
//                 <Select options={countPerPage} onChangeOption={()=>{}}/>
//             </div>
//         </div>
//     )
// }


// import React from 'react';
// import {TableItemsResponseType} from "../../api/table-api";
// import {Input} from "../../pages/Input/Input";
// export interface Props {
//     page: number;
//     totalPages: TableItemsResponseType[];
//     handlePagination: (page: number) => void;
//
// }
//
// export const PaginationComponent: React.FC<Props> = ({
//                                                          page,
//                                                          totalPages,
//                                                          handlePagination,
//
//                                                      }) => {
//
//
//     return (
//         <div>
//             <div>
//                 <button
//                     onClick={() => {
//                         if (page <= 1) {
//                             return page
//                         } else {
//                             return handlePagination(page - 1)
//                         }
//                     }}
//                     type="button"
//                 >
//                     &lt;
//                 </button>
//                 <input type='search' value={page}
//                 />
//                 <button
//                     onClick={() => {
//                         if (page < totalPages.length) {
//                             return handlePagination(page + 1)
//                         } else {
//                             return page
//                         }
//                     }}
//                     type="button"
//                 >
//                     &gt;
//                 </button>
//             </div>
//         </div>
//     );
// };

