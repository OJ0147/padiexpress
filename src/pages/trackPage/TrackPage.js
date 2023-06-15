import { useState } from "react";
import useFetchCollection from "../../components/customHooks/useFetchCollection";
import './TrackPage.css'
import {BiPackage } from "react-icons/bi";
import {BsFillTruckFrontFill} from "react-icons/bs";

 const TrackPage=()=>{
    const [search, setSearch] = useState('');
    const [trackPackage, setTrackPackage] = useState([])

    const {data} = useFetchCollection("deliveries")


    const trackDelivery = (e)=>{
        e.preventDefault();
        const trackedPackage = data.filter(item =>{

            return item.trackingId === search;

        } );
        setTrackPackage(trackedPackage)
        console.log(trackedPackage)
        console.log("you submitted")
        
    }

 

    const shortenText =(text, n)=>{
        if(text.length > n){
            const shortenedText = text.substr(0, n).concat("...");
            return shortenedText
        }
        return text
    }
    return(
        <>
        <main className="track-container">
        <div className="form-wrap">
            <form className='search-form' onSubmit={trackDelivery} >
                <div className='track-field'>
                    <input type='text' placeholder="Enter Tracking Number" value={search} onChange={(e)=>setSearch(e.target.value)} />
                    <span><BiPackage size={30} color="#815303"/></span> 
                </div>
                <button className='btn' type='submit'>Track your package</button>
            </form>
        </div>
        <div className="package-container">
            <h2>Tracking details</h2>
            <div>
            
                {trackPackage.map((pack)=>{
                    const{trackingId, deliveryDate, id, pickUp, receiverName, paymentStatus, currentLocation, deliveryStatus, desc, amount,address
                    }=pack
                    return(
                        <section className="tracking-detail" key={id}>
                            <div className="tracking-desc">
                                <span className="truck-icon"> <BsFillTruckFrontFill/> </span>
                                <div>
                                    <p>{desc} </p>
                                    <small>{trackingId}</small>
                                </div>
                            </div>
                            <div className="reciever-info">
                                <div className="address-container">
                                    <div>
                                        <small>From</small>
                                        <p>{shortenText(pickUp, 18)} </p>
                                    </div>
                                    <div>
                                        <small>To</small>
                                        <p>{shortenText(address, 18)} </p>
                                    </div>
                                    <div>
                                        <small>Status</small>
                                        <p>{deliveryStatus} </p>
                                    </div>
                                </div>
                                <div className="address-container">
                                    <div>
                                        <small>Reciever</small>
                                        <p>{receiverName} </p>
                                    </div>
                                    <div>
                                        <small>Price</small>
                                        <p>{amount} </p>
                                    </div>
                                    <div>
                                        <small>Payment Status</small>
                                        <p>{paymentStatus} </p>
                                    </div>
                                </div>
                                <div className="location-container">
                                    <section>
                                        <div className="current">
                                            <div className="ripple"></div>
                                            <p><small> {deliveryDate} </small>&nbsp;  {currentLocation} </p>
                                        </div>
                                        <div></div>
                                        <div className="disable-pickup">
                                            <div className="pickup-location"></div>
                                            <p>  {pickUp} </p>
                                        </div>

                                    </section>

                                </div>

                            </div>
                        </section>
                    )
                })}
            </div>
            
        </div>
        </main>
        </>
    );
 }

 export default TrackPage;