import { useEffect, useState, useRef } from "react"
import * as c from "./carroComponents"
import {ShoppingCartOutline} from "@styled-icons/evaicons-outline/ShoppingCartOutline"
import Empty from "../../assets/motogato.webp"
import Swal from 'sweetalert2'
const Carro = (prop) =>{
  const cartRef = useRef(null)
  const cartRef2 = useRef(null)
    const carBody = useRef(null)
    const topviewref = useRef(null)
var prevScrollpos = window.pageYOffset;
    const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', swal.stopTimer)
    toast.addEventListener('mouseleave', swal.resumeTimer)
  }
})
    const Toast2 = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: true,
        showCancelButton:true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', swal.stopTimer)
    toast.addEventListener('mouseleave', swal.resumeTimer)
  }
})
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
            <c.CarContentBody>
            <c.TopInitialView ref={topviewref}>
            <c.CloseProduct onClick={()=>prop.setIsInCar(false)}/>
            <c.TopViewTitle>Carro ({prop.car.length})</c.TopViewTitle>
            </c.TopInitialView>
            <c.CarLeftView onScroll={(p)=>{
                if(p.currentTarget.scrollTop >= 40){
                    topviewref.current.style.boxShadow="rgba(100, 100, 111, 0.05) 0px 7px 29px 0px"
                }else if(p.currentTarget.scrollTop<=39){
                    topviewref.current.style.boxShadow="initial"
                }
                }}>
                <c.CarLeftContent>
                {
                    prop.car.length >= 1 ?
                        <> 
                        <c.TitleTableView>  
                    <c.TitleTableProduct>Producto</c.TitleTableProduct>
                    <c.TitleTablePrice>Precio</c.TitleTablePrice>
                </c.TitleTableView>
                {
                prop.car.map((data,index)=>{
                    return(
                        <c.CarProduct limb={
                            prop.car.length == index+1 ? 200 : null
                            } bb={
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
                                    <c.CarProductRemove onClick={()=>{
Swal.fire({
    title: '<span style="font-weight:500; font-size:24px; color:black;">¿Deseas remover este pedido?</span>',
    text: `${data.productName} | ${prop.productSign.format(parseFloat(data.totalPrice))}`,
  icon: 'question',
    iconColor:"rgb(110,110,110)",
  showCancelButton: true,
  confirmButtonColor: 'black',
  cancelButtonColorText:"black",
  cancelButtonText: 'Cancelar',
  cancelButtonColor: 'rgb(230,230,230)',
  confirmButtonText: 'Remover pedido',
  showClass: {
    popup: 'animate__animated animate__fadeInUp animate__faster'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp animate__faster'
  }
})
Toast2.fire({
    title: '<span style="font-weight:500; font-size:22px; color:black;">¿Remover pedido?</span>',
    text: `${data.productName} | ${prop.productSign.format(parseFloat(data.totalPrice))}`,
  icon: 'question',
    iconColor:"rgb(110,110,110)",
  showCancelButton: true,
  confirmButtonColor: 'black',
  cancelButtonText: 'Cancelar',
  cancelButtonColor: '#f75461',
  confirmButtonText: 'Remover',
  showClass: {
    popup: 'animate__animated animate__fadeInUp animate__faster'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutDown animate__faster'
  }
}).then((result)=>{
  if (result.isConfirmed) {
Toast.fire({
  icon: 'success',
    title: `<span style="font-weight:300">Se ha eliminado tu pedido del carro</span>`,
  iconColor:'#73e415',
  showClass: {
    popup: 'animate__animated animate__fadeInDown animate__faster'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp animate__faster'
  }
})
                            prop.setTotalPrice(old=>old-parseFloat(data.totalPrice))
                                        prop.setCar(old=>old.filter((fi, i)=> i != index))
                                        prop.setCarAddons(old=>old.filter((fi, i)=> i != index))
    if(prop.car.length == 1){
        localStorage.setItem("@fasfu: car",[])
        localStorage.setItem("@fasfu: addons",[])
    }
  }
})
                                    }} src={require("../../assets/remove-shopping-cart.png")}/>
                                </c.CarProductRightContent>
                            </c.CarProductContent>
                        </c.CarProduct>
                    )
            })
            }
                        </>: 
                            <c.EmptyView>
                                <c.EmptyImg src={Empty}/>
                                <c.EmptyText>No se ha añadido ningún producto al carro.</c.EmptyText>
                        </c.EmptyView>
                }
                    </c.CarLeftContent>
            </c.CarLeftView>
            <c.CarRightView>
                {
                    prop.car.length >= 1 ?
                        <c.CarRightContent>
                            <c.CheckoutTitle>Factura de Productos</c.CheckoutTitle>
                            <c.CheckoutView>
                            {prop.car.map((data)=>{
                                return(
                                    <>
                                        <c.CheckoutItem style={{color:"black",fontWeight:"600", borderBottom:"none", paddingBottom:"4px"}}>{data.productName} <c.CheckoutPrice>{data.totalPrice != null ? prop.productSign.format(parseFloat(data.totalPrice)) : null}</c.CheckoutPrice></c.CheckoutItem>
                    { prop.carAddons.filter((itm)=>itm.id == data.id && itm.additionPrice != null).map((ap)=>{ 
                                            return(
                                                <c.CheckoutItem>{ap.additionName} <c.CheckoutPrice>{ap.additionPrice != null ? prop.productSign.format(parseFloat(ap.additionPrice)) : null}</c.CheckoutPrice></c.CheckoutItem>
                                            )
                    })
                    }
                                    </>
                                )
                            })}
                            </c.CheckoutView>
                            <c.CarRightContentTitle> 
                                 Subtotal ({prop.car.length} Productos)
                            </c.CarRightContentTitle>
                            <c.CarRightContentPrice>
                                {prop.productSign.format(parseFloat(prop.totalPrice))}
                            </c.CarRightContentPrice>
                        </c.CarRightContent>
                        : 
                        <c.CarRightContent>
                            <c.CarRightContentTitle> 
                                 Subtotal (0 Productos)
                            </c.CarRightContentTitle>
                            <c.CarRightContentPrice>
                                 {prop.productSign.format(parseFloat("0"))}
                            </c.CarRightContentPrice>
                        </c.CarRightContent>
                }
                <c.RealizarPedido onClick={()=>{
                    Swal.fire(
                        {
                            icon:"info",
                            iconColor:"rgb(95,95,95)",
                            title:"No Disponible",
                            text:"Esta plataforma es un proyecto realizado para el restaurante virtual Fasfú Burgers por Everit Jhon (email: everitjhon@gmail.com), Este proyecto fue con fines de mejorar & modernizar la experiencia de los clientes a la hora de realizar un pedido.",
                            confirmButtonText:"Entendido",
                            confirmButtonColor:"black"
                        }
                    )
                    }}>  
                    Realizar Pedido
                </c.RealizarPedido>
            </c.CarRightView>
            </c.CarContentBody>
        </c.CarContent>
    </>
)
} 
export default Carro;
