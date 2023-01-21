// import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'
// import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { MenuContext } from '../Main/Main';

const Header = () => {
    const menu = useContext(MenuContext);
    const [open, setOpen] = menu;
 
    return (
        <div>
           <nav className="bg-white h-[60px] flex items-center justify-between px-[20px]">
               <span className="flex items-center">
                    <button className="p-2" onClick={() => setOpen(!open)}>
                        <Bars3Icon className='w-6 mr-3'></Bars3Icon>
                    </button>
                    <h1 className="font-bold font-Rubik ">Quiz IT</h1>
               </span>
               <ul className="flex items-center">
                  <li className='px-2'>
                       <button className='bg-blue-600 shadow-lg text-white px-4 py-2 rounded-lg'>Sign In</button> 
                    </li>
                  {/* <li className='px-2'>
                       <NavLink className="py-1 ml-3"
                            to="/allQuiz"
                            style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }>
                                Quiz
                        </NavLink>
                  </li>
                  <li className='px-2'>
                      <NavLink className="py-1 ml-3 "
                            to="/blog"
                            style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }>
                                Blog
                      </NavLink>
                  </li> */}
               </ul>
           </nav>
        </div>
    );
};

export default Header;