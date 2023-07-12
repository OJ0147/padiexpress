
import './Header.css'
import { Link } from 'react-router-dom';

const Header =()=>{

    return(
        <div className='header'>
  
            <div className='head-content'>
                <h1>The Fastest &<br/>Safest Delivery</h1>

                <p >We treat your package as top priority, Providing the 
                    fastest, safest and cheapest Logistic solutions Worldwide.
                </p>
                
                <Link to='/track-package' className='track-link'>Track &rarr;</Link>
                

            </div>

        </div>
    );
}
export default Header;