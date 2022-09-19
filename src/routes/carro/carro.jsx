import { useEffect, useState, useRef } from "react"
import * as c from "./carroComponents"
const Carro = (prop) =>{
  const cartRef = useRef(null)
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    cartRef.current.style.marginTop="-120px"
  }else{
    cartRef.current.style.marginTop="7px"
  }
  prevScrollpos = currentScrollPos;
}
return(
    <>
        <i class="bx bx-cart" onClick={()=>prop.setIsInCar(true)} ref={cartRef} id="initial-view-cart"></i>
        <c.CarContent mgl={
            prop.isInCar ? 0 : 100 
            }>
            <h1 onClick={()=>prop.setIsInCar(false)}>Car</h1>
        </c.CarContent>
    </>
)
} 
export default Carro;
