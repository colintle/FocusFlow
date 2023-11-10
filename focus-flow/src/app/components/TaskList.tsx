"use client";

import {useState} from "react";
import {AiOutlinePlus} from "react-icons/ai";

import SearchBar from "./SearchBar";
import Task from "./Task";
import Slider from "./Slider";

function TaskList() {
    const [tasks, setTasks] = useState(["dummyData", "dummyData", "dummyData", "dummyData","dummyData", "dummyData", "dummyData", "dummyData","dummyData", "dummyData", "dummyData", "dummyData","dummyData", "dummyData", "dummyData", "dummyData","dummyData", "dummyData", "dummyData", "dummyData","dummyData", "dummyData", "dummyData", "dummyData","dummyData", "dummyData", "dummyData", "dummyData","dummyData", "dummyData", "dummyData", "dummyData","dummyData", "dummyData", "dummyData", "dummyData","dummyData", "dummyData", "dummyData", "dummyData", "dummyData", "dummyData", "dummyData", "dummyData", "dummyData", "dummyData", "dummyData", "dummyData", "dummyData", "dummyData"])
    return (
        <div className="relative w-full lg:w-1/4 bg-gray-100 border-blue-100 border-2 h-full">
            <div>
                <SearchBar/>
                <Slider/>
                <div className="bg-gray-150 mt-8 space-y-4 overflow-y-scroll max-h-[calc(100vh-18rem)] ">
                    {
                        tasks.map((task, index) => (
                            // In the future, pass in props for the task
                            <Task key={index}/>
                        ))
                    }
                </div>
                {/*This is the create button*/}
                <button className="mt-2 lg:mt-0 lg:absolute lg:bottom-0 text-orange-800 flex items-center justify-center bg-orange-300 hover:bg-orange-400 py-2 w-full h-14">
                    <AiOutlinePlus className="mr-2 text-orange-800" />
                    Create
                </button>
            </div>
        </div>
    );
}

export default TaskList;