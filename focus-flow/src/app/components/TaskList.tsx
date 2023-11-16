'use client';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Popup from './Popup';
import { AiOutlinePlus } from 'react-icons/ai';
import SearchBar from './SearchBar';
import Task from './Task';
import Slider from './Slider';
import image1 from '../../../public/images/circle-with-i-1.png';
import image2 from '../../../public/images/Description image.png';

interface TaskList {
  tasks: Array<{}>;
  status: string;
  setStatus: (value: string | ((prevVar: string) => string)) => void;
  setSearch: (value: string | ((prevVar: string) => string)) => void;
}

function TaskList({ tasks, status, setStatus, setSearch }: TaskList) {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [descriptionText, setDescriptionText] = useState('Input text');
  const [checklistItems, setChecklistItems] = useState(['Proident commodo', 'Minim laboris non']);
  const [newChecklistItem, setNewChecklistItem] = useState('');
  const [dueDate, setDueDate] = useState<Date | null>(null);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const handleAddMore = () => {
    if (newChecklistItem.trim() !== '') {
      setChecklistItems([...checklistItems, newChecklistItem]);
      setNewChecklistItem('');
    }
  };

  return (
    <div className="relative w-full lg:w-1/5 bg-gray-100 shadow-xl h-full">
      <div>
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
      </div>

      {isPopupOpen && (
        <Popup title="Task title" onClose={handleClosePopup}>
          <div className="flex items-center">
            <div className="text-left ml-2 flex-grow">
              <p className="font-bold mb-4 mt-2">General Info</p>
              <div className="flex items-center">
                <div className="mr-4">
                  <select className="border p-1 w-32 border-gray-300 focus:outline-none focus:border-blue-500">
                    <option disabled selected hidden>Status</option>
                    <option value="todo">To Do</option>
                    <option value="inprogress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <div className="mr-4">
                  <select className="border p-1 w-32 border-gray-300 focus:outline-none focus:border-blue-500">
                    <option disabled selected hidden>Priority</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="difficult">Difficult</option>
                  </select>
                </div>
                <div>
                  <DatePicker
                    selected={dueDate}
                    onChange={(date: React.SetStateAction<Date | null>) => setDueDate(date)}
                    className="border p-1 w-40 border-gray-300 focus:outline-none focus:border-blue-500"
                    placeholderText="Select due date"
                  />
                </div>
              </div>

              <p className="font-bold mb-8 mt-8 flex items-center">
                <img
                  src={image2.src}
                  alt="Description Image"
                  className="mr-4 w-5 h-5 rounded-full mb-0"
                />
                Description
              </p>
              <input
                type="text"
                className="border p-2 w-full border-gray-300 focus:outline-none focus:border-blue-500"
                value={descriptionText}
                onChange={(e) => setDescriptionText(e.target.value)}
                onClick={() => setDescriptionText('')}
              />

              {/* Checklist Section */}
              <div className="mt-8">
                <p className="font-bold mb-4">Checklist</p>
                {checklistItems.map((item, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    <span>{item}</span>
                  </div>
                ))}
                <div className="flex items-center mb-2">
                  <input
                    type="text"
                    className="border p-2 mr-2 flex-grow border-gray-300 focus:outline-none focus:border-blue-500"
                    placeholder="New item..."
                    value={newChecklistItem}
                    onChange={(e) => setNewChecklistItem(e.target.value)}
                  />
                  <button
                    className="bg-orange-300 hover:bg-orange-400 text-white font-bold py-2 px-4"
                    onClick={handleAddMore}
                  >
                    Add More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Popup>
      )}
    </div>
  );
}

export default TaskList;
