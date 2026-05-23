import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { About, Contact, Experience, Hero, Navbar, Skills, Works, StarsCanvas } from './components'


const App = () => {
  return (
    <BrowserRouter>
        <div className="relative z-0 bg-primary">
            <StarsCanvas />
            <div className="relative z-10 bg-primary bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
            </div>
            <div className="relative z-10">
                <About /> 
                <Experience />
                <Skills />
                <Works />
                {/* <Feedbacks /> */}
                <Contact />
            </div>
            <ToastContainer position="bottom-right" theme="dark" />
        </div>
    </BrowserRouter>
  )
}

export default App
