import { Route,Routes } from "react-router-dom"
import Inicio from "./routes/inicio/inicio"
import { useState, useEffect } from "react"

function App() {
  const [countrySelectionState, setCountrySelectionState]:any=useState(localStorage.getItem("@fasfu: countrySelected"))
  return (
    <Routes>
      <Route path='/' element={<Inicio countrySelectionState={countrySelectionState} setCountrySelectionState={setCountrySelectionState}/>}/>
    </Routes> 
  );
}

export default App;
