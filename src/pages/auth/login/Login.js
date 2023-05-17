import React from 'react'
import '../Auth.css'
import {FcGoogle} from 'react-icons/fc'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdAlternateEmail } from 'react-icons/md'
import { GiPadlock, GiPadlockOpen } from 'react-icons/gi'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase/firebaseConfig'
import { toast } from 'react-toastify'
import Loader from '../../../components/loader/Loader'
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  // state to toggle password visibility
  const[showPassword, setShowPassword]=useState(false)

  // state for loader
  const[isLoading, setIsLoading]=useState(false)

  // state for input
  const[email, setEmail]=useState('')
  const[password, setPassword]=useState('')

  //navigate from react router
  const navigate = useNavigate()
  
  // function to handle password visibility
  const handleShowPassword=()=>{
    setShowPassword(!showPassword)
  }

  const handleSignIn=(e)=>{
    e.preventDefault()

    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        setIsLoading(false)
        toast.success('log in successful')
        navigate('/')
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage)
        setIsLoading(false)
      });


  }
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () =>{

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
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-bg log-image">
            <h2>Welcome Back!</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="auth-form">
          <h2>Login</h2>
          <small>Don't have an account yet? <Link to='/register'>Register</Link></small>
            <form onSubmit={handleSignIn} className="auth-log">

            
              <div className="input-wrap">
                <input type="email" name="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
                <span><MdAlternateEmail/></span>
              </div>
    

              <div className='input-wrap'>
                <input type={showPassword? 'text':'password'} name="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                <span onClick={handleShowPassword}>{showPassword?<GiPadlockOpen/>:<GiPadlock/>} </span>
              </div>

              <div className='route'>
                <span><input type="checkbox" name="" id="" /> Remember Me</span>
                <Link to='/Reset' >Forgot Password?</Link> 
              </div>
              

                <button className="auth-btn" type="submit">Login</button>


                <button className='google-btn' onClick={signInWithGoogle}> <FcGoogle size={25}/> Sign in with Google</button>
            </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login