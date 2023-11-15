"use client"

import { useState, useEffect } from 'react';

import Image from 'next/image';
import logo from '../../../public/logos/ffLogo_slogan.png';

import Calendar from "../components/CalendarContainer"
import TaskList from "../components/TaskList"
import Header from '../components/Header';
import CalendarContainer from '../components/CalendarContainer';

// To Do
// Make fetch calls to get events

// To Do (getServerProps)
// Check for cookie before accessing this page
function HomePage() {
  let allTasks = [
    {
      title:"Test 1",
      date: '2023-11-02',
      status: 'To Do',
      description: "asdfasdf"
    }, 
    {
      title:"Test 2",
      date: '2023-11-20',
      status: 'To Do',
      description: "asdfasdfasdfasdf"
    }, 
    {
      title:"Test 3",
      date: '2023-11-15',
      status: 'In Progress',
      description: "asdfasdf"

    }, 
    {
      title:"Test 4",
      date: '2023-11-30',
      status: 'In Progress',
      description: "asdfasdf"
    },
    {
      title:"Test 3",
      date: '2023-11-15',
      status: 'In Progress',
      description: "asdfasdf"

    }, 
    {
      title:"Test 4",
      date: '2023-11-30',
      status: 'In Progress',
      description: "asdfasdf"
    },
    
    {
      title:"Test 5",
      date: '2023-11-19',
      status: 'Completed',
      description: "asdfasdfasdfas"
    }
  ]
  
  const [tasks, setTasks] = useState<any>([])
  const [status, setStatus] = useState("To Do")
  const [search, setSearch] = useState("")

  console.log(search)

  useEffect(() => {
    const filtered = allTasks.filter((task) => task.status == status)
    setTasks(filtered)
  }, [status])

  // search function
  async function SearchBar(){

  }

  return (
    <div className="container mx-auto h-screen px-2 bg-gray-100">
      <Header/>
      <div className="flex flex-col min-h-fit lg:flex-row lg:h-[90%] justify-between">
        <CalendarContainer tasks={tasks}/>
        <TaskList setSearch={setSearch} tasks={tasks} status={status} setStatus={setStatus}/>
      </div>
    </div>
  )
}

export default HomePage