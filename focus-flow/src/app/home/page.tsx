import Image from 'next/image';
import logo from '../../../public/logos/ffLogo_slogan.png';

import Calendar from "../components/Calendar"
import TaskList from "../components/TaskList"
import Header from '../components/Header';

function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <Header/>
      <div className="flex flex-col md:flex-row">
        <Calendar/>
        <TaskList/>
      </div>
    </div>
  )
}

export default HomePage