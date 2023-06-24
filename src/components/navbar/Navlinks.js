import {Link, NavLink, useLocation, useNavigate} from 'react-router-dom'
import ShowOnLogin, { ShowOnLogOut } from '../hiddenLink/hiddenLink';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } from '../../redux/slice/authSlice';
import { useDispatch} from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';
import { AdminOnlyLink } from '../adminRoute/AdminRoute';


const Navlinks=()=>{

    const [displayName, setdisplayName] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutUser = ()=>{
        
        signOut(auth).then(() => {
            // Sign-out successful.
            toast.success("Logout successfully.");
            navigate("/");
        }).catch((error) => {
            // An error happened.
            toast.error(error.message)
        });
    }

    // manage user
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              
              if (user.displayName == null) {
                const u1 = user.email.slice(0, -10);
                const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
                setdisplayName(uName);
              } else {
                setdisplayName(user.displayName);
              } 
              
              dispatch(
                SET_ACTIVE_USER({
                    email:user.email,
                    userName: user.displayName ? user.displayName : displayName,
                    userID: user.uid,
                })
              );
            } else {
              // User is signed out
              setdisplayName("");
              dispatch(REMOVE_ACTIVE_USER());
            }
          });
    },[dispatch, displayName])


    // TO GET THE CURRENT URL PATH

    const location = useLocation()
    // console.log(location)

    return(
        <div className="navlinks">
            <ul>
                <li className='username-link'>
                <AdminOnlyLink>
                        <NavLink to='/admin/home'>
                            <button className='nav-btn admin-btn'>Admin</button>
                        </NavLink>
                </AdminOnlyLink>

                <ShowOnLogin>
                    <a href="#home" className='user-display' >
                        <FaUserCircle size={20}/>
                        <span>{displayName}</span>
                    </a>
                </ShowOnLogin>
                </li>
                <li><NavLink to='/about'>About us</NavLink></li>
                <li><NavLink to='/services'>Services</NavLink></li>
                <li>
                    {location.pathname ==='/'?
                    (
                        <a href='#contact'>Contact</a>
                    ):(
                        <Link to="/#contact">Contact</Link>
                
                    )}
                

                </li>
                <ShowOnLogOut>
                    <li className="login">
                        <NavLink to='/Login'>Login</NavLink>
                    </li>
                </ShowOnLogOut>

                <ShowOnLogin>
                <button onClick={logoutUser} className='btn'>Logout</button>
                </ShowOnLogin>
            </ul>
            

        </div>
    );
}

export default Navlinks