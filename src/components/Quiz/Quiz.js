import React from 'react';
import { useNavigate } from 'react-router-dom';

const Quiz = ({quiz}) => {
    const {id, name, total, logo} = quiz;
    const navigate = useNavigate();
    
    return (
        <div onClick={()=>navigate(`/quiz/${id}`)} className='bg-white m-2 px-3 py-4 rounded-lg cursor-pointer duration-300 hover:shadow-md hover:duration-300 flex items-start'>
            <div className="bg-gray-800 p-3 w-[50px] h-[50px] flex items-center justify-center rounded-xl shadow-lg shadow-orange-300/500">
                <img src={logo} className='w-10 rounded-lg' alt="" />
            </div>
            <div className="ml-2">
                <h1 className="font-bold">{name}</h1>
                <p>Total Quiz {total}</p>
            </div>
        </div>
    );
};

export default Quiz;