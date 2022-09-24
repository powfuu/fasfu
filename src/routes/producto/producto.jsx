import { useEffect, useState } from "react"
import * as c from "./productoComponents"
import CustomizationCol from "../producto/editar-producto/col-customization"
import CustomizationMex from "../producto/editar-producto/mex-customization"
import CustomizationPeru from "../producto/editar-producto/peru-customization"
import CustomizationSpain from "../producto/editar-producto/spain-customization"
import motogato from "../../assets/motogato.webp"

const Product = (prop) =>{
    const [finalProductPrice, setFinalProductPrice]=useState(prop.currentProduct.price)
    const [additionalProducts, setAdditionalProducts]=useState([])
    const [duplicatorVal, setDuplicatorVal]=useState(1)
    const increaseDuplicatorVal = () =>{
        setDuplicatorVal(p=>p+1)
        setFinalProductPrice(p=>parseFloat(prop.currentProduct.price)*(duplicatorVal+1))
    }
    const decreaseDuplicatorVal = () =>{
        if(duplicatorVal >= 2){
            setDuplicatorVal(p=>p-1)
        setFinalProductPrice(p=>parseFloat(prop.currentProduct.price)*(duplicatorVal-1))
        }
    }

    useEffect(()=>{
        setFinalProductPrice(prop.currentProduct.price)
    },[prop])

    return(
        <>
            <c.ProductoContent scale={
                prop.isInProduct ?
                    1 
                    :
                    0
                }>
                <c.ProductView>
                    <c.ProductViewTopTitle>
                        <c.CloseProduct onClick={()=>{
                            prop.setIsInProduct(false)
                            setDuplicatorVal(1)
                        }}/>
                        <c.ProductName>{prop.currentProduct.name}</c.ProductName>
                        <c.AddProduct>Añadir por {prop.productSign.format(parseFloat(finalProductPrice))}</c.AddProduct>
                    </c.ProductViewTopTitle>
                    <c.ProductDivition>
                        <c.ProductLeft>
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
                                <c.SectionPriceTotalView>
                                <c.SectionPriceTotal>Total a Pagar</c.SectionPriceTotal>
                            <c.ProductPrice>
                                {prop.productSign.format(parseFloat(finalProductPrice))}
                            </c.ProductPrice>
                                </c.SectionPriceTotalView>
                        </c.LeftRelative>
                            <c.Motogato src={motogato}/>
                        </c.ProductLeft>
                        <c.ProductRight>
                            {
                                prop.customization == "spain" ?
                                    <CustomizationSpain productSign={prop.productSign} category={prop.currentProduct.type}/>
                                    : prop.customization == "mex" ? 
                                        <CustomizationMex productSign={prop.productSign} category={prop.currentProduct.type}/> : prop.customization == "peru" ?
                                            <CustomizationPeru setAdditionalProducts={setAdditionalProducts} setFinalProductPrice={setFinalProductPrice} productSign={prop.productSign} category={prop.currentProduct.type}/> : prop.customization == "col" ?
                                                <CustomizationCol productSign={prop.productSign} category={prop.currentProduct.type}/> : null
                            }
                        </c.ProductRight>
                    </c.ProductDivition>
                </c.ProductView>
            </c.ProductoContent>
        </>
    )
}
export default Product;
