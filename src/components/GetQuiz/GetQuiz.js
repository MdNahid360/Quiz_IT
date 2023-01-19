import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const GetQuiz = () => {
    const quiz = useLoaderData();
    const {name, logo, total, questions} = quiz.data;
    // console.log(questions);
    return (
        <div>
            <div className="flex items-center justify-between border-b-2 border-gray-400 pb-2">
                <div className="flex items-center ">
                    <img src={logo} className="w-12" alt="" />
                <h1 className="font-bold text-2xl ml-2 text-[#073840]">{name}</h1>
                </div>
                <p className="text-lg font-[500]">Question: 1 to {total}</p>
            </div>
            {/* map questions */}
            {
                questions.map((qus, index) => <Question index={index} qus={qus}></Question>)
            }
        </div>
    );
};

export default GetQuiz;