import React, {FC} from 'react';
import { Route, Routes} from 'react-router-dom';
import {PATH} from '../routes/routes';
import {OrderPage} from "../pages/OrderPage/OrderPage";
import {TableData} from "../components/Table/TableData";
import {Error} from "../pages/Error/Error";



const AppRoutes: FC = () => {

    return (
       <Routes>
           <Route path={PATH.HOME} element={<TableData/>} />
           <Route path={PATH.ORDER_PAGE_WITH_ID} element={<OrderPage />} />
           <Route path={PATH.ERROR} element={<Error />} />
       </Routes>
    );
};

export default AppRoutes;
