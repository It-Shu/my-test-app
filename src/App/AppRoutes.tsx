import React, {FC} from 'react';
import { Route, Routes} from 'react-router-dom';
import {PATH} from '../routes/routes';
import {OrderPage} from "../pages/OrderPage/OrderPage";
import {Table} from "../components/Table/Table";
import {Error} from "../pages/Error/Error";
import {GreetingPage} from "../pages/StartPage/GreetingPage";



const AppRoutes: FC = () => {

    return (
       <Routes>
           <Route key={PATH.EMPTY} path={PATH.EMPTY} element={<GreetingPage/>} />
           <Route path={PATH.HOME} element={<Table/>} />
           <Route path={PATH.ORDER_PAGE_WITH_DATA} element={<OrderPage />} />
           <Route path={PATH.ERROR} element={<Error />} />
       </Routes>
    );
};

export default AppRoutes;
