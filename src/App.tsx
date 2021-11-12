import React, {useEffect, useState} from 'react';
import './App.css';
import axios, {AxiosResponse} from "axios";
import Tasks from "./components/Tasks/Tasks";
import {Pagination} from "./components/Pagination/Pagination";

function App() {
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [countPerPage] = useState(10)

    useEffect(() => {
        setLoading(true)

        axios.get('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9f15021c-fcd4-4657-aff4-2782f62b60b6/test_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211112T164750Z&X-Amz-Expires=86400&X-Amz-Signature=0bfd48d89a3546c2889c4c71ec53ffd0d485ad757522b9aa2ea83f9295521253&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22test_data.json%22')
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

            <Tasks
                tasks={currentTasks}
                loading={loading}
            />
            <Pagination

            />
        </div>
    );
}

export default App;
