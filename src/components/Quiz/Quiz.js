import React from 'react';
import { useNavigate } from 'react-router-dom';

const Quiz = ({quiz}) => {
    const {id, name, total, logo} = quiz;
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate(`/quiz/${id}`)} className='bg-white m-2 px-3 py-4 rounded-lg cursor-pointer duration-300 hover:shadow-md hover:duration-300'>
            <h1>{name}</h1>
        </div>
    );
};

export default Quiz;