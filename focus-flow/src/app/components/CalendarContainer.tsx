"use client";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {useState} from "react"

import Popup from './Popup';
import EditTask from '../home/task/EditTask';

interface CalendarContainer {
    tasks: Array<{}>,
}
function CalendarContainer({tasks}: CalendarContainer) {
    const [isPopUp, setIsPopUp] = useState(false)
    const [selectedTask, setSelectedTask] = useState<any>(null)

    function closePopUp(){
        setIsPopUp(false)
        return
    }

    function formatDate(dateString:string) {
        const date = new Date(dateString);
      
        const pad = (num:any) => num.toString().padStart(2, '0');
      
        const year = date.getFullYear();
        const month = pad(date.getMonth() + 1);
        const day = pad(date.getDate());
      
        return `${year}-${month}-${day}`;
    }

    function handlePop(info:any){
        console.log(info.event.id)
        let eventObject = {
            id: info.event.id,
            date: formatDate(info.event.start),
            title: info.event.title,
            description: info.event.extendedProps.description,
            status: info.event.extendedProps.status,
        }
        setSelectedTask(eventObject)
        setIsPopUp(true)
        return
    }
    return (
        <div className="h-full w-full hidden lg:block lg:w-3/4 shadow-xl">
            <FullCalendar
                height={"100%"}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                initialView='dayGridMonth'
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                events={tasks}
                eventClick={(event) => handlePop(event)}
            />
            
            {
                isPopUp && (
                <Popup title="Editing Task" onClose={closePopUp}>
                    <EditTask task={selectedTask}/>
                </Popup>
            )}
        </div>
    );
}

export default CalendarContainer;
