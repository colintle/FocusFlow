'use client'
import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import Popup from './Popup';
import SearchBar from './SearchBar';
import Task from './Task';
import Slider from './Slider';
import CreateTask from '../home/task/CreateTask';

interface TaskListProps {
  tasks: any[];
  status: string;
  setStatus: (value: string | ((prevVar: string) => string)) => void;
  setSearch: (value: string | ((prevVar: string) => string)) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, status, setStatus, setSearch }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  // const handleDueDateInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setDueDateInput(event.target.value);
  // };

  return (
    <div className="relative w-full lg:w-1/5 bg-gray-100 shadow-xl h-full">
      <SearchBar setSearch={setSearch} />
      <Slider status={status} setStatus={setStatus} />

      <div className="bg-gray-150 mt-8 space-y-4 overflow-y-scroll max-h-[calc(100vh-18rem)]">
        {tasks.map((task, index) => (
          <Task key={index} task={task} />
        ))}
      </div>

      <button
        className="mt-2 lg:mt-0 lg:absolute lg:bottom-0 text-orange-800 flex items-center justify-center bg-orange-300 hover:bg-orange-400 py-2 w-full h-14"
        onClick={handleOpenPopup}
      >
        <AiOutlinePlus className="mr-2 text-orange-800" />
        Create
      </button>

      {isPopupOpen && (
        <Popup title="Creating New Task" onClose={handleClosePopup}>
          <CreateTask/>
        </Popup>
      )}
    </div>
  );
};

export default TaskList;
