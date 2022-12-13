import React from 'react';

const About = () => {
    return (
        <div className='px-5'>
            <h1 className='text-center pb-16 text-6xl pt-10 font-bold text-yellow-400 '>ABOUT ME</h1>


            <div className='flex flex-col-2 text-white gap-8'>
                <h2 className='text-2xl'>Developing software for the world of intent is something I'm passionate about and I'm dedicated to making the world of intent easy and affordable for everyone.  I always look for challenges where I can use my potential at most and always love to work on cutting edge technologies.</h2>

                <h2 className='text-yellow-400 text-2xl font-bold'> I am a Web developer who cares about the code and the people.</h2>
            </div>


            <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
               
               <div>
                    <h1 className=' pt-10 font-bold text-2xl text-yellow-400 mb-5 mt-5'>PERSONAL INFO________________________</h1>

                   
                  <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                        <div>

                        <p className='text-slate-400 font-bold text-xl mb-3'>First Name: <span className='text-white font-bold text-xl'>MD Riazul Islam</span></p>
                        <p className='text-slate-400 font-bold text-xl mb-3'>Age: <span className='text-white font-bold text-xl'> 23 Years</span></p>
                        <p className='text-slate-400 font-bold text-xl mb-3'> Freelance: <span className='text-white font-bold text-xl'>Available</span></p>
                        <p className='text-slate-400 font-bold text-xl mb-3'>Phone: <span className='text-white font-bold text-xl'>+8801631375174</span></p>
                        <p className='text-slate-400 font-bold text-xl mb-3'>GitHub: <span className='text-white font-bold text-xl'>https://github.com/mdyiaz</span></p>
                        
                        </div>


                        <div className=''>
                        <p className='text-slate-400 font-bold text-xl mb-3'>Last Name: <span className='text-white font-bold text-xl'>Riaz</span></p>
                        <p className='text-slate-400 font-bold text-xl mb-3'>Nationality: <span className='text-white font-bold text-xl'>Bangladeshi</span></p>
                        <p className='text-slate-400 font-bold text-xl mb-3'> Address: <span className='text-white font-bold text-xl'>Dhaka, Bangladesh</span></p>
                        <p className='text-slate-400 font-bold text-xl mb-3'>Email: <span className='text-white font-bold text-xl'>mdriazulislaam@gmail.com</span></p>
                        <p className='text-slate-400 font-bold text-xl mb-3'>Language: <span className='text-white font-bold text-xl'>Bangla, English, Hindi</span></p>
                        </div>


                  </div>
                   

                   
                </div>






               <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-5 pt-16 mb-10'>
                   <div className='text-white text-xl font-bold bg-gray-800 p-8 rounded-xl'>
                        <h2 className='text-yellow-500 text-4xl'>EDUCATION</h2>
                        <h2 className='mt-3'>_____  Studies at Computer   </h2>
                        <h2 className='pl-14'>Science& Engineering (CSE)</h2>
                   </div>

                   <div className='text-white text-xl font-bold bg-gray-800 p-8 rounded-xl'>
                        <h2 className='text-yellow-500 text-4xl'>COURSE</h2>
                        <h2 className='mt-3'>_____  I have done web    </h2>
                        <h2 className='pl-14'> developing course from Programming Hero</h2>
                   </div>


                   <div className='text-white text-xl font-bold bg-gray-800 p-8 rounded-xl'>
                        <h2 className='text-yellow-500 text-4xl'>PROGRAMMING LANGUAGE</h2>
                        <h2 className='mt-3'>_____  JavaScript </h2>
                        <h2 className='pl-14'>Familier:_ C, Python</h2>
                   </div>

                   <div className='text-white text-xl font-bold bg-gray-800 p-8 rounded-xl'>
                        <h2 className='text-yellow-500 text-4xl'>PROJECTS</h2>
                        <h2 className='mt-3'>_____  41 + </h2>
                        <h2 className='pl-14'>Projects</h2>
                   </div>

               </div>


            </div>
        </div>
    );
};

export default About;