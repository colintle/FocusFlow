"use client";

import {useState} from "react"
import { CiTrash } from "react-icons/ci";

import Popup from "./Popup";
import EditTask from "../home/task/EditTask";

interface Task{
    task: any
}

function Task({task}: Task) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [loading, setLoading] = useState(false)
    
    async function deleteTask(){
        setLoading(true)
        const res = await fetch('api/delete', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({taskid: task.id}),
        })

        const out = await res.json()

        if (!out.errorCode) {
            alert("Success!")
            return
        }
        else{
            alert("Error: " + out.errorMessage);
            setLoading(false)
            return
        }
    }

    const handleClose = () => {
      setIsPopupOpen(false);
    };
    return (
        <div className="hover:cursor-pointer flex flex-col border p-4 shadow bg-white mx-2 rounded">
            <div onClick={() => setIsPopupOpen(true)}>
                <h2 className="text-lg font-semibold break-words">{task.title}</h2>
                <p className="break-words">Due by <span className="text-orange-600 font-medium">{task.date}</span></p>
                <p className="text-gray-700 break-words text-sm">{task.description}</p>
            </div>
            <p className="text-red-800 text-md" onClick={() => deleteTask()}>
                {loading ? "Loading" : <CiTrash/>}
            </p>
            {isPopupOpen && (
            <Popup title="Editing Task" onClose={handleClose}>
                <EditTask task={task}/>
            </Popup>
            )}
        </div>
    )
}

export default Task;