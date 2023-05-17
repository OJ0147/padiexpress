import './App.css';
import Home from './pages/home/Home'
import {Route, Routes} from 'react-router-dom'
import TrackPage from './pages/trackPage/TrackPage';
import { ToastContainer } from 'react-toastify';
import Login from './pages/auth/login/Login';
import WithNavbar from './components/navbar/WithNavbar';
import WithoutNavbar from './components/navbar/WithoutNavbar';
import Footer from './components/footer/Footer';
import Register from './pages/auth/register/Register';
import Reset from './pages/auth/reset/Reset';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Admin from './pages/admin/Admin';
import AdminOnlyRoute from './components/adminRoute/AdminRoute';


function App() {
  return (
    <div className="App">
      <ToastContainer theme="dark" />


        <Routes>
          <Route element={<WithoutNavbar/>} >
            <Route path="/" element={<Home/>} />

            <Route path="/admin/*" element={
              <AdminOnlyRoute> 
                <Admin/> 
              </AdminOnlyRoute> 
            } />

          </Route>
          
          <Route element={<WithNavbar/>}>
            <Route path="/track" element={<TrackPage/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/Reset" element={<Reset/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />

          </Route>
        </Routes>
        <Footer/>
      
    </div>
  );
}

export default App;
