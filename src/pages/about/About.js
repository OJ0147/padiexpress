import React from 'react'
import './About.css'
import trucks from '../../assets/three-trucks.jpg'
import Counter from '../../components/counter/Counter'
import cargo from '../../assets/cargo.mp4'
import warehouse from '../../assets/warehouse.mp4'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='aboutpage'>
        <div className="aboutpage__hero">
            <div className="aboutpage__header">
                <span>Who We Are</span>
                <h1>About Us</h1> 
                <p>We have been pioneering the industry in Europe for 10 years, and 
                delivering value products within given timeframe every single time.
                </p>
            </div>   
            <Counter/>
        </div>
        <section className="mid">
            <div className='mid__text'>
                <h1>Simplifying complex shipping challenges with innovative solutions</h1>
                <p>
                    Logistic companies are essential to the smooth functioning of global supply chains. 
                    They offer a range of services such as transportation, warehousing, inventory management,
                    and distribution to businesses across different industries. the role of logistics companies 
                    has become increasingly important in recent years due to the growth of e-commerce and global trade.
                </p>
            </div>
            <div className="mid__image">
                <img src={trucks} alt="" />
            </div>
        </section>
        <div className="mission">
            <div className="mission__image">
                <video src={warehouse} autoPlay loop muted></video>
            </div>
            <div className="mission__text">
                <span>Mission</span>
                <h1>Globally Connected by Large Network</h1>
                <p> at PadiExpress, our mission is to provide our clients with exceptional
                    transportation services that meet and exceed their expectations. 
                    We are to be the most reliable, efficient, and cost-effective transportation 
                    provider in the industry. 
                </p>

            </div>
        </div>
        
        <div className="mission history">

            <div className="mission__text">
                <span>History</span>
                <h1>Giving the best Logistic solutions from Birth</h1>
                <p> PadiExpress was founded in 2013 by a group of transportation professionals 
                    who saw an opportunity to provide a better level of service to businesses. 
                    Since our founding, wehave grown to become a leading transportation
                    provider, with a presence in over 30 countries around the world. 
                </p>
                <Link to="/#contact">Contact Us</Link>

            </div>
            <div className="mission__image">
                <video src={cargo} autoPlay loop muted></video>
            </div>
        </div>

    </div>
  )
}

export default About
