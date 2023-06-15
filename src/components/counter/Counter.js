import React from 'react'
import './Counter.css';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import counterData from './counterData';



const Counter = () => {


    
  return (
    <div className='counter-wrapper'>
        {counterData.map(({url,label,number,sign})=>{
             
            return(
                <div className='counter-content' key={number} >
                    <span className='counter-image'><img src={url} alt="icon" /></span>  
                    <VisibilitySensor>
                    {({ isVisible }) => (
                    <div className='counter'>     
          
                        {isVisible ? <CountUp end={number} /> : null}
                        <span>{sign}+</span>
                    </div>
                    )}
                    </VisibilitySensor>
                    <p>{label}</p>
                </div>
            )
        })}

    </div>
  )
}

export default Counter