import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import About from './components/About'

let name = "Renuka";
function App() {
  const [count, setCount] = useState(0)

  const[mode, setMode] = useState('light'); //whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  return (
    
   <>
      <Navbar mode={mode}  togglemode={toggleMode} />
      <div className="container my-4">
         <Textform heading="Enter text here to analyze"/> 
       {/* <About/> */}
      </div>
      
   </>
    
  
  )
}

export default App
