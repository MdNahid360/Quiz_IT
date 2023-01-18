import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom';

const Header = () => {
    let activeStyle = {
     fontWeight : 500,
     borderBottom : '3px solid blue',
     borderRadius : '12px'
    // transition : 'all 0.2s ease-in-out',
     
  };
    return (
        <div>
           <nav className="bg-white h-[60px] flex items-center justify-between px-[20px]">
               <span className="flex items-center">
                    <button className="p-2">
                        <Bars3Icon className='w-6 mr-3'></Bars3Icon>
                    </button>
                    <h1 className="font-bold font-Rubik ">Quiz IT</h1>
               </span>
               <ul className="flex items-center">
                  <li className='px-2'>
                        <NavLink className="py-1 ml-3"
                            to="/"
                            ClassName={({ isActive }) =>
                            isActive ? "bg-red-500" : undefined
                            }>
                                Home
                        </NavLink>    
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