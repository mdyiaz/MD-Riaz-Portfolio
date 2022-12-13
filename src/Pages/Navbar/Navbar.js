import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai';


const Navbar = () => {
    return (


        
<div className=' '>
        {/* <div className='absolute top-52 right-0 pr-8'>
            <Link to='/'><h2 className='text-white'><AiOutlineHome size='20px'/>Home</h2></Link>
            <Link to='/about'><h2 className='text-white mt-4'>About</h2></Link>
            <Link to='/myskills'><h2 className='text-white mt-4'>My Skills</h2></Link>
            <Link to='/about'><h2 className='text-white mt-4'>Projects</h2></Link>
            <Link to='/contacts'><h2 className='text-white mt-4'>Contacts</h2></Link>
        </div> */}



<div className="navbar bg-zinc-900 pt-5 pb-24">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-5">
            
            <Link to='/about'><h2 className='text-black mt-4 '>About</h2></Link>
            <Link to='/myskills'><h2 className='text-black mt-4'>My Skills</h2></Link>
            <Link to='/projects'><h2 className='text-black mt-4'>Projects</h2></Link>
            <Link to='/contacts'><h2 className='text-black mt-4'>Contacts</h2></Link>
      </ul>
    </div>
    <Link to='/' className="btn btn-secondary text-lg font-bold">MD Riaz</Link>
    

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5">
           
            <Link to='/about'><h2 className='text-white mt-4 font-bold text-xl'>About</h2></Link>
            <Link to='/myskills'><h2 className='text-white mt-4 font-bold text-xl'>My Skills</h2></Link>
            <Link to='/projects'><h2 className='text-white mt-4 font-bold text-xl'>Projects</h2></Link>
            <Link to='/contacts'><h2 className='text-white mt-4 font-bold text-xl'>Contacts</h2></Link>
    </ul>
  </div>
  <div className="navbar-end">
  <Link to='/' className="btn btn-active btn-secondary text-lg font-bold">Hellow  World !</Link>
  </div>
</div>
</div>




    );
};

export default Navbar;