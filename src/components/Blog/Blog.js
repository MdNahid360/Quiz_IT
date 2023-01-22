// import React, { useState } from 'react';
// import { createContext } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { useLoaderData, useNavigate } from 'react-router-dom';
import BlogCart from '../BlogCart/BlogCart';
const Blog = () => {
     const blog = useLoaderData();
     const navigate = useNavigate();
     return (
           <>
           <h1 className="text-2xl font-bold border-b-2 border-[#00000073] flex items-center pb-2"> <button className="md:hidden block mr-3"><ArrowLeftIcon className='w-6' onClick={()=>navigate(-1)}></ArrowLeftIcon></button> Blog</h1>
              <div className='mt-3 md:grid grid-cols-3 gap-3'>
            {
                blog.map(blg => <BlogCart key={blg.id} blg={blg}></BlogCart>)
             }            
        </div>
           </>
    );
};

export default Blog;