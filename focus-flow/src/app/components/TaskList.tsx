'use client' 
import React, { useState } from 'react';
import Popup from './Popup'; 
import { AiOutlinePlus } from 'react-icons/ai';
import SearchBar from './SearchBar';
import Task from './Task';
import Slider from './Slider';

function TaskList() {
  // State for managing tasks and the popup
  const [tasks, setTasks] = useState(["dummyData", /* ... */]);
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Event handler for opening the popup
  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  // Event handler for closing the popup
  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="relative w-full lg:w-1/5 bg-gray-100 border-blue-100 border-2 h-full">
      <div>
        <SearchBar />
        <Slider />
        <div className="bg-gray-150 mt-8 space-y-4 overflow-y-scroll max-h-[calc(100vh-18rem)]">
          {tasks.map((task, index) => (
            <Task key={index} />
          ))}
        </div>
        {/* This is the create button */}
        <button
          className="mt-2 lg:mt-0 lg:absolute lg:bottom-0 text-orange-800 flex items-center justify-center bg-orange-300 hover:bg-orange-400 py-2 w-full h-14"
          onClick={handleOpenPopup}
        >
          <AiOutlinePlus className="mr-2 text-orange-800" />
          Create
        </button>
      </div>

      {/* Conditionally render the Popup component */}
      {isPopupOpen && (
        <Popup
          title="Task title"
          onClose={handleClosePopup}
        >
          {/* Content of the popup goes here */}
          <p>This is where you can create a new task.</p>
        </Popup>
      )}
    </div>
  );
}

export default TaskList;