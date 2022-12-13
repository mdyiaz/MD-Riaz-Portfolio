import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../../../assets/portfolio.jpg';
import {BsFillArrowRightCircleFill, BsFacebook, BsFillTelephoneFill, BsInstagram, BsTwitter, BsGithub} from 'react-icons/bs';
import {FaBookReader} from 'react-icons/fa';
import {MdOutgoingMail} from 'react-icons/md';








const Home = () => (
    <div className=''>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 p-10 pb-16 '>


            <div>
                <img src={pic} alt="" className='w-96 h-96 rounded-full mb-20 ' />
            </div>



            <div>
                <h1 className=' text-4xl text-yellow-500 font-bold'>Hellow !</h1>
                <h1 className=' text-5xl text-lime-500 font-bold pt-3'>I am  MD Riazul Islam Riaz.</h1>
                <h1 className='text-4xl text-yellow-500 font-bold pt-3 pb-5'>Web Developer</h1>
                <p className='text-white text-xl mb-8'>Hi, my name is MD Riazul Islam Riaz and I am a full-stack web developer with 1+ years of experience with modern technologies like React, JWT, Tailwind CSS, Node js, Mongo DB, Express JS etc..</p>



                <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                    <Link to='/about'><button className="btn btn-warning text-white rounded-full mb-5">More About Me <span className='pl-3'><BsFillArrowRightCircleFill size='2rem' /></span></button></Link>

                    <a href="https://drive.google.com/file/d/12QDNY_Hdd0oTTB7xL0qT8HzfSDGuBdit/view?usp=sharing"><button className="btn btn-success text-white rounded-full ">My Resume <span className='pl-3'><FaBookReader size='2rem' /></span></button></a>
                </div>

                <div className='mt-10 flex gap-3 mb-20'>
                    <a href="https://www.facebook.com/riazulyiaz/"><BsFacebook size='30px' className='text-white ' /></a>
                    <MdOutgoingMail size='40px' className='text-white ' />
                    <BsFillTelephoneFill  size='30px' className='text-white '/>
                    <a href="https://www.instagram.com/mdriazulyiaz/"><BsInstagram size='30px' className='text-white '/></a>
                    <a href="https://www.instagram.com/mdriazulyiaz/"><BsTwitter size='30px' className='text-white '/></a>
                    <a href="https://github.com/mdyiaz"><BsGithub size='30px' className='text-white '/></a>
                </div>

            </div>

           

        </div>





    </div>
);

export default Home;