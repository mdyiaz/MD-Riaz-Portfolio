import React from 'react';
import img1 from '../../assets/AutoRitz.png';
import img2 from '../../assets/urbanFlip.png';
import img3 from '../../assets/Programming.png';
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import {MdLiveTv} from 'react-icons/md';




const Projects = () => {
    return (
        <div className='px-10'>
             <h1 className='text-center pb-5 text-6xl font-bold text-yellow-400 pt-10'>PROJECTS</h1>
             <p className='text-center text-white font-bold text-xl'>My projects makes use of vast variety of latest technology tools. My best experience <br /> is to create Data Science projects and deploy them to web applications  using  cloud <br /> infrastructure.</p>



             <div className='grid lg:grid-cols-2 sm:grid-cols-1 pt-24 gap-10'>
                <div>
                    <h1 className='text-4xl font-bold text-white'>AutoRitZ</h1>

                    <img src={img1} alt="" className='rounded-xl mt-5' />
                </div>

                <div>

                     <p className='text-white text-lg pb-3 mt-12'><span className='text-2xl font-bold'>AutoRitZ</span> is a second-hand car-selling e-commerce website. This site has three types of users_ admin, seller, and buyer. Admin can control seller and buyer.</p>

                    <p className='text-white'> <small className=''>*</small> Firebase Authentication with Email/Password & Google</p>
                    <p className='text-white'> <small className=''>*</small> Dynamic Products List, Admin Panel, Dashboard, Seller, Buyer, Add Products, Delete User, Advertise Products, Protected Route. </p>

                    <div className='mt-8'>
                        <button className="btn btn-xs btn-info text-white">Tailwind CSS</button>
                        <button className="btn btn-xs btn-error text-white">React</button>
                        <button className="btn btn-xs btn-warning text-white">Firebase</button>
                        <button className="btn btn-xs btn-primary text-white">Node JS</button>
                        <button className="btn btn-xs btn-info text-white">Express JS</button>
                        <button className="btn btn-xs btn-success text-white">MongoDB</button>
                    </div>

                   <a href="https://github.com/mdyiaz/AutoRitZ-client-code"> <button className="btn btn-info mt-5 text-white">Client Code <BsFillArrowRightCircleFill size='40px' className='pl-2'/></button></a>

                   <a href="https://github.com/mdyiaz/AutoRitZ-server-code "> <button className="btn btn-success text-white">Server Code <BsFillArrowRightCircleFill size='40px' className='pl-2'/> </button></a>

                   <a href="https://assignment-12-f0ec2.web.app/">  <button className="btn btn-warning text-white">Live Link <MdLiveTv size='40px' className='pl-2' /></button></a>
                  
                   
                </div>
                
             </div>





                <div className='grid lg:grid-cols-2 sm:grid-cols-1 pt-24 gap-10'>
                    <div>
                        <h1 className='text-4xl font-bold text-white'>UrbanFlip</h1>

                        <img src={img2} alt="" className='rounded-xl mt-5' />
                       

                    </div>

                    <div>

                    <p className='text-white text-lg pb-3 mt-12'><span className='text-2xl font-bold'>UrbanFlip</span> is a photography-based website. More different services can be added to this site, and the user can give his own review about any picture and see the reviews of other users.</p>

<p className='text-white'> <small className=''>*</small> Firebase Authentication with Email/Password & Google</p>
<p className='text-white'> <small className=''>*</small> Dynamic Products List, Reviews Section, personal Review, Add Products, Protected Route. </p>

<div className='mt-8 '>
    <button className="btn btn-xs btn-info text-white">Tailwind CSS</button>
    <button className="btn btn-xs btn-error text-white">React</button>
    <button className="btn btn-xs btn-warning text-white">Firebase</button>
    <button className="btn btn-xs btn-primary text-white">Node JS</button>
    <button className="btn btn-xs btn-info text-white">Express JS</button>
    <button className="btn btn-xs btn-success text-white">MongoDB</button>
</div>


<a href="https://github.com/mdyiaz/UrbanFlip-client-code"> <button className="btn btn-info mt-5 text-white">Client Code <BsFillArrowRightCircleFill size='40px' className='pl-2'/></button></a>

<a href="https://github.com/mdyiaz/UrbanFlip-server-code"> <button className="btn btn-success text-white">Server Code <BsFillArrowRightCircleFill size='40px' className='pl-2'/></button></a>

<a href="https://assignment-11-5af0d.web.app/">  <button className="btn btn-warning text-white">Live Link <MdLiveTv size='40px' className='pl-2' /></button></a>
                       
                    </div>
                
                </div>





                <div className='grid lg:grid-cols-2 sm:grid-cols-1 pt-24 pb-10 gap-10'>
                    <div>
                        <h1 className='text-4xl font-bold text-white'>Programming Tutorial</h1>

                        <img src={img3} alt="" className='rounded-xl mt-5' />
                       
                    </div>

                    <div>

                    <p className='text-white text-lg pb-3 mt-12'><span className='text-2xl font-bold'>Programming Tutorial</span> is an online learning website. Various programming courses are discussed on this site, going to course details will show the details of that particular course. Private routes have also been worked on here.</p>

<p className='text-white'> <small className=''>*</small> Firebase Authentication with Email/Password & Google</p>
<p className='text-white'> <small className=''>*</small> Dynamic Course List, Reviews Section, personal Review, Add Products. </p>

<div className='mt-8 '>
    <button className="btn btn-xs btn-info text-white">Tailwind CSS</button>
    <button className="btn btn-xs btn-error text-white">React</button>
    <button className="btn btn-xs btn-warning text-white">Firebase</button>
    <button className="btn btn-xs btn-primary text-white">Node JS</button>
    <button className="btn btn-xs btn-info text-white">Express JS</button>
    <button className="btn btn-xs btn-success text-white">MongoDB</button>
</div>



<a href="https://github.com/mdyiaz/Programming-course"> <button className="btn btn-info mt-5 text-white">Client Code <BsFillArrowRightCircleFill size='40px' className='pl-2'/></button></a>

<a href="https://github.com/mdyiaz/Programming-course-server"> <button className="btn btn-success text-white">Server Code <BsFillArrowRightCircleFill size='40px' className='pl-2'/></button></a>

<a href="https://programming-course-65bbb.web.app/">  <button className="btn btn-warning text-white">Live Link <MdLiveTv size='40px' className='pl-2' /></button></a>
                       
                    </div>
                
                </div>






             
            
        </div>
    );
};

export default Projects;