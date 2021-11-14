import React, {useEffect, useState} from 'react';
import './App.css';
import axios, {AxiosResponse} from "axios";
import {Table} from "./components/Table/Table";

function App() {
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [countPerPage] = useState(5)

    useEffect(() => {
        setLoading(true)

        axios.get('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9f15021c-fcd4-4657-aff4-2782f62b60b6/test_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211114T154941Z&X-Amz-Expires=86400&X-Amz-Signature=fbbd46aa7978ccb0460272dac2fb79e18f38752f815c356795ad2b6966841e3c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22test_data.json%22')
            .then((res) => {
                setTasks(res.data)
                setLoading(false)
            })

    }, [])

    const lastTaskIndex = currentPage * countPerPage
    const firstTaskIndex = lastTaskIndex - countPerPage
    const currentTasks = tasks.slice(firstTaskIndex, lastTaskIndex)


    return (
        <div className="App">
            <Table
                loading={loading}
                tasks={currentTasks}
            />
        </div>
    );
}

export default App;
