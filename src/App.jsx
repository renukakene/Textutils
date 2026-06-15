import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import About from './components/About'
import Alert from './components/Alert'

let name = "Renuka";
function App() {
  const [count, setCount] = useState(0)

  const[mode, setMode] = useState('light'); //whether dark mode is enabled or 
  
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "warning");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Dark mode has been disabled", "success");
    }
  }

  return (
    
   <>
      <Navbar mode={mode}  togglemode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-4">
         <Textform  showAlert={showAlert} heading="Enter text here to analyze"/> 
       {/* <About/> */}
      </div>
      
   </>
    
  
  )
}

export default App
