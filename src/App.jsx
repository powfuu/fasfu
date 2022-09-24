import { Route,Routes } from "react-router-dom"
import Inicio from "./routes/inicio/inicio"
import { useState, useEffect } from "react"

function App() {
  const [countrySelectionState, setCountrySelectionState]:any=useState(localStorage.getItem("@fasfu: countrySelected"))
    const [isInCar, setIsInCar]=useState(false)
    const [isInProduct, setIsInProduct]=useState(false)
    const [currentProduct, setCurrentProduct]=useState([])
  return (
    <Routes>
      <Route path='/' element={<Inicio currentProduct={currentProduct} setCurrentProduct={setCurrentProduct} isInProduct={isInProduct} setIsInProduct={setIsInProduct} isInCar={isInCar} setIsInCar={setIsInCar} countrySelectionState={countrySelectionState} setCountrySelectionState={setCountrySelectionState}/>}/>
    </Routes> 
  );
}

export default App;
