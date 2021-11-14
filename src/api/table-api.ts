

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
