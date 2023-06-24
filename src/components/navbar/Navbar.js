import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useState } from "react";
import './Navbar.css'
import {Link} from 'react-router-dom'
import logo from '../../assets/padilogistic.png'



const Navbar=()=>{
    const [isActive, setIsActive]= useState(false)

    const handleToggle=()=>{
        setIsActive(!isActive)
    }
    const mobileLink = ()=>{
        setIsActive(false)
    }

    return(
        <div className="container">

        <div className="navbar">
            <Link to='/'>
                <img src={logo} alt="logo" width={200} height={50} />
            </Link>
        
            <DesktopNav/>
            <span className={isActive? 'menu active-menu': 'menu'} onClick={handleToggle}>
                <span></span>
                <span></span>
                <span></span>
            </span>
            <MobileNav isActive={isActive} closeMobileLink={mobileLink} />
        </div>
        </div>
    );
}

export default Navbar;