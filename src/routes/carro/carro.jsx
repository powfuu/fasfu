import { useEffect, useState, useRef } from "react"
import * as c from "./carroComponents"
import {ShoppingCartOutline} from "@styled-icons/evaicons-outline/ShoppingCartOutline"
const Carro = (prop) =>{
  const cartRef = useRef(null)
  const cartRef2 = useRef(null)
    const carBody = useRef(null)
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
        <ShoppingCartOutline onClick={()=>{
            carBody.current.scrollTo(0,0)
            prop.setIsInCar(true)}} ref={cartRef} id="initial-view-cart"/>
        {
            prop.car.length >= 1 ?
        <c.CarLength onClick={()=>{
            carBody.current.scrollTo(0,0)
            prop.setIsInCar(true)}} ref={cartRef2}>{prop.car.length}</c.CarLength>
            : null
        }
        <c.CarContent ref={carBody} mgl={
            prop.isInCar ? 0 : 100 
            }>
            {
                prop.car.map((data)=>{
                    return(
                        <>
                        <h1 onClick={()=>prop.setIsInCar(false)}>{data.productName}</h1>
                        <h2 onClick={()=>prop.setIsInCar(false)}>{data.totalPrice}</h2>
                        <h3 onClick={()=>prop.setIsInCar(false)}>{data.productQuantity}</h3>
                            <h4>{data.id}</h4>
                            <br/>
                        {
                            prop.carAddons.filter((itm)=>itm.id == data.id).map((ap)=>{
                                //FILTAR MAP Y AGREGAR PRODUCTNAME PARA Q SOLO SE MUESTREN EN ESTE ID 
                                return(
                                    <>
                                        <h5>{ap.additionName}</h5>
                                    </>
                                )
                            })
                            }
                        </>
                    )
            })
            }
        </c.CarContent>
    </>
)
} 
export default Carro;
