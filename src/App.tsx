import axios from 'axios';
import React, {useEffect, useMemo, useState} from 'react';
import './App.css';
import Table from './components/Table/Table';
import {TableItemsResponseType} from "./api/table-api";

function App() {

    const [data, setData] = useState<TableItemsResponseType[]>([])

        useEffect(() => {
        // setLoading(true)
        axios.get('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9f15021c-fcd4-4657-aff4-2782f62b60b6/test_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211114T154941Z&X-Amz-Expires=86400&X-Amz-Signature=fbbd46aa7978ccb0460272dac2fb79e18f38752f815c356795ad2b6966841e3c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22test_data.json%22')
            .then((res) => {
                setData(res.data)
                // setLoading(false)
            })
    }, [])

    const columns = useMemo(

        () => [
            {
                // first group - TV Show
                Header: "Номер / Дата",
                // First group columns
                columns: [
                    {
                        Header: [data.map(t=>(t.id))],
                        accessor: 'show.id'
                    },
                    {
                        Header: [data.map(t=>(t.created_date))],
                        accessor: "show.created_date"
                    }
                ]
            },
            {
                // Second group - Details
                Header: "Тип задания / Автор",
                // Second group columns
                columns: [
                    {
                        Header: [data.map(t=>(t.order_type.name))],
                        accessor: [data.map(t=>(t.order_type.name))]
                    },
                    {
                        Header: [data.map(t=>(t.created_user.name))],
                        accessor: "show.created_user.name"
                    },
                ]
            }
        ],
        []
    );


    return (
        <div>
            <Table columns={columns} data={data}/>
        </div>
    );
}

export default App;
