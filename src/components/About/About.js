import React from 'react';
import vct1 from '../../img/vct1.svg'; 

const About = () => {
    return (
        <div>
             <div className="md:flex items-center p-3 mt-14">
                <div className="">
                        <h1 className="text-3xl font-bold">About</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptatibus ullam ut eius amet iusto ipsam autem optio voluptas nemo quod necessitatibus, sequi, molestiae obcaecati deserunt vero eum error laboriosam!</p>
                </div>
                <div className="md:w-[100%] w-[80%] mx-auto md:mt-0 mt-6">
                    <img src={vct1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;