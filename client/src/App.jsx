import Home from "./components/Home"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router,
            
        }
 from 'react-router-dom'
const App = () => {
  return (
      <>
        <Navbar/>
        <Home/>
      </>
  )
}

export default App