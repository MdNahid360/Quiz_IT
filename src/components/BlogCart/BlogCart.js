import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const BlogCart = ({blg}) => {
    let {title, id, dic, pic} = blg;
    return (
       <div className="bg-white px-3 pt-3 pb-5 rounded-lg">
           <div className="">
                <img src={pic} alt="" className="rounded-xl" />
                <h1 className="font-bold text-xl mt-3">{title} ?</h1>
                <Link to={`/readBlog/${id}`} className="bg-blue-500 px-3 py-2 mt-4 flex items-center rounded-md shadow-lg w-[90px] text-white">Read <ArrowRightIcon className='w-5 ml-3'></ArrowRightIcon></Link>
           </div>
      </div>
    );
};

export default BlogCart;