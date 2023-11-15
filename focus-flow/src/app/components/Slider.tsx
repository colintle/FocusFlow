import { useState } from 'react';

interface Slider{
    status: string,
    setStatus: (value: string | ((prevVar: string) => string)) => void,
}

function Slider({status, setStatus}: Slider) {
    const tabs = [
        { name: 'To Do', label: 'TO DO' },
        { name: 'In Progress', label: 'IN PROGRESS' },
        { name: 'Completed', label: 'COMPLETED' },
      ];


    return (
        <div className="flex flex-row justify-around my-4">
            {tabs.map((tab) => (
            <button
                key={tab.name}
                className={`text-xs whitespace-nowrap
                            ${status === tab.name
                            ? 'border-b-4 border-orange-500 text-orange-600'
                            : 'text-gray-600 hover:text-orange-500 hover:border-orange-500'
                            }`}
                onClick={() => setStatus(tab.name)}
            >
                {tab.label}
            </button>
            ))}
        </div>
    );
}

export default Slider;