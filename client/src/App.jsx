import Home from "./components/Home"
import Navbar from "./components/Navbar";
import SaleBanner from "./components/SaleBanner";
import Varieties from "./components/Varieties";
const App = () => {
  return (
      <>
        <Navbar/>
        <Home/>
        <SaleBanner/>
        {/* <Varieties /> */}
      </>
  )
}

export default App