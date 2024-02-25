import { BrowserRouter } from "react-router-dom"
import Footer from "./Component/Footer/Footer"
import Hero from "./Component/HerroSection/About/Hero"
import Resume from "./Component/HerroSection/Resume/Resume"
import Navbar from "./Component/Navbar/Navbar"



function App() {


  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Resume />
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
