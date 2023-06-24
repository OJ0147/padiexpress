import React,{ useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactForm.css'
import {MdEmail, MdPhoneCallback, MdPinDrop} from 'react-icons/md'
import {TfiInstagram, TfiTwitter} from 'react-icons/tfi'
import {AiOutlineFacebook} from 'react-icons/ai'
import { useLocation } from 'react-router-dom';





const ContactForm = () => {
    const [fullName, setFullName]=useState("")
    const [email, setEmail]=useState("")
    const [phoneNumber, setPhoneNumber]=useState("")
    const [message, setMessage]=useState("")

    const location = useLocation()
  

   const FormRef = useRef()


   const handleSubmit=(e)=>{
        e.preventDefault()

        // from emailjs
        emailjs.sendForm('service_itwtbda', 'template_akm9ars', FormRef.current, 'ql3fbY8DYQz35DtYm')
        .then((result) => {
            
            toast.success("Message sent successfully")
            console.log(result.text);


        }, (error) => {
            console.log(error.text);
            toast.error("an error occured")
        });
        setEmail("")
        setMessage("")
        setPhoneNumber("")
        setFullName("")
   }
  return (
    <div className={location.pathname==='/'? 'contact-wrapper': 'contact-wrapper contact__page'} >

    <div className='form-control'>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} ref={FormRef}>
            <label>Username</label>
            <input type="text" name='fullName' placeholder='John Doe' value={fullName} onChange={(e)=>setFullName(e.target.value) }required /> 

            <label>Email</label>
            <input type="email" name='email'placeholder='email@example.com' value={email} onChange={(e)=>setEmail(e.target.value)} required /> 
            
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='xxx-xxxx-xxx' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} required />

            <textarea name="message" cols="30" rows="10" placeholder='Your Message' value={message} onChange={(e)=>setMessage(e.target.value)} required ></textarea>

            <button className='form-btn' type="submit">Submit</button>
        </form>
        
    </div>

    <div className="contact-info">
        <h2>Contact Information</h2>

        <address>
            <div>
                <span>
                    <MdPinDrop/>
                </span>
                <small>
                    2100 Vista Way, Oceanside, CA 92054, United States
                </small>
            </div>
            <div>
                <span>
                    <MdPhoneCallback/>
                </span>
                <small>
                    <a href="tel:+1 760-966-0026">+1 760-966-0026</a>
                </small>
            </div>
            <div>
                <span>
                    <MdEmail/>
                </span>
                <small>
                    <a href="mailto:support@example.com">support@example.com</a>
                </small>
            </div>
        </address>

        <div className="socials">
            <a href="https://www.instagram.com"> <TfiInstagram/> </a>
            <a href="https://www.facebook.com"> <AiOutlineFacebook/> </a>
            <a href="https://www.twitter.com"> <TfiTwitter/> </a>
        </div>
    </div>
    </div>
  )
}

export default ContactForm