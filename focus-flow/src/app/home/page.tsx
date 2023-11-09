import Image from 'next/image';
import logo from '../../../public/logos/ffLogo_slogan.png';

import Calendar from "../components/Calendar"
import TaskList from "../components/TaskList"
import Header from '../components/Header';

function HomePage() {
  return (
    <div className="container mx-auto p-4 h-screen">
      <Header/>
      <div className="flex flex-col lg:flex-row h-[90%]">
        <Calendar/>
        <TaskList/>
      </div>
    </div>
  )
}

export default HomePage