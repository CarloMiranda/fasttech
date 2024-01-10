import React, { useEffect } from "react"
import Aos from 'aos';
import 'aos/dist/aos.css'
import Index from './pages/Index.jsx'

function App() {

  useEffect(() => {
    Aos.init();
  }, []);

  return(

    < Index />
  )
}

export default App;
