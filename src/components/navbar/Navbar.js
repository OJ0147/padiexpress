import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useState } from "react";
import './Navbar.css'
import {Link} from 'react-router-dom'



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
                <h2 className="logo">padiExpress</h2>
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