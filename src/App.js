import "./App.css";
import Hero from './components/Hero/Hero'
import Header from "./components/header/Header";
import Slider from "./components/Slider/Slider";
import Virtual from "./components/Virtual/Virtual";
import Products from "./components/Products/Products";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <Header/>
         <Hero/>  
         <Slider/>
         <Virtual/>
         <Products/>
         <Testimonials/>
          <Footer/>
      </div>

      
    </div>
  );
}

export default App;
