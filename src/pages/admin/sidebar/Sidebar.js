import React from 'react'
import { FaHome, FaPlusSquare, FaTable, FaUser } from 'react-icons/fa'
import './Sidebar.css'
import { NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUserName } from '../../../redux/slice/authSlice'

const Sidebar = ({isOpen}) => {
    const userName = useSelector(selectUserName)
  return (
    <div >

        <aside onClick={isOpen}>
            <div className='user-wrapper'>
                <span>
                    <FaUser size={40} color='#fff'/>
                </span>
                <p> {userName} </p>
            </div>
    
            <ul>
                <li>
                    <NavLink to='/admin/home'><span><FaHome size={20} color='#fca510'/></span>  <span>Home</span>  </NavLink>
                </li>
                <li>
                    <NavLink to='/admin/add-delivery/ADD'><span><FaPlusSquare size={20} color='#fca510'/></span> <span>Add Delivery</span>  </NavLink>
                </li>
                <li>
                    <NavLink to='/admin/view-delivery'><span><FaTable size={20} color='#fca510'/></span> <span>View Delivery</span>  </NavLink>
                </li>
                
            </ul>
        </aside>
    </div>
  )
}

export default Sidebar