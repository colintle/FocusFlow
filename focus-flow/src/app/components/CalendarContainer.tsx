"use client";

import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'


function CalendarContainer() {
    return (
        <div className="h-full w-full hidden lg:block lg:w-3/4 border-red-100 border-2">
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
                events={[
                    {
                      id: 'a',
                      title: 'my event',
                      start: '2023-11-01'
                    }
                  ]}
            />
        </div>
    );
}

export default CalendarContainer;
