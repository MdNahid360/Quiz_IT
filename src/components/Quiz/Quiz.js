import React from 'react';

const Quiz = ({quiz}) => {
    const {id, name, total, logo} = quiz;
    return (
        <div className='bg-white m-2 px-3 py-4 rounded-lg'>
            <h1>{name}</h1>
        </div>
    );
};

export default Quiz;