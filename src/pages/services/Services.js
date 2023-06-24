import React from 'react'
import { Link } from 'react-router-dom'
import './Service.css'
import cargo from '../../assets/pexels-dmitry-limonov-8765776.jpg'
import trucks from '../../assets/three-trucks.jpg'
import basicService, { mainService } from './servicesData'


const Services = () => {
  return (
    <div className='service'>
      <div className="service__heading">
        <span>What we offer</span>
        <h1>Our Services</h1>
        <p>We have been pioneering the industry in Europe for 10 years, and 
            delivering value products within given timeframe every single time.
        </p>
      </div>
      <div className="grid four__cols">
        {mainService.map((main, index)=>{
          const{imageUrl, icon, title, desc}=main
          return(

            <div className="grid__item" key={index}>
              <img src={imageUrl} alt="background" />
              <div className="grid__card">
                <span>{icon}</span>
                <h3>{title} </h3>
                <p>{desc} </p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid three__cols">
        {basicService.map((basic, index)=>{
          const{imageUrl, icon, title, desc}=basic
            return(
              <div className="grid__item" key={index} >
                <img src={imageUrl} alt="background" />
                <div className="grid__card">
                  <span>{icon}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>

              </div>
            )
        })}
      </div>



      
      <div className="services">

        <div className="service__text">
          <span>Get in Touch</span>
          <h1>Proud to Deliver Excellence Every Time</h1>
          <p> PadiExpress was founded in 2013 by a group of transportation professionals 
              who saw an opportunity to provide a better level of service to businesses. 
              Since our founding, wehave grown to become a leading transportation
              provider, with a presence in over 30 countries around the world. 
          </p>
          <Link className="track-link" to="/#contact">Contact Us</Link>

        </div>
        <div className="service__image">
          <img src={cargo} alt='cargo' className='image1'/>
          <img src={trucks} alt='cargo' className='image2'/>
        </div>
      </div>
    </div>
  
  )
}

export default Services