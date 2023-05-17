import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { useState } from "react"
import { db } from "../../firebase/firebaseConfig"
import { toast } from "react-toastify"
import { useEffect } from "react"

const useFetchCollection =(collectionName)=>{
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    const getCollection = () =>{
        setIsLoading(true)
    
        try{
    
          const docRef = collection(db, collectionName);
          const q = query(docRef, orderBy("createdAt", "desc"));
    
          // in documentation snapshot is querySnapshot
          onSnapshot(q, (snapshot) => {
            console.log(snapshot.docs)
    
            const allData = snapshot.docs.map((doc)=>({
              id:doc.id,
              ...doc.data(),
              
            }))
            console.log(allData)
            setData(allData)
            setIsLoading(false)
          });
          
        }catch(error){
          setIsLoading(false)
          toast.error(error.message)
        }
      };

      useEffect(()=>{
        getCollection()
      }, []);
      
      return{data, isLoading}
}
export default useFetchCollection;