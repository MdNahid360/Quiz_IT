import React from 'react';
import { useNavigate } from 'react-router-dom';
import errorPic from '../../img/404_illustration.png';
const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="py-8 px-5">
            <img src={errorPic} className="md:w-[40%] w-98% m-auto" alt="" />
            <h1 className="text-center font-[900] text-6xl text-[#4167da]">OOPS</h1>
            <h1 className="text-center font-bold md:text-xl text-lg">Page NOt Found</h1>
            <div className="flex justify-center">
                <button onClick={()=> navigate(-1)} className="bg-[#4545f4] text-white py-2 px-5 mt-5 rounded-lg shadow-lg shadow-black-500/50">GO BACK</button>
            </div>
        </div>
    );
};

export default NotFound;