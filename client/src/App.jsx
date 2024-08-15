import CarouselComponent from "./components/CarouselComponent";
import Home from "./components/Home"
import Navbar from "./components/Navbar";
import Varieties from "./components/Varieties";
const App = () => {
  return (
      <>
        <Navbar/>
        <Home/>
        <CarouselComponent/>
        <Varieties />
      </>
  )
}

export default App