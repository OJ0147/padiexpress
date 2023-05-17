import React from 'react'
import './Footer.css'

const Footer = () => {
    const date= new Date();
    const year = date.getFullYear()
  return (
    <footer>
        <div className="footer-container">

        <div className='footer-nav'>
            <span>PadiExpress</span>
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