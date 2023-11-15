"use client";

import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

interface CalendarContainer {
    tasks: Array<{}>,
}
function CalendarContainer({tasks}: CalendarContainer) {
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
            />
        </div>
    );
}

export default CalendarContainer;
