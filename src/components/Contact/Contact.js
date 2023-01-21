import React from 'react';
import bg from '../../img/bg3.jpg';
import 'boxicons';
// import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Contact = () => {
    const sendMsg =()=>{
        Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your message send successfully',
                        showConfirmButton: false,
                        timer: 1500
                        })
    }
    return (
       <div className="md:grid grid-cols-2 md:h-[400px] h-auto md:p-11 p-5 rounded-xl" style={{backgroundImage: `url("${bg}")`, backgroundSize: "cover"}}>
            <div className=" flex justify-center items-center" >
                <div className="">
                    <h1 className='font-bold text-xl'>Contact Us</h1>

                    <p className="mt-3">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum tempora nulla suscipit explicabo, reprehenderit ut? Soluta dignissimos
                    </p>
                    
                    <div className="flex items-center">
                        <a className='bg-[#4267B2]  flex items-center justify-center rounded shadow-lg w-[38px] h-[38px]' href="https://www.facebook.com/nahid360s/">
                            <box-icon  name='facebook' type='logo' color="white"   size='sm'></box-icon>
                        </a>
                        <a className='bg-[#0077b5] m-2 flex items-center justify-center rounded shadow-lg w-[38px] h-[38px]' href="https://www.linkedin.com/in/nahid-ferdaos/">
                            <box-icon color="white" name='linkedin' type='logo'  size='sm'></box-icon>
                        </a>
                        <a className='bg-[#1d2933]  flex items-center justify-center rounded shadow-lg w-[38px] h-[38px]' href="https://github.com/MdNahid360">
                            <box-icon  name='github' type='logo' color='white' size='sm'></box-icon>
                        </a>
                    </div>
                </div>
            </div>

            <div className="p-3 flex items-center">
                <form className="" onClick={(e)=>{e.preventDefault()}}>
                        <input type="text" className="border border-indigo-700 md:w-[300px] w-full rounded px-2 py-1 outline-none" placeholder="Enter Your Name " />
                        
                        <input type="email" className="border border-indigo-700 md:w-[300px] w-full rounded px-2 py-1 mt-3 outline-none" placeholder="Enter Your Email" />
                       
                        <textarea className="border border-indigo-700 md:w-[300px] h-[100px] w-full rounded px-2 py-1 mt-3 outline-none" placeholder="Enter Your Email" /><br />
                        <input onClick={sendMsg}     
  type="submit" value="Send" className='bg-indigo-600 text-white px-5 py-[7px] rounded-lg shadow-md mt-3' />
                </form>
            </div>
       </div>
    );
};

export default Contact;