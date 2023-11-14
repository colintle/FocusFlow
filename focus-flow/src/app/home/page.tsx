import Image from 'next/image';
import logo from '../../../public/logos/ffLogo_slogan.png';

import Calendar from "../components/CalendarContainer"
import TaskList from "../components/TaskList"
import Header from '../components/Header';
import CalendarContainer from '../components/CalendarContainer';

function HomePage() {
  return (
    <div className="container mx-auto h-screen px-2">
      <Header/>
      <div className="flex flex-col min-h-fit lg:flex-row lg:h-[90%] justify-between">
        <CalendarContainer/>
        <TaskList/>
      </div>
    </div>
  )
}

export default HomePage