import React, { useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import './Admin.css'
import Home from './home/Home'
import AddDelivery from './addDelivery/AddDelivery'
import ViewDelivery from './viewDelivery/ViewDelivery'
import { FaBars, FaHome } from 'react-icons/fa'
import Sidebar from './sidebar/Sidebar'
import logo from '../../assets/padilogistic.png'

const Admin = () => {
  const [isActive, setIsActive]=useState(false)

  const toggleSidebar =()=>{
    setIsActive(!isActive)
  }
   const closeMenu =()=>{
    setIsActive(false)
   }

  return (
    <div className='adminpage'>
        <nav className='admin-navbar'>
            <img src={logo} alt="logo" width={150} height={50} />
            <ul>
                <li>
                    <NavLink to ='/'> <FaHome size={25} color='#362a01'/> </NavLink>
                </li>
                <li className='sidebar-menu'>
                    <FaBars size={25} color='#000' onClick={toggleSidebar}/>
                </li>
            </ul>
        </nav>

        <div className="admin-content">
          <div className={isActive? "sidebar active" : "sidebar"}>
            <Sidebar isOpen={closeMenu} />
          </div>

          <main onClick={closeMenu}>
            <Routes>
              <Route path='home' element={<Home/>} />
              <Route path='add-delivery/:id' element={<AddDelivery/>} />
              <Route path='view-delivery' element={<ViewDelivery/>} />
            </Routes>
          </main>
        </div>
    </div>
  )
}

export default Admin