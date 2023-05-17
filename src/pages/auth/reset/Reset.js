import React from 'react'
import { useState } from 'react'
import { MdAlternateEmail } from 'react-icons/md'
import {TbSquareRoundedArrowLeftFilled} from 'react-icons/tb'
import { Link } from 'react-router-dom'
import Loader from '../../../components/loader/Loader'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../../firebase/firebaseConfig'
import { toast } from 'react-toastify'

const Reset = () => {
  const[email, setEmail]=useState('')
  const [isLoading, setIsLoading]= useState(false)

  const resetPassword=(e)=>{
    e.preventDefault();
    setIsLoading(true)

    sendPasswordResetEmail(auth, email)
    .then(() => {
      setIsLoading(false);
      toast.success("Check your email for a reset link");
    })
    .catch((error) => {
      setIsLoading(false);
      toast.error(error.message);
    });
    
  }
  return (
    <>
    {isLoading && <Loader/>}
    <div className="auth-container reset-container">
    <div className="auth-wrapper reset-wrapper">
      <div className="auth-bg reset-image">
          <h2>Hang in there</h2>
          <p>A link will be sent to the provided email. </p>
      </div>
      <div className="auth-form">
        <h2>Forgot your password?</h2>
        <small>Enter your email below to receive your email reset instructions</small>
          <form className="auth-log" onSubmit={resetPassword}>

            <div className="input-wrap">
              <input type="email" name="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
              <span> <MdAlternateEmail/></span>
            </div>

              <button className="auth-btn reset-btn" type="submit">Reset</button>

              <span className='back-log'>
                <TbSquareRoundedArrowLeftFilled className='icon'/>
                <Link to='/Login'> back to Login </Link>
              </span>
                

          </form>
      </div>
    </div>

  </div>
  </>
  )
}

export default Reset