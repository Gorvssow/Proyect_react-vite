import Slider from 'react-slick';
import BN_1 from '../img/Baners/BN_1.png'
import BN_2 from '../img/Baners/BN_2.jpg'
import BN_3 from '../img/Baners/BN_3.jpg'
const SliderBanner = () => {
    const settings= {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            <div>
                <img src={BN_1} alt="Banner 1" style={{ width: 1920, height: 520 }}/>
            </div>
            <div>
                <img src={BN_2} alt="Banner 2" style={{ width: 1920, height: 520 }}/>
            </div>
            <div>
                <img src={BN_3} alt="Banner 3" style={{ width: 1920, height: 520 }}/>
            </div>
        </Slider>
    );
}

export default  SliderBanner;