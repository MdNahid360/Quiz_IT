import { ClipboardDocumentCheckIcon, DocumentTextIcon, HomeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
     
//     let activeStyle = {
//     backgroundColor : 'white',
//      color: 'black',
//      width : '100%!important',
//      display : 'flex'
//     // transition : 'all 0.2s ease-in-out',
     
//   };
    return (
        <div>
            <div className="flex">
                <div className="overflow-hidden w-[300px] py-3 px-2 bg-blue-800 text-white h-[100vh]">
                <ul className="">
                  <li className='w-full bg-white-0 mt-2 '>
                    <NavLink to='/' className={({isActive})=> isActive ? 'bg-blue-500 flex py-2 px-2 rounded-lg ease-out duration-200' : 'flex py-2 px-2 rounded-lg ease-out duration-300 '}>
                           <HomeIcon className="w-6 mr-2"></HomeIcon>  Home
                     </NavLink>
                    </li>
                  <li className='w-full bg-white-0 mt-3 '>
                         <NavLink to='/allQuiz' className={({isActive})=> isActive ? 'bg-blue-500 flex py-2 px-2 rounded-lg ease-out duration-200' : 'flex py-2 px-2 rounded-lg ease-out duration-300 '}>
                           <ClipboardDocumentCheckIcon className="w-6 mr-2"></ClipboardDocumentCheckIcon>  Quiz
                     </NavLink>
                  </li>
                  <li className='w-full bg-white-0 mt-3 '>
                     <NavLink to='/blog' className={({isActive})=> isActive ? 'bg-blue-500 flex py-2 px-2 rounded-lg ease-out duration-200' : 'flex py-2 px-2 rounded-lg ease-out duration-300 '}>
                           <DocumentTextIcon className="w-6 mr-2"></DocumentTextIcon>  Blog
                     </NavLink>
                  </li>
               </ul>
               
                </div>
                <div className="main-body w-full h-[100vh] overflow-hidden">
                    <Header></Header>
                    <div className="h-[100vh] overflow-y-scroll">
                          <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;