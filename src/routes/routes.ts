import {FC} from 'react'
import {OrderPage} from "../pages/OrderPage/OrderPage";
import {Table} from "../components/Table/Table";
import {Error} from "../pages/Error/Error";


export enum PATH {
    ORDER_PAGE = '/orderPage',
    ORDER_PAGE_WITH_DATA = '/orderPage/:id/:order_type/:account/:status',
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
    {path: PATH.HOME, element: Table, exact: true},
    {path: PATH.ORDER_PAGE_WITH_DATA, element: OrderPage},
    {path: PATH.ERROR, element: Error},
]
