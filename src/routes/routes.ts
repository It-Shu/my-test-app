import {FC} from 'react'
import {OrderPage} from "../pages/OrderPage/OrderPage";
import {TableData} from "../components/Table/TableData";
import {Error} from "../pages/Error/Error";


export enum PATH {
    ORDER_PAGE = '/orderPage',
    ORDER_PAGE_WITH_ID = '/orderPage/:id/:order_type/:account/:status',
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
    {path: PATH.ORDER_PAGE_WITH_ID, element: OrderPage},
    {path: PATH.ERROR, element: Error},
]
