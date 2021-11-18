import axios from "axios";


type OrderTerminalAccountType = {
    name: string,
    oguid: string
}

type CreatedUserType = {
    surname: string,
    name: string,
    patronymic: string,
    oguid: string
}

export type TableItemsResponseType = {
    id: number,
    oguid: string,
    status: string,
    order_type: OrderTerminalAccountType
    terminal: OrderTerminalAccountType
    account: OrderTerminalAccountType
    created_user: CreatedUserType
    created_date: number
}



export const orderAPI = {
    getOrder: () => axios
        .get<TableItemsResponseType[]>('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9f15021c-fcd4-4657-aff4-2782f62b60b6/test_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211118T131127Z&X-Amz-Expires=86400&X-Amz-Signature=ad28d2bafcc9d9d7cfcd6adabb47221af371270397504911f5f45c23882cc04a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22test_data.json%22&x-id=GetObject')

}
