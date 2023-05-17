
import './Slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../assets/deliveryguy.jpg'
import image2 from '../../assets/deliverygirl.jpg'
import image3 from '../../assets/pexels-pavel-danilyuk-6407535.jpg'
import image4 from '../../assets/pexels-rodnae-productions-7464703.jpg'
import image5 from '../../assets/pexels-dmitry-limonov-8765776.jpg'





const Slider = () => {
  
  return (
    <Carousel showArrows={true} autoPlay={true} interval={5000} infiniteLoop={true} showThumbs={false} showStatus={false} >
      
      <div className="slider">
        <img src={image1} alt="" />
      </div>
      <div className="slider">
        <img src={image2} alt="" />
      </div>
      <div className="slider">
        <img src={image3} alt="" />
      </div>
      <div className="slider">
        <img src={image4} alt="" />
      </div>
      <div className="slider">
        <img src={image5} alt="" />
      </div>
      
    </Carousel>    
  )
}

export default Slider