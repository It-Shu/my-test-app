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
        .get<TableItemsResponseType[]>('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9f15021c-fcd4-4657-aff4-2782f62b60b6/test_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211117T102328Z&X-Amz-Expires=86400&X-Amz-Signature=9d0b1603a2a9d154c8f9ea8a1261255e5269c72c0b0687ce4c9395d6af553071&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22test_data.json%22')

}
