import { CheckCircleIcon,  EyeIcon } from '@heroicons/react/24/outline';
import { EyeSlashIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { MenuContext } from '../Main/Main';

const Question = ({qus, index,nmb}) => {
    const { question, correctAnswer, options} = qus;
    const [show, setShow] = useState(false);
    const [ansActive, setAnsActive] = useState(false);
       const handleAns = (e, ans,i) => {
        if (e === ans) {
         Swal.fire({
            icon: 'success',
             html: `<h1><b>Wow Good Job</b></h1>`,
        })
        setAnsActive(true)
       }else{
        Swal.fire({
            icon: 'error',
            title : 'Sorry wrong answer'
        })
        setAnsActive(false)
       }
    }


    return (
        <div className={`${ansActive ? 'rounded-l-lg rounded-l-0 border-r-4 border-green-400' : ' rounded-l-lg rounded-r-lg'} bg-white p-4 mx-auto md:w-[700px] w-auto mt-6`}>
           <div className="flex justify-between items-start">
               <h1 className="text-blue-500 font-[500] text-center"><span className='font-bold text-md'>Quiz {index + 1} : </span>{question}</h1>
              <div className="flex items-center">
                   {
                    ansActive &&  <button><CheckCircleIcon className='w-6 mr-2 text-green-400'></CheckCircleIcon></button>
                   }
                   <button onClick={()=> setShow(!show)}>{show ? <EyeSlashIcon className="w-6 text-blue-600"></EyeSlashIcon> : <EyeIcon className="w-6 text-blue-600"></EyeIcon> }</button>
              </div>
           </div>
           <h2 className={`text-green-700 text-center bg-green-200 p-2 rounded-md mt-2 ${show ? 'block' : 'hidden'}`}><span className='font-[600]'>Correct Answer : </span> {correctAnswer}</h2>

           <div className="grid grid-cols-2 mt-3">
                {
                options.map((opt, index) => <div onClick={()=>  handleAns(opt, correctAnswer,index)}  className={`cursor-pointer`}>
                   <label className=" border-blue-500 p-2 rounded-lg flex items-center border-2 m-2 ">
                       <input type='radio' name={correctAnswer} className='mr-2 w-5 h-5' />
                   <h1>{opt}</h1>
                   </label>
                </div>)
                }
           </div>
        </div>
    );
};

export default Question;