"use client"

import { useState, useEffect } from 'react';

import TaskList from "../components/TaskList"
import Header from '../components/Header';
import CalendarContainer from '../components/CalendarContainer';

function HomePage() {

  const [all, setAll] = useState<any>([])
  const [tasks, setTasks] = useState<any>([])
  const [status, setStatus] = useState("To Do")
  const [search, setSearch] = useState("")

  useEffect(() => {
    if (all.length > 0) {
      const filtered = all.filter((task:any) => task.status == status)
      setTasks(filtered)
    }
  }, [status, all])

  useEffect(() => {
    fetchSearchResults()
    .then(data => {
      if (data?.matchingTasks?.length > 0){
        setAll(data.matchingTasks)
      }
    })
  }, [search])

async function fetchSearchResults() {
  try {
    const endpoint = 'api/search';
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ searchQuery: search }),
    };

    const response = await fetch(endpoint, requestOptions);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    let data = await response.json();
    return data
  } catch (error:any) {
    console.error('Fetch error:', error.message);
    return { error: error.message };
  }
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