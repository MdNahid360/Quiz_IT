import { EyeIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';

const Question = ({qus, index}) => {
    const {id, question, correctAnswer, options} = qus;
    const [show, setShow] = useState(false);

    // const [isChecked, setIsChecked] = useState(false);
    const [correctAns, setCorrectAns] = useState(false);    
     const handleAns = (e, ans,i) => {
        if (e === ans) {
         Swal.fire({
            icon: 'success',
             html: `<h1><b>Wow Good Job</b> ${ans}</h1>`,
        })
       }else{
        Swal.fire({
            icon: 'error',
            title : 'Sorry wrong answer'
        })
       }
    }
   

    return (
        <div className='bg-white p-3 mx-auto md:w-[700px] w-auto mt-6 rounded-lg'>
           <div className="flex justify-between items-start">
               <h1 className="text-blue-500 font-[500] text-center"><span className='font-bold text-md'>Quiz {index + 1} : </span>{question}</h1>
               <button onClick={()=> setShow(!show)}><EyeIcon className="w-6"></EyeIcon></button>
           </div>
           <h2 className={`text-green-700 text-center bg-green-200 p-2 rounded-md mt-2 ${show ? 'block' : 'hidden'}`}><span className='font-[600]'>Correct Answer : </span> {correctAnswer}</h2>

           <div className="grid grid-cols-2 mt-3">
                {
                options.map((opt, index) => <div  className={`cursor-pointer`}>
                   <label onClick={()=> handleAns(opt, correctAnswer,index)} className=" border-blue-500 p-2 rounded-lg flex items-center border-2 m-2 ">
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