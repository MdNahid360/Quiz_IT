import { ArrowLeftIcon, ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { ClipboardDocumentCheckIcon, DocumentTextIcon, HomeIcon, TrophyIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { createContext, provider,React} from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
export let MenuContext = createContext(false);

const Main = () => {
        const [open, setOpen] = useState(false);
        const [openSm, setOpenSm] = useState(false);
       
       
    return (
      <MenuContext.Provider value={[open, setOpen]}>
              <div>
            <div className="flex">
                <div className={`overflow-hidden duration-300 md:block  ${open ? ' md:w-[0px] w-[100%] py-0 px-0 fixed' : ' md:w-[350px] w-0'} bg-blue-800 text-white h-[100vh]`}>
             
                <ul className=" w-[95%] m-auto overflow-hidden">
              <div className="md:hidden flex items-center justify-between m-2">
                  <Link to='/' className="font-bold ml-2">Quiz IT</Link> <XMarkIcon className='w-4' onClick={()=> setOpen(!open)}></XMarkIcon>
               </div>
                  <li onClick={()=> setOpen(!open)} className='w-full bg-white-0 mt-2 overflow-hidden'>
                    <NavLink to='/' className={({isActive})=> isActive ? 'bg-blue-500 flex py-2 px-2 rounded-lg ease-out duration-200' : 'flex py-2 px-2 rounded-lg ease-out duration-300 '}>
                           <HomeIcon className="w-6 mr-2"></HomeIcon>  Home
                     </NavLink>
                    </li>
                  <li className='w-full bg-white-0 mt-3 overflow-hidden'>
                         <NavLink to='/allQuiz' className={({isActive})=> isActive ? 'bg-blue-500 flex py-2 px-2 rounded-lg ease-out duration-200' : 'flex py-2 px-2 rounded-lg ease-out duration-300 '}>
                           <ClipboardDocumentCheckIcon className="w-6 mr-2"></ClipboardDocumentCheckIcon>  Quiz
                     </NavLink>
                  </li>
                  <li className='w-full bg-white-0 mt-3 overflow-hidden'>
                     <NavLink to='/blog' className={({isActive})=> isActive ? 'bg-blue-500 flex py-2 px-2 rounded-lg ease-out duration-200' : 'flex py-2 px-2 rounded-lg ease-out duration-300 '}>
                           <DocumentTextIcon className="w-6 mr-2"></DocumentTextIcon>  Blog
                     </NavLink>
                  </li>
                  <li className='w-full bg-white-0 mt-3 overflow-hidden'>
                     <NavLink to='/certificate' className={({isActive})=> isActive ? 'bg-blue-500 flex py-2 px-2 rounded-lg ease-out duration-200' : 'flex py-2 px-2 rounded-lg ease-out duration-300 '}>
                           <TrophyIcon className="w-6 mr-2"></TrophyIcon>  Certificate
                     </NavLink>
                  </li>
               </ul>

                </div>
                <div className={`main-body w-full h-[100vh] overflow-hidden ${open ? 'md:w-full w-0' : ' w-full'}`}>
                    <Header></Header>
                    <div className="h-[100vh] overflow-y-scroll md:p-3 p-2">
                          <Outlet></Outlet>
                    </div>
                </div>
            </div>
         </div>
      </MenuContext.Provider>
    );
};

export default Main;