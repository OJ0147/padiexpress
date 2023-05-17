import React from 'react';
import './Card.css'


const Card = ({icon, title, desc}) => {
    return (
        <div className='card'>
            <span>{icon} </span>
            <h2>{title} </h2>
            <p>{desc} </p>
        </div>
    );
};



export default Card;