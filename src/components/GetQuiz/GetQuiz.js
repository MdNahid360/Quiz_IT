import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { MenuContext } from '../Main/Main';
import Question from '../Question/Question';

const GetQuiz = () => {
    const quiz = useLoaderData();
    const {name, logo, total, questions} = quiz.data;
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
        <div className='pb-[8%]'>
            <div className="flex items-center justify-between border-b-2 border-gray-400 pb-2">
                <div className="flex items-center ">
                    <img src={logo} className="w-12" alt="" />
                <h1 className="font-bold text-2xl ml-2 text-[#073840]">{name}</h1>
                </div>
                <p className="text-lg font-[500]">Question: 1 to {total}</p>
            </div>
            {/* map questions */}
            {
                questions.map((qus, index) => <Question index={index} handleAns={handleAns} qus={qus}></Question>)
            }
        </div>
    );
};

export default GetQuiz;