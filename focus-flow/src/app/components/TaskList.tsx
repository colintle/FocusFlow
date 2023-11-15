'use client' 
import React, { useState } from 'react';
import Popup from './Popup';
import { AiOutlinePlus } from 'react-icons/ai';
import SearchBar from './SearchBar';
import Task from './Task';
import Slider from './Slider';
import image from '../../../public/images/circle-with-i-1.png';

function TaskList() {
  const [tasks, setTasks] = useState(["dummyData", /* ... */]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [descriptionText, setDescriptionText] = useState("Input text"); // State for description text

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

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
        <button
          className="mt-2 lg:mt-0 lg:absolute lg:bottom-0 text-orange-800 flex items-center justify-center bg-orange-300 hover:bg-orange-400 py-2 w-full h-14"
          onClick={handleOpenPopup}
        >
          <AiOutlinePlus className="mr-2 text-orange-800" />
          Create
        </button>
      </div>

      {isPopupOpen && (
        <Popup
          title="Task title"
          onClose={handleClosePopup}
        >
          <div className="flex items-center">
            <img
              src={image.src}
              alt="Image Description"
              className="mr-4 w-5 h-5 rounded-full mb-20"
            />
            <div className="text-left ml-2">
              <p className="font-bold mb-4 mt-2">General Info</p>
              <div className="flex">
                <div className="mr-4">
                  <select className="border rounded-md p-1 w-32">
                    <option disabled selected hidden>Status</option>
                    <option value="todo">To Do</option>
                    <option value="done">Done</option>
                  </select>
                </div>
                <div className="mr-4">
                  <select className="border rounded-md p-1 w-32">
                    <option disabled selected hidden>Priority</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="difficult">Difficult</option>
                  </select>
                </div>
                <div>
                  <select className="border rounded-md p-1 w-40">
                    <option disabled selected hidden>MM/DD/YYYY</option>
                    {/* Add your options for Due Date here */}
                  </select>
                </div>
              </div>

              <p className="font-bold mb-8 mt-8">Description</p>
              <input
                type="text"
                className="border rounded-md p-1 w-full"
                value={descriptionText}
                onChange={(e) => setDescriptionText(e.target.value)}
                onClick={() => setDescriptionText("")} // Clear default text on click
              />
            </div>
          </div>
        </Popup>
      )}
    </div>
  );
}

export default TaskList;
