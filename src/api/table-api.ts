import axios from "axios"


export const instance = axios.create({
    baseURL: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9f15021c-fcd4-4657-aff4-2782f62b60b6/test_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211112T164750Z&X-Amz-Expires=86400&X-Amz-Signature=0bfd48d89a3546c2889c4c71ec53ffd0d485ad757522b9aa2ea83f9295521253&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22test_data.json%22',
    withCredentials: true
})

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




export const tableAPI = {
    getTableItems: () => instance
        .get<TableItemsResponseType>(''),

}
