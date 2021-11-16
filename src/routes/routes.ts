import React, {FC} from 'react'
import {OrderPage} from "../components/OrderPage/OrderPage";
import {TableData} from "../components/Table/TableData";
import {Error} from "../Error/Error";


export enum PATH {
    ORDER_PAGE = '/orderPage',
    HOME = '/home',
    EMPTY = '',
    ERROR = '/404',
}

type Routes = {
    path: string,
    element: FC
    exact?: boolean
}

export const publicRoutes: Routes[] = [
    {path: PATH.HOME, element: TableData, exact: true},
    {path: PATH.ORDER_PAGE, element: OrderPage},
    {path: PATH.ERROR, element: Error},
]
