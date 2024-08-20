
import { ClassNames } from "@emotion/react";
import Home from "./components/Home"
import Navbar from "./components/Navbar";
import Varieties from "./components/Varieties";
const App = () => {
  return (
      <>
        <Navbar/>
        <Home/>
        <Varieties />
      </>
  )
}

export default App