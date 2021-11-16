import React, {FC} from 'react';
import {TableItemsResponseType} from "../../api/table-api";

type OrderPageDataType = {
    data: TableItemsResponseType
}

const OrderPageData: FC<OrderPageDataType> = ({data}) => {
    return (
        <div>
            {data}
            {data.order_type}
            {data.created_user.name}
            {data.account.name}
            {data.status}
        </div>
    );
};

export default OrderPageData;
