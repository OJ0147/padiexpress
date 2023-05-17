import Navlinks from "./Navlinks";





const MobileNav=({isActive, closeMobileLink})=>{
    
    return(
        <nav className={isActive? 'mobilenav isActive' : 'mobilenav'} onClick={closeMobileLink}>
            <Navlinks/>
        </nav>
    );
}

export default MobileNav;