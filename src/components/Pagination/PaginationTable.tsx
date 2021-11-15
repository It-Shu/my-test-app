import React, {FC} from 'react';
import {Select} from "../Select/Select";
import {tableModel} from "../Table/TableModel";
import Table from "../Table/Table";
import {TableItemsResponseType} from "../../api/table-api";

type PaginationTableProps = {
    totalCount: number
    pageCount: number
    currentPage: number
    countPerPage: number[]
    data: TableItemsResponseType[]
    onChangeOption: (option: string) => void
}

export const PaginationTable: FC<PaginationTableProps> = props => {
    const {countPerPage, data} = props




    return (
        <div>
            <Table data={data} model={tableModel()}/>
            {/*<Pagination totalCount={totalCount}*/}
            {/*            countPerPage={pageCount}*/}
            {/*            currentPage={currentPage}*/}
            {/*            onChange={onPageChangeHandler}/>*/}
            <div>
                {/*<span style={{paddingRight: 16}}> Show on page:</span>*/}
                <Select options={countPerPage} onChangeOption={()=>{}}/>
            </div>
        </div>
    )
}
