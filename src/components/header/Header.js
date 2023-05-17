
import './Header.css'
import Navbar from '../navbar/Navbar';
import Search from '../search/Search';
import { useState } from 'react';
import { useEffect } from 'react';





const Header =()=>{
    const [search, setSearch] = useState('');



    // useEffect(()=>{
    //     console.log(search)
    // },[search])

    return(
        <div className='header'>
            <Navbar/>
         
            <div className='content'>
                <h1>The Fastest &<br/>Safest Delivery</h1>

                <p >We treat your package as top priority, Providing the 
                    fastest, safest and cheapest Logistic solutions Worldwide.
                </p>
                <div className='form-wrapper'>
                    <p>Enter your tracking Number</p>
                    <Search value={search} onChange={(e)=>setSearch(e.target.value)} />
                </div>

            </div>

        </div>
    );
}
export default Header;