import React from "react";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import './Home.css'
import {RiFlightTakeoffFill} from 'react-icons/ri'
import {GiCargoShip, GiTruck} from 'react-icons/gi'
import {FaArrowAltCircleUp, FaWarehouse} from 'react-icons/fa'
import copart from '../../assets/coparte.png'
import addidas from '../../assets/addidas1.png'
import autosavvy from '../../assets/autosavy.png'
import Counter from "../../components/counter/Counter";
import { Link } from "react-router-dom";
import ContactForm from "../../components/contactForm/ContactForm";
import Slider from "../../components/slider/Slider";




const Home =()=>{
    return(
        <div className="homepage">
            <header id='header'>

                <Header/>
            </header>
        
            <section>
                <h2 className="card__heading">We guarantee fast and safe transport for your package</h2>
                <div className="card-wrapper">
                    <div className="card-container" >
                        <Card title={'Air freight'} icon={<RiFlightTakeoffFill size={30} color='#055D30' />} desc={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, velit.'} />
                        <Card title={'Ware housing'} icon={<FaWarehouse size={30} color='#055D30'/>} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
                        <Card title={'Ocean freight'} icon={<GiCargoShip size={30} color='#055D30'/>} desc={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, eaque tempore.'} />
                        <Card title={'Trucking'} icon={<GiTruck size={30} color='#055D30'/>} desc={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, eaque tempore.'} />
                    </div>
                </div>
            </section>

            <div className="content-container">
                
            <div className="content-wrapper">
                <div className="image-container">
                  <Slider/>
                </div>
                <div className="text-container">
                    <h3>Reliable Logistic & Transport Solutions.</h3>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, consequatur? 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Nihil unde delectus enim natus assumenda eaque?
                    </p>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
                         iusto minima porro corrupti fugiat error! Lorem ipsum, 
                         dolor sit amet consectetur adipisicing elit. Vel, consequuntur.
                    </p>

                    <a href="#learn">LEARN MORE</a>
                    <hr/>
                    <h4 className="company-head">companies that trust our service</h4>

                    <div className="company">
                        <span>
                            <img src={addidas} alt="audi" />
                        </span>
                        <span>
                            <img src={copart} alt="" />
                        </span>
                        <span>
                            <img src={autosavvy} alt="" />
                        </span>
                    </div>
                </div>
            </div>
            </div>
            <div className="trucking">
                <div className="trucking-content">
                    
                    <h2> Haulage/ Trucking Solutions Made Easy</h2>

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere quas officiis 
                        ad voluptatem quidem iusto nemo ex tenetur reiciendis blanditiis.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aliquid suscipit,
                         fuga laborum, vitae ea delectus amet aliquam odit nihil officia! Incidunt dolore illo maiores.
                    </p>

                    <Link to='/about'>LEARN MORE</Link>
                    
                </div>
                <Counter/>
            </div>
            <section id="contact">
                <ContactForm/>
            </section>
            <a href="/#header" className="link-toTop"> <FaArrowAltCircleUp/> </a>
            
        </div>
    );
}

export default Home;
