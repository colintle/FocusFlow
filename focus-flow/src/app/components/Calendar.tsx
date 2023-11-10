import React from 'react';

function Calendar() {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const weeksInMonth = [
        [1, 2, 3, 4, 5, 6, 7],
        [8, 9, 10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19, 20, 21],
        [22, 23, 24, 25, 26, 27, 28],
    ];

    const currentMonth = 'November'; // Replace with the current month dynamically

    return (
        <div className="w-full lg:w-3/4 border-red-100 border-2">
            <h2 className="text-2xl font-bold mb-4">{currentMonth}</h2>
            <table className="w-full">
                <thead>
                    <tr>
                        {daysOfWeek.map(day => (
                            <th key={day} className="border border-gray-300 p-2">{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {weeksInMonth.map((week, weekIndex) => (
                        <tr key={weekIndex}>
                            {week.map(day => (
                                <td key={day} className="border border-gray-300 p-2">{day}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Calendar;
