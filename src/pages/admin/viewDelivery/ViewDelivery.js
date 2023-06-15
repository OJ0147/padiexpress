import { useEffect} from 'react'
import './ViewDelivery.css'
import {toast} from 'react-toastify';
import {db} from '../../../firebase/firebaseConfig';
import {  deleteDoc, doc} from "firebase/firestore"; 
import Loader from '../../../components/loader/Loader' 
import {Link} from 'react-router-dom'
import {BiEdit} from 'react-icons/bi'
import {TbTrashX} from 'react-icons/tb'
import Notiflix from 'notiflix';
import { useDispatch } from 'react-redux';
import { STORE_DELIVERY } from '../../../redux/slice/deliverySlice';
import { useSelector } from 'react-redux';
import { selectDelivery } from '../../../redux/slice/deliverySlice';
import useFetchCollection from '../../../components/customHooks/useFetchCollection';


const ViewDelivery = () => {
  // const [deliveries, setDeliveries] = useState([])
  // const [isLoading, setIsLoading] = useState(false)
  
  const { data, isLoading } = useFetchCollection("deliveries")
  const deliveries = useSelector(selectDelivery)
  console.log(deliveries)
  
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(
      STORE_DELIVERY({
        deliveries: data,
      })
    )
      
  }, [dispatch, data])
    
    
    // this useEffect fires the getDelivery function ones when the page loads
    // useEffect(() => {
    //   getDelivery()
    // }, []);

    // this function fetches the deliveries from the db
    // const getDelivery = () =>{
  //   setIsLoading(true)

  //   try{
  //     const deliveriesRef = collection(db, "deliveries");
  //     const q = query(deliveriesRef, orderBy("createdAt", "desc"));

  //     // in documentation snapshot is querySnapshot
  //     onSnapshot(q, (snapshot) => {
  //       console.log(snapshot.docs)

  //       const allDeliveries = snapshot.docs.map((doc)=>({
  //         id:doc.id,
  //         ...doc.data(),
          
  //       }))
  //       console.log(allDeliveries)
  //       setDeliveries(allDeliveries)

  //       //to store all deliveries to redux store
  //       dispatch(
  //         STORE_DELIVERY({
  //           deliveries : allDeliveries,
  //         })
  //       )
  //     });
      
  //     setIsLoading(false)

  //   }catch(error){
  //     setIsLoading(false)
  //     toast.error(error.message)
  //   }
  // }

// confirm delete function

const confirmDelete = (id) =>{
  Notiflix.Confirm.show(
    'Delete Delivery',
    'Are you sure?',
    'Confirm',
    'Cancel',
    function okCb() {
      deleteDelivery(id)
    },
    function cancelCb() {
      console.log('action canceled')
    },
    {
      width: '320px',
      borderRadius: '5px',
      titleColor: '#fa8080',
      cssAnimationStyle: 'zoom',
      okButtonBackground: '#fa8080',
      cancelButtonBackground: '#33edd',
    },
  );
  
}

// delete delivery function

  const deleteDelivery =(id)=>{
    try{
      deleteDoc(doc(db, "deliveries", id));
      toast.success('delivery deleted successfully')
    }catch(error){
      toast.error(error.message)
    }
  }
  


  return (
    <>
    {isLoading && <Loader/>}
    <main className="view">

      <section className="view__title">
        <h2>All Deliveries</h2>
      </section>

      <section className='table'>
      {deliveries.length === 0? 
      (
        <p>No Delivery Available</p>
      ): 
      (
        <table>
        <thead>
          <tr>
            <th> S/n </th>
            <th> Tracking ID </th>
            <th> Receiver Name </th>
            <th> Address </th>
            <th> Phone </th>
            <th> Dispatcher </th>
            <th> Payment Status </th>
            <th> Delivery Status </th>
            <th> Actions </th>
          </tr>
        </thead>
        <tbody>

          {deliveries.map((delivery, index)=>{
            const {id, trackingId, receiverName, gender, address, phoneNumber, dispatcher, paymentStatus, deliveryStatus} = delivery

            const deliveryStat =()=>{
              if(deliveryStatus ==='Delivered'){
                return(
                  <span className=' delivery__stat delivered'>Delivered</span>
                )
              }else if(deliveryStatus==='Out for Delivery'){
                return(
                  <span className='delivery__stat out'> Out</span>
                )
              }else{
                return(
                  <span className='delivery__stat scheduled'> Scheduled</span>
                )
              }
            }

            return(
              <tr key={id}>
                <td> {index + 1 } </td>
                <td>{trackingId} </td>
                <td> {gender} {receiverName} </td>
                <td>{address}</td>
                <td>{phoneNumber} </td>
                <td>{dispatcher} </td>
                <td className='payment-status'>
                  {paymentStatus === "Paid"? (<span className='paid'>Paid</span>):(<span className='ondelivery'>C.O.D</span>)}
                </td>
                <td>{deliveryStat(deliveryStatus)}</td>
             
                <td> 
                  <span>
                    <Link to ={`/admin/add-delivery/${id}`} className='edit'>
                      <BiEdit/>
                    </Link>
                  </span>

                  <span>
                    <TbTrashX onClick={() => confirmDelete(id)}/>                   
                  </span>
                </td>

                </tr>
              )
          })}
        </tbody>
        
      </table>

      )}
    </section>  
            
    </main>
    </>
  )
}



export default ViewDelivery