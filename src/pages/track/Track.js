import React from 'react'
import './Track.css'
import { BiPackage } from 'react-icons/bi'
import { BsFillTruckFrontFill } from 'react-icons/bs'
import { useState } from 'react'
import { db } from '../../firebase/firebaseConfig'
import { toast } from 'react-toastify'
import { collection, getDocs } from 'firebase/firestore'
import Loader from '../../components/loader/Loader'

const Track = () => {

    const [search, setSearch]=useState("")
    const [trackPackage, setTrackPackage] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    const trackDelivery = async(e) =>{
        e.preventDefault()
        setIsLoading(true)
        
        try{
            const colRef = collection(db, 'deliveries')
            const snapshots = await getDocs(colRef)
            const docs = snapshots.docs.map((doc)=>{
                const data = doc.data()
                data.id = doc.id
                return data
            } )
            const trackedPackage = docs.filter(doc=>{
                return doc.trackingId === search;
            })
            setIsLoading(false)
            setTrackPackage(trackedPackage)
            console.log(trackPackage)
            
        } catch(error){
            setIsLoading(false)
            toast.warning(`no packages with tracking id ${search}`)
        }

    }
    const shortenText=(text, n)=>{
        if(text.length > n){
            var shortenedText = text.slice(0, n).concat("...");
            return shortenedText;
        }
        return text;
    }


  return (
    <>
    {isLoading && <Loader/>}
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
  )
}

export default Track