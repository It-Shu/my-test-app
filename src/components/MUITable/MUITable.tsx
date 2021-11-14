import React, {FC} from 'react';
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {TableItemsResponseType} from "../../api/table-api";

type TableType = {
    tasks: TableItemsResponseType[]
    loading: boolean
}



const MuiTable: FC<TableType> = ({tasks, loading}) => {

    const columns: GridColDef[] = [
        // { field: 'id', headerName: 'ID', width: 100 },
        { field: 'NumberData', headerName: 'Номер/Дата', width: 200 },
        { field: 'OrderAuthor', headerName: 'Тип задания/Автор', width: 210 },
        {field: 'AccountTerminal', headerName: 'Аккаунт/Терминал', width: 210},
        {
            field: 'Status',
            headerName: 'Status',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 100,
            // valueGetter: (params: GridValueGetterParams) =>
            //     `${params.getValue(params.id, 'firstName') || ''} ${
            //         params.getValue(params.id, 'lastName') || ''
            //     }`,
        },
    ];
    const rows = [
        { id: 1, NumberData: {}, OrderAuthor: 'Jon', AccountTerminal: 'sad', Status: 'New' },
    ];

    return (
        <div style={{ height: 350, width: '100%' }}>
            <DataGrid
                columns={columns}
                rows={rows}
                pageSize={5}
                // rowsPerPageOptions={[5]}
                // checkboxSelection
            />
            {tasks.map((t)=>{

            })}
        </div>
    );
};

export default MuiTable;
