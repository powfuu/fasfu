import { useEffect, useState, useRef } from "react"
import * as c from "./productoComponents"
import CustomizationCol from "../producto/editar-producto/col-customization"
import CustomizationMex from "../producto/editar-producto/mex-customization"
import CustomizationPeru from "../producto/editar-producto/peru-customization"
import CustomizationSpain from "../producto/editar-producto/spain-customization"
import motogato from "../../assets/motogato.webp"
import logo from "../../assets/logos/logo0.webp"

const Product = (prop) =>{
    const [finalProductPrice, setFinalProductPrice]=useState(prop.currentProduct.price)
    const [duplicatorVal, setDuplicatorVal]=useState(1)
    const [isDefaultValues, setIsDefaultValues]=useState(false)
    const bodyRef = useRef(0)
    const increaseDuplicatorVal = () =>{
        setDuplicatorVal(p=>p+1)
        setFinalProductPrice(p=>parseFloat(p)+parseFloat(prop.currentProduct.price))
    }
    const decreaseDuplicatorVal = () =>{
        if(duplicatorVal >= 2){
            setDuplicatorVal(p=>p-1)
        setFinalProductPrice(p=>parseFloat(p)-parseFloat(prop.currentProduct.price))
        }
    }

    const goUp = () =>{
        bodyRef.current.scrollIntoView({
            block:"start", behavior:"smooth"
        })
    }

    const onHandleAddProduct = () =>{
        prop.setCar(old => [...old, {
            productName: prop.currentProduct.name,
            totalPrice: finalProductPrice,
            productQuantity: duplicatorVal,
            pic:prop.currentProduct.pic,
            id: prop.car.length+1
        }])
        prop.setCarAddons(old=>[...old,...prop.additionalProducts])
    }

    useEffect(()=>{
        setFinalProductPrice(prop.currentProduct.price)
    },[prop.currentProduct])
    useEffect(()=>{
        if(prop.car.length >= 1){
        localStorage.setItem("@fasfu: car", JSON.stringify(prop.car))
        }
    },[prop.car])
    useEffect(()=>{
        localStorage.setItem("@fasfu: addons", JSON.stringify(prop.carAddons))
    },[prop.carAddons])
    return(
        <>
            <c.ProductoContent scale={
                prop.isInProduct ?
                    1 
                    :
                    0
                }>
                <c.ProductView ref={bodyRef}>
                    <c.ProductViewTopTitle>
                        <c.CloseProduct onClick={()=>{
                            prop.setIsInProduct(false)
                            setDuplicatorVal(1)
                            setIsDefaultValues(p=>!p)
                        }}/>
                        <c.ProductName>{
                            prop.currentProduct.name ?
                            window.innerWidth <= 400 && prop.currentProduct.name.length>= 35 ?
                                prop.currentProduct.name.slice(0,25)+'...' : prop.currentProduct.name
                                : null
                        }</c.ProductName>
                        <c.AddProduct onClick={()=>onHandleAddProduct()}>Añadir por {prop.productSign.format(parseFloat(finalProductPrice))}</c.AddProduct>
                    </c.ProductViewTopTitle>
                    <c.ProductDivition >
                        <c.ProductLeft >
                            <c.LeftRelative>
                            {
                                prop.currentProduct.pic ? 
                            <c.ProductImg src={require(`../../assets/products/${prop.country == "España" ? "spain" : "perucolmex"}/${prop.currentProduct.pic}`)}/>
                            : null
                            }
                            <c.ProductDesc>
                                 {prop.currentProduct.desc}
                            </c.ProductDesc>
                            <c.DuplicatorText>
                                Cantidad de Productos a Ordenar
                            </c.DuplicatorText>
                            <c.Duplicator>
                                <c.DuplicatorMinus onClick={()=>decreaseDuplicatorVal()} style={{background:duplicatorVal == 1 ? "rgb(245,245,245)" : "#e5f2ff", color:duplicatorVal == 1 ? "rgb(140,140,140)" : "dodgerblue"}}>-</c.DuplicatorMinus>
                                <c.DuplicatorValue>{duplicatorVal}</c.DuplicatorValue>
                                <c.DuplicatorPlus onClick={()=>increaseDuplicatorVal()}>+</c.DuplicatorPlus>
                            </c.Duplicator>
                                <c.SectionPriceCatView>
                                <c.SectionPriceTotalView>
                                <c.SectionPriceTotal>Total a Pagar</c.SectionPriceTotal>
                            <c.ProductPrice>
                                {prop.productSign.format(parseFloat(finalProductPrice))}
                            </c.ProductPrice>
                                </c.SectionPriceTotalView>
                            <c.Motogato src={motogato}/>
                                </c.SectionPriceCatView>
                        </c.LeftRelative>

                        </c.ProductLeft>
                        <c.ProductRight>
                            {
                                prop.customization == "spain" ?
                                    <CustomizationSpain productSign={prop.productSign} category={prop.currentProduct.type}/>
                                    : prop.customization == "mex" ? 
                                        <CustomizationMex productSign={prop.productSign} category={prop.currentProduct.type}/> : prop.customization == "peru" ?
                                            <CustomizationPeru productId={prop.car.length+1} setAdditionalProducts={prop.setAdditionalProducts} additionalProducts={prop.additionalProducts} name={prop.currentProduct.name} isDefaultValues={isDefaultValues} setFinalProductPrice={setFinalProductPrice} productSign={prop.productSign} category={prop.currentProduct.type}/> : prop.customization == "col" ?
                                                <CustomizationCol productSign={prop.productSign} category={prop.currentProduct.type}/> : null
                            }
                            <c.GoUp onClick={()=>goUp()}/>
                            <c.LogoBottom src={logo}/>
                        </c.ProductRight>
                    </c.ProductDivition>

                </c.ProductView>
            </c.ProductoContent>
        </>
    )
}
export default Product;
