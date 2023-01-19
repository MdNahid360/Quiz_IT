import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import bg1 from '../../img/bg2.jpg'
import { CodeBracketIcon } from '@heroicons/react/24/solid';
import 'boxicons';
const AllQuize = () => {
    const data = useLoaderData();
    
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
                <div className="button-group md:flex hidden">
                    <button>
                         <box-icon name='grid' type='solid' className="text-black" ></box-icon>
                    </button>
                </div>
            </div>
            <div className='md:grid grid-cols-4 mt-2'>
                {
                    data.data.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
            </div>
      </div>
    );
};

export default AllQuize;