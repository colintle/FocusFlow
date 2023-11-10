import Image from 'next/image';
import logo from '../../../public/logos/ffLogo_slogan.png';

import Calendar from "../components/Calendar"
import TaskList from "../components/TaskList"
import Header from '../components/Header';

function HomePage() {
  return (
    <div className="container mx-auto h-screen px-2">
      <Header/>
      <div className="flex flex-col min-h-fit lg:flex-row lg:h-[90%]">
        <Calendar/>
        <TaskList/>
      </div>
    </div>
  )
}

export default HomePage