import { img } from './img'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Slider = () => {
  return (
    <>
        <div className="slider">
        <Carousel>
                <div>
                    <img src={img[0]} alt='img1' />
                </div>
                <div>
                    <img src={img[3]} alt='img2'/>
                </div>
                <div>
                    <img src={img[2]} alt='img3'/>
                </div>
                <div>
                    <img src={img[4]} alt='img4'/>
                </div>
                <div>
                    <img src={img[5]} alt='img5'/>
                </div>
            </Carousel>
        </div>
    </>
  )
}

export default Slider