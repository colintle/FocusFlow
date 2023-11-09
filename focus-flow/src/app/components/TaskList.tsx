"use client";

import {useState} from "react";
import {AiOutlinePlus} from "react-icons/ai";

import SearchBar from "./SearchBar";
import Task from "./Task";

function TaskList() {
    const [tasks, setTasks] = useState(["dummyData", "dummyData", "dummyData", "dummyData","dummyData", "dummyData", "dummyData", "dummyData","dummyData", "dummyData", "dummyData", "dummyData","dummyData", "dummyData", "dummyData", "dummyData","dummyData", "dummyData", "dummyData", "dummyData","dummyData", "dummyData", "dummyData", "dummyData","dummyData", "dummyData", "dummyData", "dummyData","dummyData", "dummyData", "dummyData", "dummyData","dummyData", "dummyData", "dummyData", "dummyData","dummyData", "dummyData", "dummyData", "dummyData", "dummyData", "dummyData", "dummyData", "dummyData", "dummyData", "dummyData", "dummyData", "dummyData", "dummyData", "dummyData"])
    //const [tasks, setTasks] = useState([])
    return (
        <div className="w-full md:w-1/4 border-blue-100 border-2 h-full flex items-center justify-center">
            <div>
                <SearchBar/>
                <div className="mt-4 space-y-4 overflow-scroll max-h-[calc(100vh-17rem)]">
                    {
                        tasks.map((task) => (
                            // In the future, pass in props for the task
                            <Task/>
                        ))
                    }
                </div>
                <button className="text-orange-800 flex items-center justify-center bg-orange-300 hover:bg-orange-400 py-2 w-full mt-5">
                    <AiOutlinePlus className="mr-2 text-orange-800" />
                    Create
                </button>
            </div>
        </div>
    );
}

export default TaskList;