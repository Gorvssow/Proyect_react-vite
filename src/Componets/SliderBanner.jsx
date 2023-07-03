import Slider from 'react-slick';
import banner1 from '../img/banner_1.jpg'
import banner2 from '../img/banner_2.jpg'
import banner3 from '../img/banner_3.jpg'
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
                <img src={banner1} alt="Banner 1" style={{ width: '100%', height: 'auto' }}/>
            </div>
            <div>
                <img src={banner2} alt="Banner 2" style={{ width: '100%', height: 'auto' }}/>
            </div>
            <div>
                <img src={banner3} alt="Banner 3" style={{ width: '100%', height: 'auto' }}/>
            </div>
        </Slider>
    );
}

export default  SliderBanner;