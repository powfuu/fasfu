import { useEffect, useState, useRef } from "react"
import * as c from "./carroComponents"
import {ShoppingCartOutline} from "@styled-icons/evaicons-outline/ShoppingCartOutline"
const Carro = (prop) =>{
  const cartRef = useRef(null)
  const cartRef2 = useRef(null)
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    cartRef.current.style.marginTop="-120px"
    cartRef2.current.style.marginTop="-120px"
  }else{
    cartRef.current.style.marginTop="7px"
    cartRef2.current.style.marginTop="7px"
  }
  prevScrollpos = currentScrollPos;
}
return(
    <>
        <ShoppingCartOutline onClick={()=>prop.setIsInCar(true)} ref={cartRef} id="initial-view-cart"/>
        <c.CarLength onClick={()=>prop.setIsInCar(true)} ref={cartRef2}>5</c.CarLength>
        <c.CarContent mgl={
            prop.isInCar ? 0 : 100 
            }>
            <h1 onClick={()=>prop.setIsInCar(false)}>Car</h1>
        </c.CarContent>
    </>
)
} 
export default Carro;
