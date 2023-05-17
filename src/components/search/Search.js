import { doc, getDoc } from 'firebase/firestore';
import './Search.css'
import { db } from '../../firebase/firebaseConfig';

const Search =({value, onChange})=>{
    // const [trackPackage, setTrackPackage] = ([])

    const trackDelivery =(e)=>{
        e.preventDefault();
        const docRef = doc(db, "deliveries", "trackingId");
        const docSnap = getDoc(docRef);
        

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
    }
    console.log(value)
    return(
        <>
            <form className='search-form' onSubmit={trackDelivery} >
                <div className='track-field'>
                    <input type='text' placeholder="Tracking No." value={value} onChange={onChange} />
                </div>
                <button className='btn' type='submit'>Track your package</button>
            </form>
        </>
    );
}
export default Search;