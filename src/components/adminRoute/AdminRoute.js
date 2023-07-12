import React from 'react'
import {useSelector} from 'react-redux'
import { selectEmail } from '../../redux/slice/authSlice'
import { Link } from 'react-router-dom';
import './AdminOnlyRoute.css'
import Navbar from '../navbar/Navbar';



const AdminOnlyRoute = ({children}) => {
    const userEmail = useSelector(selectEmail);
  
    if(userEmail === "silasojugo@gmail.com"){
        return children;
    }
    return(
        <div className='error-page'>
            <Navbar/>
            <h4>Permission denied!!!</h4>
            <p className='error-text'>you have to be an admin to have access this page</p>
            <Link to= '/'> 
                <button className='track-link btn-return'> &larr; Return Home</button>
            </Link>
        </div>
    )

}
export const AdminOnlyLink = ({children})=>{
    const userEmail = useSelector(selectEmail);
    if(userEmail === 'silasojugo@gmail.com'){
        return children;
    }
    return null;
}


export default AdminOnlyRoute