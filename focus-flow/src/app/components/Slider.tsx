import { useState } from 'react';

function Slider() {
    const [activeTab, setActiveTab] = useState('todo');

    const tabs = [
        { name: 'todo', label: 'TO DO' },
        { name: 'in progress', label: 'IN PROGRESS' },
        { name: 'completed', label: 'COMPLETED' },
      ];


    return (
        <div className="flex flex-row justify-around my-4">
            {tabs.map((tab) => (
            <button
                key={tab.name}
                className={`text-xs whitespace-nowrap
                            ${activeTab === tab.name
                            ? 'border-b-4 border-orange-500 text-orange-600'
                            : 'text-gray-600 hover:text-orange-500 hover:border-orange-500'
                            }`}
                onClick={() => setActiveTab(tab.name)}
            >
                {tab.label}
            </button>
            ))}
        </div>
    );
}

export default Slider;