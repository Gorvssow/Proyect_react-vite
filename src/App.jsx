
import './App.css'
import Button from "./Componets/Button.jsx";
import Navbar from "./Componets/navbar.jsx";
import Footer from "./Componets/footer.jsx";
import SliderBanner from "./Componets/SliderBanner.jsx";
import Cards from "./Componets/Cards.jsx";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {

  return (
      <div className="app-container">
          <Navbar />

        <div className="content-container">
            {/*<Button label={"Hola Todo en Subastas"}/>*/}
            {/*<Button disabled={true}/>*/}
            <h1>Slider de Banners</h1>
            <div className="slider-container">
                <SliderBanner />
            </div>

            <h1 className="cards-heading">Mis tarjetas</h1>
            <div className="cards-container">

                <Cards />
            </div>


        </div>



          <Footer/>

      </div>

  )

}

export default App
