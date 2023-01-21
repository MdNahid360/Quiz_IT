import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import bg1 from '../../img/bg2.jpg'
import { CodeBracketIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { ListBulletIcon, Square3Stack3DIcon, Squares2X2Icon } from '@heroicons/react/24/outline';
// import 'boxicons';

const AllQuize = () => {
    const data = useLoaderData();
    const [threeCols, setThreeCols] = useState(false);
    return (
      <div className="">
            <div className="h-[300px] rounded-xl p-4" style={{ 
                         background: `linear-gradient(90deg, rgba(19,14,113,0.5355392156862745) 0%, rgba(7,7,68,0.6559873949579832) 48%, rgba(0,78,255,0.7960434173669468) 100%),url(${bg1})`,
                         backgroundSize : 'cover' 
                        }}>
      
                <div className="m-auto mt-[6%]">
                <h1 className='md:text-3xl text-xl font-[600] text-center text-white'>TEST YOUR WEB DEVELOPMENT </h1>
                <h1 className='text-center text-white font-[700] text-3xl'>SKILL</h1>
                </div>
            </div>
            <div className="flex pb-3 justify-between items-center mt-4 px-2 border-b border-[#56555580]">
            <h1 className='text-xl font-[700] text-black'>Quiz</h1>
                <div className="button-group flex">
                    
                    <button className='bg-[white] outline-none p-1 rounded-lg mr-2' onClick={()=> setThreeCols(!threeCols)}>
                            <ListBulletIcon className="w-6"></ListBulletIcon>
                    </button>
                    
                    <button className='bg-[white] outline-none p-1 rounded-lg' onClick={()=> setThreeCols(!threeCols)}>
                            <Squares2X2Icon className="w-6"></Squares2X2Icon>
                    </button>
                </div>
            </div>
            <div className={`${threeCols ? 'block' : 'grid'} md:grid-cols-3 grid-cols-2 mt-2`}>
                {
                    data.data.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
            </div>
      </div>
    );
};

export default AllQuize;