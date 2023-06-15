
import './Header.css'
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';

const Header =()=>{

    return(
        <div className='header'>
            <Navbar/>
         
            <div className='content'>
                <h1>The Fastest &<br/>Safest Delivery</h1>

                <p >We treat your package as top priority, Providing the 
                    fastest, safest and cheapest Logistic solutions Worldwide.
                </p>
                <div className='track-link'>
                    <p> Track your package</p>
                    <Link to='/track'>Track &rarr;</Link>
                </div>

            </div>

        </div>
    );
}
export default Header;