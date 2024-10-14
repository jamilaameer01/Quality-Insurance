import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Services from './Components/Services'
import Companies from './Components/Companies'
import Quotes from './Components/Quotes'
import Cards from './Components/Cards'
import Slider from './Components/Slider'
import Support from './Components/Support'
import Mark from './Components/Mark'
import Footer from './Components/Footer'
import InfiniteSlider from './Components/InfiniteSlider'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <div className="pt-[40px]">
        <Hero />
      </div>

      <Services />
      <Companies />
      <Quotes />
      <div className="pt-[150px]">
        <Cards />
      </div>
      <div className="pt-[100px]">
        <Slider />
      </div>
      <div className="pt-[150px]">
        <Support />
      </div>
      <div className="pt-[150px]">
        <Mark />
      </div>
      <div className="pt-[150px]">
        <InfiniteSlider />
      
      </div>
      <div className="pt-[150px]">
        <Footer />
      </div>
    </div>
  );
}

export default App
