import React from 'react';
import emailjs from 'emailjs-com';
import {BiSend} from 'react-icons/bi';



const Contacts = () => {


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_9x97zot', 'template_chjp9se', e.target, '3OAuuyOoweIAwjDam').then(res =>{
            console.log(res);
        }).catch(err=> console.log(err));
        
    }

    return (
        <div className='text-white  px-10'>
            <h1 className='text-center pb-20 text-6xl font-bold py-10 text-yellow-400'>Let's Talk</h1>

            <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                <div>
                    <h2 className='text-4xl text-yellow-400 font-bold mb-4'>Hellow Dear,</h2>
                    <h2 className='text-xl'>Feel free to get in touch with me. I am always open <br />  to discussing new projects, creative ideas or <br /> opportunities to be part of your visions.</h2>


                    
                    <h2 className='pt-10 text-2xl font-bold'>Address Point </h2>
                    <p>Dhaka, Bangladesh</p>

                    <h2 className='pt-3 text-2xl font-bold'>Mail Address</h2>
                    <p>mdriazulislaam@gmail.com</p>

                    <h2 className='pt-3 text-2xl font-bold'>Phone Number</h2>
                    <p>+8801631375174</p>
                </div>




                <div>
                        <h1 className='text-4xl font-bold text-yellow-400 mt-4 mb-3'>Send Message</h1>

                    <form onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered input-warning w-5/6  mb-5 text-black" />

                         <input type="text" name='email' placeholder="Enter Your Email" className="input input-bordered input-warning w-5/6 mb-5 text-black" />

                        <input type="text" name='subject' placeholder="Enter Your Subject" className="input input-bordered input-warning w-5/6  mb-5 text-black" /> <br />


                        <textarea className="textarea textarea-warning w-5/6 h-40 text-black" name='message' placeholder="Enter Your Message"></textarea> <br />


                        <button type='submit' className="btn btn-warning mt-3 mb-10 text-white">Submit <span className='pl-2'><BiSend size='20px'/></span></button>

                    </form>

                   

                </div>
            </div>
        </div>
    );
};

export default Contacts;