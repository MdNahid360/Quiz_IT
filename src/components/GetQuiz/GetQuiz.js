import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Question from '../Question/Question';

const GetQuiz = () => {
    const quiz = useLoaderData();
    const {name, logo, total, questions} = quiz.data;
    const [nm, setNm] =useState(1)
    const nmb =()=>{
        setNm(nm+1)
    }
    const navigate = useNavigate();
    return (
        <div className='pb-[8%]'>
            <div className="flex items-center justify-between border-b-2 border-gray-400 pb-2">
                <div className="flex items-center ">
                    <button className="md:hidden block"><ArrowLeftIcon className='w-6' onClick={()=>navigate(-1)}></ArrowLeftIcon></button>
                    <img src={logo} className="w-12" alt="" />
                <h1 className="font-bold text-2xl ml-2 text-[#073840]">{name}</h1>
                </div>
                <p className="text-lg font-[500]">Total question {total}</p>
            </div>
            {/* map questions */}
            {
                questions.map((qus, index) => <Question nmb={nmb} index={index} qus={qus}></Question>)
            }
        </div>
    );
};

export default GetQuiz;