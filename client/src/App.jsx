import { useState } from "react";
import Home from "./components/Home"
import Navbar from "./components/Navbar";
import Varieties from "./components/Varieties";
import Loader from "./components/Loader";
import Services from "./components/Services";
const App = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() =>{
    setLoading(true);
  }, 3000)
  return (
      <>
      { loading ? (
        <>
        <Navbar/>
        <Home/>
        <Varieties />
        <Services/>
        
        </>
      ) : (
        <Loader/>
      )}
      </>
  )
}

export default App