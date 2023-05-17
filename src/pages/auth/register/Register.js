import React, { useState } from 'react'
import '../Auth.css'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { MdAlternateEmail } from 'react-icons/md'
import { GiPadlock, GiPadlockOpen } from 'react-icons/gi'
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import {auth} from '../../../firebase/firebaseConfig'
import { toast } from 'react-toastify'
import Loader from '../../../components/loader/Loader'

const Register = () => {
  
  // state for toggling visibility of password
  const[showPassword, setShowPassword]=useState(false)
  const[showConfirmPassword, setShowConfirmPassword]=useState(false)

  // state for input fields
  const[fullName, setFullName]=useState('')
  const[email, setEmail]=useState('')
  const[password, setPassword]=useState('')
  const[confirmPassword, setConfirmPassword]=useState('')

  // navigate
  const navigate = useNavigate()

  // loader state
  const[isLoading, setIsLoading]=useState(false);
  
// function to submit form

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(password !== confirmPassword){
      toast.error('passwords do not match')
    } 

    setIsLoading(true)

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
    
      setIsLoading(false)
      toast.success("Account created Successfully")
      navigate('/Login')

    })
    .catch((error) => {
    //  const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorMessage)
      setIsLoading(false)
  });
}



  // function for toggling password visibility
  const handleShowPassword=()=>{
    setShowPassword(!showPassword)
  }
  const handleShowConfirmPassword=()=>{
    setShowConfirmPassword(!showConfirmPassword)
  }

  const provider = new GoogleAuthProvider();
  const handleGoogleSignUp = () =>{

    signInWithPopup(auth, provider)
    .then((result) => {
      // const user = result.user;
      toast.success(result.message)
      navigate('/')
    }).catch((error) => {
      toast.error(error.message)
   
    });
  }


  return (
    <>
    {isLoading && <Loader/>}
    <div>
      <div className="auth-container">
      <div className="auth-wrapper reg-wrapper">
        <div className="auth-bg reg-image">
            <h2>Welcome</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="auth-form">
          <h2>Create Account</h2>
          <small>Already have an Account? <Link to='/Login'>Sign In</Link></small>
            <form onSubmit={handleSubmit} className="auth-log">

              <div className="input-wrap">
                <input type="text" name="name" placeholder='FullName' value={fullName} onChange={(e)=>setFullName(e.target.value)} required />
                <span></span>
              </div>
              <div className="input-wrap">
                <input type="email" name="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
                <span><MdAlternateEmail/></span>
              </div>
    

              <div className='input-wrap'>
                <input type={showPassword? 'text':'password'} name="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                <span onClick={handleShowPassword}>{showPassword?<GiPadlockOpen/>:<GiPadlock/>} </span>
              </div>

              <div className='input-wrap'>
                <input type={showConfirmPassword? 'text':'password'} name="comfirmPassword" placeholder='Confirm Password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required/>
                <span onClick={handleShowConfirmPassword}>{showConfirmPassword? <GiPadlockOpen/>:<GiPadlock/>} </span>
              </div>

                <button className="auth-btn" type="submit">Sign Up</button>


                <button className='google-btn' onClick={handleGoogleSignUp}> <FcGoogle size={25}/> Sign Up with Google</button>
            </form>
        </div>
      </div>

    </div>
    </div>
    </>
  )
}

export default Register