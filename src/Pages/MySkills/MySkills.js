import React from 'react';
import html from '../../assets/html5.png';
import css from '../../assets/css.webp';
import bootstrap from '../../assets/Bootstrap.png';
import tailwind from '../../assets/tailwind.jpg';
import js from '../../assets/js.png';
import mongodb from '../../assets/m2.png';
import react from '../../assets/react-removebg-preview.png';
import node from '../../assets/node-js.png';
import Express from '../../assets/ex.png';
import firebase from '../../assets/firebase-logo-402F407EE0-seeklogo.com-removebg-preview.png';
import git from '../../assets/git.png';



const MySkills = () => {
    return (
        <div className='px-24 pb-24'>
            <h1 className='text-center pb-20 text-6xl pt-10 font-bold text-yellow-400'>MY SKILLS</h1>


            <div className='grid lg:grid-cols-5 sm:grid-cols-1'>


                <div className='bg-gray-800 rounded-full  h-32 w-32 flex justify-center items-center flex-col mb-5 hover:bg-gradient-to-r from-amber-400 to-lime-500'>
                    <img src={html} alt="" className='h-14 w-14 rounded-xl' />
                    <p className='text-white font-bold mt-2'>HTML5</p>
                </div>

                <div className='bg-gray-800 rounded-full   h-32 w-32 flex justify-center items-center flex-col mb-5 hover:bg-gradient-to-r from-amber-400 to-lime-500'>
                    <img src={css} alt="" className='h-14 w-14 rounded-xl' />
                    <p className='text-white font-bold mt-2'>CSS3</p>
                </div>

                <div className='bg-gray-800 rounded-full   h-32 w-32 flex justify-center items-center flex-col mb-5 hover:bg-gradient-to-r from-amber-400 to-lime-500'>
                    <img src={bootstrap} alt="" className='h-14 w-14 rounded-xl' />
                    <p className='text-white font-bold mt-2'>Bootstrap</p>
                </div>


                <div className='bg-gray-800 rounded-full   h-32 w-32 flex justify-center items-center flex-col mb-5 hover:bg-gradient-to-r from-amber-400 to-lime-500'>
                    <img src={tailwind} alt="" className='h-14 w-14 rounded-xl' />
                    <p className='text-white font-bold mt-2'>Tailwind CSS</p>
                </div>


                <div className='bg-gray-800 rounded-full   h-32 w-32 flex justify-center items-center flex-col mb-5 hover:bg-gradient-to-r from-amber-400 to-lime-500'>
                    <img src={js} alt="" className='h-14 w-14 rounded-xl' />
                    <p className='text-white font-bold mt-2'>Javascript</p>
                </div>


                <div className='bg-gray-800 rounded-full   h-32 w-32 flex justify-center items-center flex-col mb-5 hover:bg-gradient-to-r from-amber-400 to-lime-500'>
                    <img src={firebase} alt="" className='h-14 w-14 rounded-xl' />
                    <p className='text-white font-bold mt-2'>Firebase</p>
                </div>



                <div className='bg-gray-800 rounded-full   h-32 w-32 flex justify-center items-center flex-col mb-5 hover:bg-gradient-to-r from-amber-400 to-lime-500'>
                    <img src={react} alt="" className='h-14 w-14 rounded-xl' />
                    <p className='text-white font-bold mt-2'>React</p>
                </div>


                <div className='bg-gray-800 rounded-full   h-32 w-32 flex justify-center items-center flex-col mb-5 hover:bg-gradient-to-r from-amber-400 to-lime-500'>
                    <img src={mongodb} alt="" className='h-14 w-14 rounded-xl' />
                    <p className='text-white font-bold mt-2'>MongoDB</p>
                </div>


                <div className='bg-gray-800 rounded-full   h-32 w-32 flex justify-center items-center flex-col mb-5 hover:bg-gradient-to-r from-amber-400 to-lime-500'>
                    <img src={node} alt="" className='h-14 w-14 rounded-xl' />
                    <p className='text-white font-bold mt-2'>Node JS</p>
                </div>


                <div className='bg-gray-800 rounded-full   h-32 w-32 flex justify-center items-center flex-col mb-5 hover:bg-gradient-to-r from-amber-400 to-lime-500'>
                    <img src={Express} alt="" className='h-14 w-14 rounded-xl' />
                    <p className='text-white font-bold mt-2'>Express JS</p>
                </div>


                <div className='bg-gray-800 rounded-full   h-32 w-32 flex justify-center items-center flex-col mb-5 hover:bg-gradient-to-r from-amber-400 to-lime-500'>
                    <img src={git} alt="" className='h-14 w-14 rounded-xl' />
                    <p className='text-white font-bold mt-2'>Git</p>
                </div>


            </div>


        </div>
    );
};

export default MySkills;