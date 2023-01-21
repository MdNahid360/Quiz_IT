import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
const ReadBlog = () => {
    let bId = useParams().blogId;
    let readBlog = useLoaderData();
    const {title, dic, pic} = (readBlog[bId]);
    const navigate = useNavigate()
    return (
       <>
         <button onClick={()=> navigate(-1)} className='px-4 py-1'><ArrowLeftIcon className="w-6"></ArrowLeftIcon></button>
           <div className="bg-white px-3 pt-3 pb-6 rounded-xl mt-3">
            <div className="h-[300px] rounded-xl" style={{backgroundImage : `url(${pic})`,backgroundPosition : "100% 100%"}}>.</div>
            <h1 className="font-bold text-2xl mt-2">{title}</h1>
            <p className="mt-3">{dic}</p>
        </div>
       </>
    );
};

export default ReadBlog;