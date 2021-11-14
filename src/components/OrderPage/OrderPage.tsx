import React, {FC} from 'react';
import {TableItemsResponseType} from "../../api/table-api";

type OrderPageType = {
    task?: TableItemsResponseType[]
}

const OrderPage: FC<OrderPageType> = ({task}) => {
    return (
        <div>
            {/*{task}*/}
            <p>OrderPage</p>
        </div>
    );
};

export default OrderPage;
