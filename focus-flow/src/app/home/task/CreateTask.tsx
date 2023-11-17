"use client"

import {useState} from "react"

function CreateTask() {
    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [status, setStatus] = useState("To Do")

    function isValidDate(dateString:string) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
          return false;
        }
      
        const parts = dateString.split('-');
        const year = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1; // Month is 0-based
        const day = parseInt(parts[2], 10);
      
        if (year < 1000 || year > 3000 || month < 0 || month > 11) {
          return false;
        }
      
        const date = new Date(year, month, day);
      
        return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
      }

    async function handleCreate(){
        setLoading(true)
        if (!title || !description || !date || !status) {
            alert('Please enter all the fields to create a task.');
            setLoading(false)
            return;
        }

        if (!isValidDate(date)){
            alert("Please format the date (YYYY-MM-DD) or provide a valid date.")
            setLoading(false)
            return;
        }

        const res = await fetch('api/create', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({date, description, title, status}),
        })

        const out = await res.json()

        if (!out.errorCode) {
            alert("Success!")
            window.location.reload()
            return
        }
        else{
            alert("Error: " + out.errorMessage);
            setLoading(false)
            return
        }
    }

    function handleEnter(e:any){
        if(e.key === 'Enter'){
            handleCreate()
        }
    }

    return (
        <div className="w-full flex items-center" onKeyDown={(e) => handleEnter(e)}>
            <div className="flex-grow justify-center items-center">
                <p className="font-bold mb-4 flex items-center">Enter Task title:</p>
                <input
                    type="text"
                    className="border p-2 w-full border-gray-300 focus:outline-none focus:border-orange-500"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Do HW"
                />

                <p className="font-bold mb-4 mt-4 flex items-center">General Info:</p>
                <div className="flex items-center">
                <div className="mr-4">
                    <select 
                        onChange={(e) => setStatus(e.target.value)} 
                        className="border p-1 w-32 border-gray-300 focus:outline-none focus:border-orange-500"
                        value={status}
                    >
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>

                    <div>
                    <input
                        type="text"
                        className="border p-1 w-40 border-gray-300 focus:outline-none focus:border-blue-500"
                        placeholder="YYYY-MM-DD"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    </div>
                </div>
                <p className="font-bold mb-4 mt-8 flex items-center">
                    Description:
                </p>
                <input
                    type="text"
                    className="border p-2 w-full border-gray-300 focus:outline-none focus:border-blue-500"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="This homework is for biology class."
                />
                <button
                    onClick={handleCreate}
                    className="mt-4 min-w-[100px] bg-orange-300 text-white p-2 rounded-md hover:bg-orange-500 cursor-pointer"
                >
                    {loading ? "Loading" : "Create"}
                </button>
            </div>
        </div>
    );
}

export default CreateTask;