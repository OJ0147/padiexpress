import React from 'react'
import './Footer.css'
import logo from '../../assets/footer-logo.png'

const Footer = () => {
    const date= new Date();
    const year = date.getFullYear()
  return (
    <footer>
        <div className="footer-container">

        <div className='footer-nav'>
            <div className='footer-logo'> <img src={logo} alt="logo" /></div>
            <ul>
                <li>Services</li>
                <li>About</li>
                <li>Track</li>
            </ul>
        </div>
        <hr/>
        <div className='footer-wrapper'>
            <small>&copy; {year} PadiExpress. </small> 
            <ul>
                <li>Privacy policy</li>
                <li> Haulier & Carrier Terms</li>
                <li>Shipper & Client Terms</li>
            </ul>
        </div>
        </div>
    </footer>
  )
}

export default Footer