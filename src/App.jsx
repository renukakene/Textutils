import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import About from './components/About'
let name = "Renuka";
function App() {
  const [count, setCount] = useState(0)

  return (
    
   <>
      <Navbar/>
      <div className="container my-4">
        {/* <Textform heading="Enter text here to analyze"/> */}
        <About/>
      </div>
      
   </>
    
  
  )
}

export default App
