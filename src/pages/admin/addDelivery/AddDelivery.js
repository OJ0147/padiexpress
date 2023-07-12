import React,{useState} from 'react'
import './AddDelivery.css'
import { collection, addDoc, doc, setDoc } from "firebase/firestore"; 
import {db} from '../../../firebase/firebaseConfig'
import {toast} from 'react-toastify'
import Loader from '../../../components/loader/Loader'
import { Timestamp } from "firebase/firestore";
import {useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectDelivery } from '../../../redux/slice/deliverySlice';



const initialState={
  gender:"",
  receiverName:"",
  address:"",
  phoneNumber:"",
  email:"",
  trackingId:"",
  senderName:"",
  pickUp:"",
  currentLocation:"",
  deliveryDate:"",
  dispatcher:"",
  amount:"",
  deliveryStatus: "",
  paymentStatus: "",
  desc: "",
}

const packageStatus =[
  {id: 1, stat:'Recieved by Dispatch'},
  {id: 2, stat:'Scheduled for Delivery'},
  {id: 3, stat:'Out for Delivery'},
  {id: 4, stat:'Delivered'},
]


const AddDelivery = () => {
  const {id} = useParams()
  const deliver = useSelector(selectDelivery)
  const thisDelivery = deliver.find((deliv) => deliv.id === id);
  const[delivery, setDelivery] = useState(()=>{
    const newState = detectForm(id,
     {...initialState},
      thisDelivery
    )
   return newState
  });

  //*****how state was created initially before the edited state was created******

  // const[delivery, setDelivery] = useState({
  //   ...initialState
  // })

  
  const [isLoading, setIsLoading]=useState(false)

  const navigate = useNavigate()

  // used param id to detect the id and make the form, onsubmit func, h2, button and state dynamic
  function detectForm(id, f1, f2){
    if(id ==="ADD"){
      return f1;
    }
    return f2
  }
  
  const handleInputChange=(e)=>{
    const {name, value}= e.target
    setDelivery({
      ...delivery, [name]: value
    })
  }


  const submitDelivery =(e)=>{
    e.preventDefault();
    setIsLoading(true)
    try{
        const docRef = addDoc(collection(db, "deliveries"), {
          gender: delivery.gender,
          receiverName : delivery.receiverName,
          address: delivery.address,
          phoneNumber: delivery.phoneNumber,
          email: delivery.email,
          trackingId: delivery.trackingId,
          sender: delivery.senderName,
          pickUp: delivery.pickUp,
          currentLocation: delivery.currentLocation,
          deliveryDate: delivery.deliveryDate,
          dispatcher: delivery.dispatcher,
          amount: Number(delivery.amount),
          deliveryStatus:  delivery.deliveryStatus,
          paymentStatus:  delivery.paymentStatus,
          desc:  delivery.desc,
          createdAt: Timestamp.fromDate(new Date()),
          
      });
      setIsLoading(false)
      setDelivery({...initialState})
      toast.success('data upload completed')
      navigate('/admin/view-delivery')

    } catch(error){
      setIsLoading(false)
      toast.error(error.message)
    }

  }
  
  // to edit doc

  const editDelivery = (e)=>{
    e.preventDefault()
    setIsLoading(true)
    try{
        setDoc(doc(db, "deliveries", id), {
          gender:delivery.gender,
          receiverName : delivery.receiverName,
          address: delivery.address,
          phoneNumber: delivery.phoneNumber,
          email: delivery.email,
          trackingId: delivery.trackingId,
          sender: delivery.senderName,
          pickUp: delivery.pickUp,
          currentLocation: delivery.currentLocation,
          deliveryDate: delivery.deliveryDate,
          dispatcher: delivery.dispatcher,
          amount: Number(delivery.amount),
          deliveryStatus:  delivery.deliveryStatus,
          paymentStatus:  delivery.paymentStatus,
          desc:  delivery.desc,
          createdAt:thisDelivery.createdAt,
          editedAt:Timestamp.now().toDate(),
      });
      setIsLoading(false)
      toast.success('delivery edited successfully')
      navigate('/admin/view-delivery')

    }catch(error){
      setIsLoading(false)
      toast.error(error.message)
    }
  }

  
  return (
    <>
    {isLoading && <Loader/>}
    <div className='delivery-container'>

      {/* made our h2 heading dynamic base on the param id */}
      <h2>{detectForm(id, "Add New Delivery", "Edit Delivery")} </h2>
     
      <div className="delivery-form">
        <form onSubmit={detectForm(id, submitDelivery, editDelivery)} >

          <section className="field-container">
          <div className=" flexbasis-2">
            <label htmlFor="gender"> Gender : </label>
            <select name="gender" id="gender" value={delivery.gender} onChange={(e)=>handleInputChange(e)} required >
              <option value="" > -- select gender -- </option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
            </select>
            </div>

            <div className=" flexbasis-8">
              <label htmlFor="receiver">Reciever Name : </label>
              <input type="text" id='receiver' name='receiverName' value={delivery.receiverName} onChange={(e)=>handleInputChange(e)} required />
            </div>
          </section>

          <section className="field-container">
            <div className=" flexbasis-6">
              <label htmlFor="address">Reciever Address : </label>
              <input type="text" id='address' name='address' value={delivery.address} onChange={(e)=>handleInputChange(e)} required />
            </div>
          
            <div className=" flexbasis-4">
              <label htmlFor="phoneNumber">Reciever Phone : </label>
              <input type="number" id='phoneNumber' name='phoneNumber' value={delivery.phoneNumber} onChange={(e)=>handleInputChange(e)} required /> 
            </div>
          </section>

          <section className="field-container">
            <div className=" flexbasis-6">
              <label htmlFor="email">Reciever Email : </label>
              <input type="email" id='email' name='email' value={delivery.email} onChange={(e)=>handleInputChange(e)}  required/>
            </div>
          
            <div className=" flexbasis-4">
              <label htmlFor="trackingId">Tracking ID : </label>
              <input type="text" id='trackingId' name='trackingId' value={delivery.trackingId} onChange={(e)=>handleInputChange(e)}  required />
            </div>
          </section>

          <section className="field-container">
            <div className=" flexbasis-5">
              <label htmlFor="sender">Sender Name : </label>
              <input type="text" id='sender' name='senderName' value={delivery.senderName} onChange={(e)=>handleInputChange(e)} required />
            </div>
          
            <div className=" flexbasis-5">
              <label htmlFor="pickUp">PickUp Location : </label>
              <input type="text" id='pickUp' name='pickUp' value={delivery.pickUp} onChange={(e)=>handleInputChange(e)}  required />
            </div>
          </section>

          <section className="field-container">
            <div className=" flexbasis-5">
              <label htmlFor="current">Current Location : </label>
              <input type="text" id='current' name='currentLocation' value={delivery.currentLocation} onChange={(e)=>handleInputChange(e)} required/>
            </div>

            <div className=" flexbasis-5">
              <label htmlFor="deliveryDate"> Date for Delivery : </label>
              <input type="date" id='deliveryDate' name='deliveryDate' value={delivery.deliveryDate} onChange={(e)=>handleInputChange(e)}  required/>
            </div>
          </section>
    
          <section className="field-container">
            <div className=" flexbasis-5">
              <label htmlFor="dispatcher">Dispatcher : </label>
              <input type="text" id='dispatch' name='dispatcher' value={delivery.dispatcher} onChange={(e)=>handleInputChange(e)} required/>
            </div>

            <div className=" flexbasis-5">
              <label htmlFor="Amount"> Amount : </label>
              <input type="number" id='amount' name='amount' value={delivery.amount} onChange={(e)=>handleInputChange(e)}  required/>
            </div>
          </section>

          <section className="field-container">
            <div className=" flexbasis-5">
            <label htmlFor="status">Status : </label>
            <select name="deliveryStatus" id="status" value={delivery.deliveryStatus} onChange={(e)=>handleInputChange(e)} required>
              <option value="" >-- select delivery status --</option>
              {packageStatus.map((status)=>{
                return(
                  <option value={status.stat} key={status.id} > {status.stat} </option>
                )
              })}
            </select>
            </div>

            <div className=" flexbasis-5">
            <label htmlFor="payment"> Payment Status : </label>
            <select name="paymentStatus" id="payment" value={delivery.paymentStatus} onChange={(e)=>handleInputChange(e)} required >
              <option value=""  > -- select payment status -- </option>
              <option value="Paid">PAID</option>
              <option value="Pay on Delivery">Payment on Delivery</option>
            </select>
            </div>
          </section>


          <div>
            <label htmlFor="desc"> Package Description : </label>
            <textarea name="desc" id="desc" cols="30" rows="7" value={delivery.desc} onChange={(e)=>handleInputChange(e)} required></textarea>
          </div>
          
          <button type='submit' className='delivery-btn'>{detectForm(id, "Add Delivery", "Edit Delivery")} </button>

        </form>
      </div>
    </div>
    </>
  )
}

export default AddDelivery