import React, { useState } from 'react';
import { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCart from '../BlogCart/BlogCart';
const Blog = () => {
     const blog = useLoaderData();
     return (
           <>
           <h1 className="text-2xl font-bold border-b-2 border-[#00000073] pb-2">Blog</h1>
              <div className='mt-3 grid grid-cols-3 gap-3'>
            {
                blog.map(blg => <BlogCart blg={blg}></BlogCart>)
             }            
        </div>
           </>
    );
};

export default Blog;