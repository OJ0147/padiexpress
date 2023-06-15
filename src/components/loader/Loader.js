import React from 'react'
import loader from '../../assets/loaderr.gif'
import ReactDOM from 'react-dom'
import './Loader.css'


const Loader = () => {
  return ReactDOM.createPortal (
    <div className='loader-wrapper'>
        <div className="loader">
            <img src={loader} alt="loading" />
        </div>
    </div>,
    document.getElementById('loader')
  )
}

export default Loader