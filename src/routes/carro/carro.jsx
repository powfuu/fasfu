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
        <c.CarLength style={{
            opacity:prop.car.length >= 1 ? "1" : "0"
        }} onClick={()=>{
            carBody.current.scrollTo(0,0)
            prop.setIsInCar(true)}} ref={cartRef2}>{prop.car.length}</c.CarLength>
        <c.CarContent ref={carBody} mgl={
            prop.isInCar ? 0 : 100 
            }>
            <c.CarLeftView>
                {
                prop.car.map((data,index)=>{
                    return(
                        <c.CarProduct bb={
                            prop.car.length == index+1 ? "1px solid rgb(215,215,215)" : null
                            }>
                            <c.CarProductContent>
                                <c.CarProductImg src={require(`../../assets/products/${prop.countrySelectionState == "España" ? "spain" : "perucolmex"}/${data.pic}`)}/>
                                <c.CarProductRightContent>
                                    <c.CarProductName>{data.productName}</c.CarProductName>

                                    <c.CarProductAddonsView>
                        {
                            prop.carAddons.filter((itm)=>itm.id == data.id).map((ap)=>{
                                //FILTAR MAP Y AGREGAR PRODUCTNAME PARA Q SOLO SE MUESTREN EN ESTE ID 
                                return(
                                        <c.CarProductAddon>{ap.additionName}</c.CarProductAddon>
                                )
                            })
                            }
                                    </c.CarProductAddonsView>
                                    <c.CarProductPrice>{prop.productSign.format(parseFloat(data.totalPrice))}</c.CarProductPrice>
                                    <c.CarProductRemove src={require("../../assets/remove-shopping-cart.png")}/>
                                </c.CarProductRightContent>
                            </c.CarProductContent>
                        </c.CarProduct>
                    )
            })
            }
            </c.CarLeftView>
            <c.CarRightView>

            </c.CarRightView>
        </c.CarContent>
    </>
)
} 
export default Carro;
