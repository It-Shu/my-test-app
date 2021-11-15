import {FC} from 'react'
import OrderPage from "../components/OrderPage/OrderPage";
import TableData from "../components/Table/TableData";


export enum PATH {
    ORDER_PAGE = '/orderPage',
    HOME = '/home',
    ERROR = '/404',
}

type Routes = {
    path: string,
    component: FC
    exact?: boolean
}

export const publicRoutes: Routes[] = [
    // {path: PATH.HOME, component: TableData, exact: true},
    {path: PATH.ORDER_PAGE, component: OrderPage, exact: true},
    // {path: PATH.ERROR, component: Error},
]
