import { useEffect, useState } from "react"
import * as c from "./customization"
const CustomizationSpain = (prop) =>{
    return(
        <c.CustomizationContent>
            {
                prop.category == "BURGER" ?
                    <>
                        {prop.name === "Fasfú Fried Chicken" 
                            ?
                                <EditFChicken productId={prop.productId} setAdditionalProducts={prop.setAdditionalProducts}/>
                                : prop.name === "Fasfú Grilled Cheese" ? 
                                <EditGCheese productId={prop.productId} setAdditionalProducts={prop.setAdditionalProducts}/>
                                : null
                        }
            <CustomizeFasfu productId={prop.productId} setAdditionalProducts={prop.setAdditionalProducts} isDefaultValues={prop.isDefaultValues}/>
            <EditCondimentosAdicionales productId={prop.productId} isDefaultValues={prop.isDefaultValues} setAdditionalProducts={prop.setAdditionalProducts} setFinalProductPrice={prop.setFinalProductPrice} productSign={prop.productSign}/>
             <EditPapasAdicionales productId={prop.productId} isDefaultValues={prop.isDefaultValues} setAdditionalProducts={prop.setAdditionalProducts} setFinalProductPrice={prop.setFinalProductPrice} productSign={prop.productSign}/>
             <EditBebidaAdicional productId={prop.productId} setAdditionalProducts={prop.setAdditionalProducts} isDefaultValues={prop.isDefaultValues} setAdditionalProducts={prop.setAdditionalProducts} setFinalProductPrice={prop.setFinalProductPrice} productSign={prop.productSign}/>
             <EditPSAdicionales productId={prop.productId} setAdditionalProducts={prop.setAdditionalProducts} isDefaultValues={prop.isDefaultValues} setAdditionalProducts={prop.setAdditionalProducts} setFinalProductPrice={prop.setFinalProductPrice} productSign={prop.productSign}/>
            <EditServilletas additionalProducts={prop.additionalProducts} productId={prop.productId} setAdditionalProducts={prop.setAdditionalProducts} isDefaultValues={prop.isDefaultValues}/>
                    </>
                : null
            }
            {
                prop.category == "COMBO" ?
                    <>
                        {
                            prop.name === "COMBO FASFÚ" ? <EditBurger productId={prop.productId} isDefaultValues={prop.isDefaultValues} setAdditionalProducts={prop.setAdditionalProducts} setFinalProductPrice={prop.setFinalProductPrice} productSign={prop.productSign}/> : null
                        }
                        <EditPatatas productId={prop.productId} isDefaultValues={prop.isDefaultValues} setAdditionalProducts={prop.setAdditionalProducts} setFinalProductPrice={prop.setFinalProductPrice} productSign={prop.productSign}/>
            <EditBebida setFinalProductPrice={prop.setFinalProductPrice} additionalProducts={prop.additionalProducts} productId={prop.productId} setAdditionalProducts={prop.setAdditionalProducts} isDefaultValues={prop.isDefaultValues}/>
            <CustomizeFasfu productId={prop.productId} setAdditionalProducts={prop.setAdditionalProducts} isDefaultValues={prop.isDefaultValues}/>
            <EditCondimentosAdicionales productId={prop.productId} isDefaultValues={prop.isDefaultValues} setAdditionalProducts={prop.setAdditionalProducts} setFinalProductPrice={prop.setFinalProductPrice} productSign={prop.productSign}/>
             <EditPapasAdicionales productId={prop.productId} isDefaultValues={prop.isDefaultValues} setAdditionalProducts={prop.setAdditionalProducts} setFinalProductPrice={prop.setFinalProductPrice} productSign={prop.productSign}/>
             <EditBebidaAdicional productId={prop.productId} isDefaultValues={prop.isDefaultValues} setAdditionalProducts={prop.setAdditionalProducts} setFinalProductPrice={prop.setFinalProductPrice} productSign={prop.productSign}/>
             <EditPSAdicionales productId={prop.productId} isDefaultValues={prop.isDefaultValues} setAdditionalProducts={prop.setAdditionalProducts} setFinalProductPrice={prop.setFinalProductPrice} productSign={prop.productSign}/>
            <EditServilletas additionalProducts={prop.additionalProducts} productId={prop.productId} setAdditionalProducts={prop.setAdditionalProducts} isDefaultValues={prop.isDefaultValues}/>
                    </>
                    : null
            }
            {
                prop.category == "PATATAS" ?
                    <>
            <EditBebidaAdicional productId={prop.productId} isDefaultValues={prop.isDefaultValues} setAdditionalProducts={prop.setAdditionalProducts} setFinalProductPrice={prop.setFinalProductPrice} productSign={prop.productSign}/>
            <EditPSAdicionales productId={prop.productId} isDefaultValues={prop.isDefaultValues} setAdditionalProducts={prop.setAdditionalProducts} setFinalProductPrice={prop.setFinalProductPrice} productSign={prop.productSign}/>
            <EditPapasAdicionales productId={prop.productId} isDefaultValues={prop.isDefaultValues} setAdditionalProducts={prop.setAdditionalProducts} setFinalProductPrice={prop.setFinalProductPrice} productSign={prop.productSign}/>
                    </>
                : null
            }
            {
                prop.category == "PS" ?
                    <>
            <EditBebidaAdicional productId={prop.productId} isDefaultValues={prop.isDefaultValues} setAdditionalProducts={prop.setAdditionalProducts} setFinalProductPrice={prop.setFinalProductPrice} productSign={prop.productSign}/>
            <EditPapasAdicionales productId={prop.productId} isDefaultValues={prop.isDefaultValues} setAdditionalProducts={prop.setAdditionalProducts} setFinalProductPrice={prop.setFinalProductPrice} productSign={prop.productSign}/>
            <EditPSAdicionales productId={prop.productId} isDefaultValues={prop.isDefaultValues} setAdditionalProducts={prop.setAdditionalProducts} setFinalProductPrice={prop.setFinalProductPrice} productSign={prop.productSign}/>
                    </>
                : null
            }
            {
                prop.category == "Bebida" ?
                    <>
            <EditPapasAdicionales productId={prop.productId} isDefaultValues={prop.isDefaultValues} setAdditionalProducts={prop.setAdditionalProducts} setFinalProductPrice={prop.setFinalProductPrice} productSign={prop.productSign}/>
            <EditPSAdicionales productId={prop.productId} isDefaultValues={prop.isDefaultValues} setAdditionalProducts={prop.setAdditionalProducts} setFinalProductPrice={prop.setFinalProductPrice} productSign={prop.productSign}/>
                    </>
                : null
            }
        </c.CustomizationContent>
    )
}

const EditCondimentosAdicionales = (prop) =>{
    const [bebSelected2,setBeb2]=useState(null)
    const [isSelected, setIsSelected]=useState(false)
    const bebidas2=([
        {title:"Extra Queso Americano Cheddar", price:"1.50"},
        {title:"Extra Salsa Fasfú", price:"1.50"},
        {title:"Extra Mermelada de cebolla y chile", price:"1.50"},
        {title:"Extra Fries", price:"3.00"},
        {title:"Extra Big Fries", price:"3.00"},
        {title:"Extra Big fries con queso y bacon", price:"3.00"},
        {title:"Extra Loncha de queso fundido americano", price:"1.00"},
    ])
    const [selectedAdditionalBeb,setAdditionalBeb]=useState("")
    useEffect(()=>{
        setAdditionalBeb("")
        setIsSelected(false)
        setBeb2(null)
    }, [prop.isDefaultValues])
    return(
        <c.SectionView>
            <c.SectionTopTitleN>
                <c.SectionViewTitle>Añade Adiciones</c.SectionViewTitle>
                <c.SectionViewDesc>Selecciona máximo 10 adiciones</c.SectionViewDesc>
            </c.SectionTopTitleN>
            <c.SectionBody>
                {
                    bebidas2.map((beb,i)=>{
                        const handleClick = () =>{
                                if(selectedAdditionalBeb.includes(beb.title)){
                                    setAdditionalBeb(selectedAdditionalBeb.filter((item)=>item !== beb.title))
                                    setIsSelected(true)
                                    prop.setAdditionalProducts(old => old.filter((prop)=>prop.additionName == beb.title).slice(0,-old.length))
                                    setBeb2(i)
                                    if(selectedAdditionalBeb.filter((item)=>item == beb.title).length >= 2){
                                        let productsQuantity = selectedAdditionalBeb.filter((item)=>item == beb.title).length 
                                        prop.setFinalProductPrice(fp=>parseFloat(fp)-parseFloat(beb.price*productsQuantity))
                                    }else{
                                    prop.setFinalProductPrice(fp=>parseFloat(fp)-parseFloat(beb.price))
                                    }
                                }else{
                                    if(selectedAdditionalBeb.length < 10){
                                    setAdditionalBeb(p=>[...p, beb.title])
                                    setIsSelected(false)
                                    setBeb2(null)
                                    prop.setFinalProductPrice(fp=>parseFloat(fp)+parseFloat(beb.price))
                                        prop.setAdditionalProducts(old => [...old, {
                                            additionName:beb.title,
                                            additionPrice:beb.price,
                                            id:prop.productId
                                        }])
                                    }
                                }
                        } 
                        return(
                            <c.SectionB>
                                <c.SectionBehind bg={selectedAdditionalBeb.includes(beb.title) ? "#e5f2ff" : null} col={selectedAdditionalBeb.includes(beb.title) ? "dodgerblue" : null} onClick={()=>handleClick()}>
{beb.title}
                                <c.SectionPrice>+ {prop.productSign.format(parseFloat(beb.price))}</c.SectionPrice>
                                </c.SectionBehind>
                                <c.SectionPlusMinusInside mgr={
                                    selectedAdditionalBeb.length < 10 ? 20 : 45
                                    } display={
                                    selectedAdditionalBeb.includes(beb.title) ? "flex" : "none"
                                    }>
                                    <c.SectionInsideMinus onClick={()=>{
                                    prop.setFinalProductPrice(fp=>parseFloat(fp)-parseFloat(beb.price))
                                        setAdditionalBeb([...selectedAdditionalBeb.filter((item)=>item == beb.title).slice(0,-1),...selectedAdditionalBeb.filter((item)=>item!=beb.title)])
                                    prop.setAdditionalProducts(old => old.filter((prop)=>prop.additionName == beb.title).slice(0,-old.slice(0,-1)))
                                    }}>-</c.SectionInsideMinus>
                                    <c.SectionInsideValue>{selectedAdditionalBeb.length >= 2 ? selectedAdditionalBeb.filter((data)=>data==beb.title).length : 1}</c.SectionInsideValue>
                                    {
                                        selectedAdditionalBeb.length < 10 ?
                                    <c.SectionInsidePlus onClick={()=>{
                                    prop.setFinalProductPrice(fp=>parseFloat(fp)+parseFloat(beb.price))
                                        setAdditionalBeb(p=>[...p,beb.title])
                                        prop.setAdditionalProducts(old => [...old, {
                                            additionName:beb.title,
                                            additionPrice:beb.price,
                                            id:prop.productId
                                        }])
                                    }}>+</c.SectionInsidePlus>
                                    : null
                                    }
                                </c.SectionPlusMinusInside>
                            </c.SectionB>
                        )
                    })
                }
            </c.SectionBody>
        </c.SectionView>
    )
}
const EditPSAdicionales = (prop) =>{
    const [bebSelected2,setBeb2]=useState(null)
    const [isSelected, setIsSelected]=useState(false)
    const bebidas2=([
        {title:"Vasito de brownie y crema de chocolate", price:"3.99"},
        {title:"Vasito de tarta de zanahoria (130g)", price:"3.99"},
        {title:"Vasito Red Velvet (130g)", price:"3.99"},
        {title:"Vasito Oreo (130g)", price:"3.99"},
        {title:"Malteada de Chocolate", price:"6.50"},
        {title:"Malteada de Chocolate y Aguacate", price:"7.50"},
        {title:"Malteada de Vainilla", price:"6.50"},
    ])
    const [selectedAdditionalBeb,setAdditionalBeb]=useState("")

    useEffect(()=>{
        setAdditionalBeb("")
        setIsSelected(false)
        setBeb2(null)
    }, [prop.isDefaultValues])
    return(
        <c.SectionView>
            <c.SectionTopTitleN>
                <c.SectionViewTitle>Añade Postres & Salsas Adicionales</c.SectionViewTitle>
                <c.SectionViewDesc>Escoge hasta 10 opciones</c.SectionViewDesc>
            </c.SectionTopTitleN>
            <c.SectionBody>
                {
                    bebidas2.map((beb,i)=>{
                        const handleClick = () =>{
                                if(selectedAdditionalBeb.includes(beb.title)){
                                    prop.setAdditionalProducts(old => [...old.filter((prop)=>prop.additionName == beb.title).slice(0,-old.length),beb.title])
                                    setAdditionalBeb(selectedAdditionalBeb.filter((item)=>item !== beb.title))
                                    setIsSelected(true)
                                    setBeb2(i)
                                    if(selectedAdditionalBeb.filter((item)=>item == beb.title).length >= 2){
                                        let productsQuantity = selectedAdditionalBeb.filter((item)=>item == beb.title).length 
                                        prop.setFinalProductPrice(fp=>parseFloat(fp)-parseFloat(beb.price*productsQuantity))
                                    }else{
                                    prop.setFinalProductPrice(fp=>parseFloat(fp)-parseFloat(beb.price))
                                    }
                                }else{
                                    if(selectedAdditionalBeb.length < 10){
                                    setAdditionalBeb(p=>[...p, beb.title])
                                        prop.setAdditionalProducts(old => [...old, {
                                            additionName:beb.title,
                                            additionPrice:beb.price,
                                            id:prop.productId
                                        }])
                                    setIsSelected(false)
                                    setBeb2(null)
                                    prop.setFinalProductPrice(fp=>parseFloat(fp)+parseFloat(beb.price))
                                    }
                                }
                        } 
                        return(
                            <c.SectionB>
                                <c.SectionBehind bg={selectedAdditionalBeb.includes(beb.title) ? "#e5f2ff" : null} col={selectedAdditionalBeb.includes(beb.title) ? "dodgerblue" : null} onClick={()=>handleClick()}>
{beb.title}
                                <c.SectionPrice>+ {prop.productSign.format(parseFloat(beb.price))}</c.SectionPrice>
                                </c.SectionBehind>
                                <c.SectionPlusMinusInside mgr={
                                    selectedAdditionalBeb.length < 10 ? 20 : 45
                                    } display={
                                    selectedAdditionalBeb.includes(beb.title) ? "flex" : "none"
                                    }>
                                    <c.SectionInsideMinus onClick={()=>{
                                    prop.setAdditionalProducts(old => [...old.filter((prop)=>prop.additionName == beb.title).slice(0,-old.slice(0,-1)),beb.title])
                                    prop.setFinalProductPrice(fp=>parseFloat(fp)-parseFloat(beb.price))
                                        setAdditionalBeb([...selectedAdditionalBeb.filter((item)=>item == beb.title).slice(0,-1),...selectedAdditionalBeb.filter((item)=>item!=beb.title)])
                                    }}>-</c.SectionInsideMinus>
                                    <c.SectionInsideValue>{selectedAdditionalBeb.length >= 2 ? selectedAdditionalBeb.filter((data)=>data==beb.title).length : 1}</c.SectionInsideValue>
                                    {
                                        selectedAdditionalBeb.length < 10 ?
                                    <c.SectionInsidePlus onClick={()=>{
                                    prop.setFinalProductPrice(fp=>parseFloat(fp)+parseFloat(beb.price))
                                        prop.setAdditionalProducts(old => [...old, {
                                            additionName:beb.title,
                                            additionPrice:beb.price,
                                            id:prop.productId
                                        }])
                                        setAdditionalBeb(p=>[...p,beb.title])
                                    }}>+</c.SectionInsidePlus>
                                    : null
                                    }
                                </c.SectionPlusMinusInside>
                            </c.SectionB>
                        )
                    })
                }
            </c.SectionBody>
        </c.SectionView>
    )
}
const EditPapasAdicionales = (prop) =>{
    const [bebSelected2,setBeb2]=useState(null)
    const [isSelected, setIsSelected]=useState(false)
    const bebidas2=([
        {title:"Patatas Medianas", price:"2.00"},
        {title:"Patatas Grandes", price:"3.00"},
        {title:"Bacon Cheese Fries Medianas", price:"5.00"},
        {title:"Bacon Cheese Fries Grandes", price:"7.50"}
    ])
    const [selectedAdditionalBeb,setAdditionalBeb]=useState("")

    useEffect(()=>{
        setAdditionalBeb("")
        setIsSelected(false)
        setBeb2(null)
    }, [prop.isDefaultValues])
    return(
        <c.SectionView>
            <c.SectionTopTitleN>
                <c.SectionViewTitle>Añade Patatas adicionales</c.SectionViewTitle>
                <c.SectionViewDesc>Escoge hasta 10 opciones</c.SectionViewDesc>
            </c.SectionTopTitleN>
            <c.SectionBody>
                {
                    bebidas2.map((beb,i)=>{
                        const handleClick = () =>{
                                if(selectedAdditionalBeb.includes(beb.title)){
                                    setAdditionalBeb(selectedAdditionalBeb.filter((item)=>item !== beb.title))
                                    prop.setAdditionalProducts(old => [...old.filter((prop)=>prop.additionName == beb.title).slice(0,-old.length),beb.title])
                                    setIsSelected(true)
                                    setBeb2(i)
                                    if(selectedAdditionalBeb.filter((item)=>item == beb.title).length >= 2){
                                        let productsQuantity = selectedAdditionalBeb.filter((item)=>item == beb.title).length 
                                        prop.setFinalProductPrice(fp=>parseFloat(fp)-parseFloat(beb.price*productsQuantity))
                                    }else{
                                    prop.setFinalProductPrice(fp=>parseFloat(fp)-parseFloat(beb.price))
                                    }
                                }else{
                                    if(selectedAdditionalBeb.length < 10){
                                    setAdditionalBeb(p=>[...p, beb.title])
                                    setIsSelected(false)
                                    setBeb2(null)
                                        prop.setAdditionalProducts(old => [...old, {
                                            additionName:beb.title,
                                            additionPrice:beb.price,
                                            id:prop.productId
                                        }])
                                    prop.setFinalProductPrice(fp=>parseFloat(fp)+parseFloat(beb.price))
                                    }
                                }
                        } 
                        return(
                            <c.SectionB>
                                <c.SectionBehind bg={selectedAdditionalBeb.includes(beb.title) ? "#e5f2ff" : null} col={selectedAdditionalBeb.includes(beb.title) ? "dodgerblue" : null} onClick={()=>handleClick()}>
{beb.title}
                                <c.SectionPrice>+ {prop.productSign.format(parseFloat(beb.price))}</c.SectionPrice>
                                </c.SectionBehind>
                                <c.SectionPlusMinusInside mgr={
                                    selectedAdditionalBeb.length < 10 ? 20 : 45
                                    } display={
                                    selectedAdditionalBeb.includes(beb.title) ? "flex" : "none"
                                    }>
                                    <c.SectionInsideMinus onClick={()=>{
                                    prop.setFinalProductPrice(fp=>parseFloat(fp)-parseFloat(beb.price))
                                    prop.setAdditionalProducts(old => [...old.filter((prop)=>prop.additionName == beb.title).slice(0,-old.slice(0,-1)),beb.title])
                                        setAdditionalBeb([...selectedAdditionalBeb.filter((item)=>item == beb.title).slice(0,-1),...selectedAdditionalBeb.filter((item)=>item!=beb.title)])
                                    }}>-</c.SectionInsideMinus>
                                    <c.SectionInsideValue>{selectedAdditionalBeb.length >= 2 ? selectedAdditionalBeb.filter((data)=>data==beb.title).length : 1}</c.SectionInsideValue>
                                    {
                                        selectedAdditionalBeb.length < 10 ?
                                    <c.SectionInsidePlus onClick={()=>{
                                    prop.setFinalProductPrice(fp=>parseFloat(fp)+parseFloat(beb.price))
                                        setAdditionalBeb(p=>[...p,beb.title])
                                        prop.setAdditionalProducts(old => [...old, {
                                            additionName:beb.title,
                                            additionPrice:beb.price,
                                            id:prop.productId
                                        }])
                                    }}>+</c.SectionInsidePlus>
                                    : null
                                    }
                                </c.SectionPlusMinusInside>
                            </c.SectionB>
                        )
                    })
                }
            </c.SectionBody>
        </c.SectionView>
    )
}

const EditBebidaAdicional = (prop) =>{
    const [bebSelected2,setBeb2]=useState(null)
    const [isSelected, setIsSelected]=useState(false)
    const bebidas2=([
        {title:"Monster Energy Original", price:"2.50"},
        {title:"Coca-Cola Sabor Original (500ml)", price:"2.00"},
        {title:"Coca-Cola Sabor Zero (500ml)", price:"2.00"},
        {title:"Coca-Cola Sabor Zero Zero (500ml)", price:"2.00"},
        {title:"Sprite (500ml)", price:"2.00"},
        {title:"Fanta Naranja (500ml)", price:"2.00"},
        {title:"Fanta Limón (500ml)", price:"2.00"},
        {title:"Aquarius Naranja (500ml)", price:"2.00"},
        {title:"Aquarius Limón (500ml)", price:"2.00"},
        {title:"Nestea Té Negro Limón (500ml)", price:"2.00"},
        {title:"Agua (50cl)", price:"1.00"},
    ])
    const [selectedAdditionalBeb,setAdditionalBeb]=useState("")

    useEffect(()=>{
        setAdditionalBeb("")
        setIsSelected(false)
        setBeb2(null)
    }, [prop.isDefaultValues])
    return(
        <c.SectionView>
            <c.SectionTopTitleN>
                <c.SectionViewTitle>Elige tu bebida adicional</c.SectionViewTitle>
                <c.SectionViewDesc>Escoge hasta 10 opciones</c.SectionViewDesc>
            </c.SectionTopTitleN>
            <c.SectionBody>
                {
                    bebidas2.map((beb,i)=>{
                        const handleClick = () =>{
                                if(selectedAdditionalBeb.includes(beb.title)){
                                    setAdditionalBeb(selectedAdditionalBeb.filter((item)=>item !== beb.title))
                                    setIsSelected(true)
                                    setBeb2(i)
                                    prop.setAdditionalProducts(old => [...old.filter((prop)=>prop.additionName == beb.title).slice(0,-old.length),beb.title])
                                    if(selectedAdditionalBeb.filter((item)=>item == beb.title).length >= 2){
                                        let productsQuantity = selectedAdditionalBeb.filter((item)=>item == beb.title).length 
                                        prop.setFinalProductPrice(fp=>parseFloat(fp)-parseFloat(beb.price*productsQuantity))
                                    }else{
                                    prop.setFinalProductPrice(fp=>parseFloat(fp)-parseFloat(beb.price))
                                    }
                                }else{
                                    if(selectedAdditionalBeb.length < 10){
                                    setAdditionalBeb(p=>[...p, beb.title])
                                    setIsSelected(false)
                                    setBeb2(null)
                                        prop.setAdditionalProducts(old => [...old, {
                                            additionName:beb.title,
                                            additionPrice:beb.price,
                                            id:prop.productId
                                        }])
                                    prop.setFinalProductPrice(fp=>parseFloat(fp)+parseFloat(beb.price))
                                    }
                                }
                        } 
                        return(
                            <c.SectionB>
                                <c.SectionBehind bg={selectedAdditionalBeb.includes(beb.title) ? "#e5f2ff" : null} col={selectedAdditionalBeb.includes(beb.title) ? "dodgerblue" : null} onClick={()=>handleClick()}>
{beb.title}
                                <c.SectionPrice>+ {prop.productSign.format(parseFloat(beb.price))}</c.SectionPrice>
                                </c.SectionBehind>
                                <c.SectionPlusMinusInside mgr={
                                    selectedAdditionalBeb.length < 10 ? 20 : 45
                                    } display={
                                    selectedAdditionalBeb.includes(beb.title) ? "flex" : "none"
                                    }>
                                    <c.SectionInsideMinus onClick={()=>{
                                    prop.setFinalProductPrice(fp=>parseFloat(fp)-parseFloat(beb.price))
                                    prop.setAdditionalProducts(old => [...old.filter((prop)=>prop.additionName == beb.title).slice(0,-old.slice(0,-1)),beb.title])
                                        setAdditionalBeb([...selectedAdditionalBeb.filter((item)=>item == beb.title).slice(0,-1),...selectedAdditionalBeb.filter((item)=>item!=beb.title)])
                                    }}>-</c.SectionInsideMinus>
                                    <c.SectionInsideValue>{selectedAdditionalBeb.length >= 2 ? selectedAdditionalBeb.filter((data)=>data==beb.title).length : 1}</c.SectionInsideValue>
                                    {
                                        selectedAdditionalBeb.length < 10 ?
                                    <c.SectionInsidePlus onClick={()=>{
                                    prop.setFinalProductPrice(fp=>parseFloat(fp)+parseFloat(beb.price))
                                        setAdditionalBeb(p=>[...p,beb.title])
                                    }}>+</c.SectionInsidePlus>
                                    : null
                                    }
                                </c.SectionPlusMinusInside>
                            </c.SectionB>
                        )
                    })
                }
            </c.SectionBody>
        </c.SectionView>
    )
}
const EditBurger = (prop) =>{
    const [bebSelected,setBeb]=useState(null)
    const bebidas=([
        {title:"Fasfú Burger",xid:0},
        {title:"Fasfú Cheese Burger",xid:1},
        {title:"Fasfú Doble Burger",xid:2},
        {title:"Fasfú Doble Cheese Burger",xid:3},
    ])
    const [xid, setXid]=useState(0)
    useEffect(()=>{
        setBeb(0)
    }, [prop.isDefaultValues])
    useEffect(()=>{
                                prop.setAdditionalProducts(old=>[...old, {
                                    additionName:"Fasfú Burger",
                                    id:prop.productId
                                }])
    },[])
    return(
        <c.SectionView>
            <c.SectionTopTitle>
                <c.SectionViewTitle>Elige tu Fasfú Burger</c.SectionViewTitle>
                <c.SectionViewTag>Obligatorio</c.SectionViewTag>
            </c.SectionTopTitle>
            <c.SectionBody>
                {
                    bebidas.map((beb,i)=>{
                        return(
                            <c.Section onClick={()=>{
                                    if(xid == 1){
                                        prop.setFinalProductPrice(fp=>parseFloat(fp)-parseFloat("1.45"))
                                    }else if(xid == 2){
                                        prop.setFinalProductPrice(fp=>parseFloat(fp)-parseFloat("3.50"))
                                    }else if (xid == 3){
                                        prop.setFinalProductPrice(fp=>parseFloat(fp)-parseFloat("4.00"))
                                    }
                                if(beb.xid == 0){
                                        setXid(0)
                                }else if(beb.xid == 1){
                                        setXid(1)
                                        prop.setFinalProductPrice(fp=>parseFloat(fp)+parseFloat("1.45"))
                                }else if(beb.xid == 2){
                                        setXid(2)
                                        prop.setFinalProductPrice(fp=>parseFloat(fp)+parseFloat("3.50"))
                                }else if(beb.xid == 3){
                                        setXid(3)
                                        prop.setFinalProductPrice(fp=>parseFloat(fp)+parseFloat("4.00"))
                                }
                                prop.setAdditionalProducts(old=>[...old.filter((data)=>data.additionName != "Patatas Fritas Medianas" && data.additionName != "Patatas Fritas Grandes" && data.additionName != "Bacon Cheese Fries" && data.additionName != "Bacon Cheese Fries Grandes"), {
                                    additionName:beb.title,
                                    id:prop.productId
                                }])
                                setBeb(i)}}  col={bebSelected == i ? "dodgerblue" : null} bg={bebSelected == i ? "#e5f2ff" : null}>{beb.title} {beb.xid != 0 ? <span style={{color:"dodgerblue",marginLeft:"5px",fontSize:"17px"}}>{
                                    beb.xid == 1 ? "+1,45€" : beb.xid == 2 ? "+3,50€" : beb.xid == 3 ? "+4,00€" : null
                                }</span> : null}</c.Section>
                        )
                    })
                }
            </c.SectionBody>
        </c.SectionView>
    )
}
const EditPatatas = (prop) =>{
    const [bebSelected,setBeb]=useState(null)
    const bebidas=([
        {title:"Patatas Fritas Medianas",xid:0},
        {title:"Patatas Fritas Grandes",xid:1},
        {title:"Bacon Cheese Fries",xid:2},
        {title:"Bacon Cheese Fries Grandes",xid:3},
    ])
    const [xid, setXid]=useState(0)
    useEffect(()=>{
        setBeb(0)
    }, [prop.isDefaultValues])
    useEffect(()=>{
                                prop.setAdditionalProducts(old=>[...old, {
                                    additionName:"Patatas Fritas Medianas",
                                    id:prop.productId
                                }])
    },[])
    return(
        <c.SectionView>
            <c.SectionTopTitle>
                <c.SectionViewTitle>Elige tus patatas</c.SectionViewTitle>
                <c.SectionViewTag>Obligatorio</c.SectionViewTag>
            </c.SectionTopTitle>
            <c.SectionBody>
                {
                    bebidas.map((beb,i)=>{
                        return(
                            <c.Section onClick={()=>{
                                    if(xid == 1){
                                        prop.setFinalProductPrice(fp=>parseFloat(fp)-parseFloat("1.00"))
                                    }else if(xid == 2){
                                        prop.setFinalProductPrice(fp=>parseFloat(fp)-parseFloat("3.00"))
                                    }else if (xid == 3){
                                        prop.setFinalProductPrice(fp=>parseFloat(fp)-parseFloat("5.50"))
                                    }
                                if(beb.xid == 0){
                                        setXid(0)
                                }else if(beb.xid == 1){
                                        setXid(1)
                                        prop.setFinalProductPrice(fp=>parseFloat(fp)+parseFloat("1.00"))
                                }else if(beb.xid == 2){
                                        setXid(2)
                                        prop.setFinalProductPrice(fp=>parseFloat(fp)+parseFloat("3.00"))
                                }else if(beb.xid == 3){
                                        setXid(3)
                                        prop.setFinalProductPrice(fp=>parseFloat(fp)+parseFloat("5.50"))
                                }
                                prop.setAdditionalProducts(old=>[...old.filter((data)=>data.additionName != "Patatas Fritas Medianas" && data.additionName != "Patatas Fritas Grandes" && data.additionName != "Bacon Cheese Fries" && data.additionName != "Bacon Cheese Fries Grandes"), {
                                    additionName:beb.title,
                                    id:prop.productId
                                }])
                                setBeb(i)}}  col={bebSelected == i ? "dodgerblue" : null} bg={bebSelected == i ? "#e5f2ff" : null}>{beb.title} {beb.xid != 0 ? <span style={{color:"dodgerblue",marginLeft:"5px",fontSize:"17px"}}>{
                                    beb.xid == 1 ? "+1,00€" : beb.xid == 2 ? "+3,00€" : beb.xid == 3 ? "+5,50€" : null
                                }</span> : null}</c.Section>
                        )
                    })
                }
            </c.SectionBody>
        </c.SectionView>
    )
}
const EditBebida = (prop) =>{
    const [bebSelected,setBeb]=useState(null)
    const bebidas=([
        {title:"Coca-Cola Sabor Original (500ml)",xid:0},
        {title:"Coca-Cola Sabor Zero (500ml)",xid:1},
        {title:"Fanta Limón (500ml)",xid:2},
        {title:"Monster Energy Original",xid:3},
        {title:"Nestea Té Negro Limón (500ml)",xid:4},
        {title:"Aquarius Naranja (500ml)",xid:5},
        {title:"Coca-Cola Zero Zero (500ml)",xid:6},
        {title:"Sprite (500ml)",xid:7},
        {title:"Aquarius Limón (500ml)",xid:8}
    ])
    useEffect(()=>{
        setBeb(0)
    }, [prop.isDefaultValues])
    useEffect(()=>{
                                prop.setAdditionalProducts(old=>[...old, {
                                    additionName:"Coca-cola sabor original 400ml",
                                    id:prop.productId
                                }])
    },[])
    return(
        <c.SectionView>
            <c.SectionTopTitle>
                <c.SectionViewTitle>Elige tu bebida</c.SectionViewTitle>
                <c.SectionViewTag>Obligatorio</c.SectionViewTag>
            </c.SectionTopTitle>
            <c.SectionBody>
                {
                    bebidas.map((beb,i)=>{
                        return(
                            <c.Section onClick={()=>{
                                if(beb.xid == 3){
                                        prop.setFinalProductPrice(fp=>parseFloat(fp)+parseFloat("0.50"))
                                }else{
                                        prop.setFinalProductPrice(fp=>parseFloat(fp)-parseFloat("0.50"))
                                }
                                prop.setAdditionalProducts(old=>[...old.filter((data)=>data.additionName != "Coca-cola sabor original 400ml" && data.additionName != "Coca-cola sin azúcar 400ml" && data.additionName != "Agua san mateo sin gas" && data.additionName != "Agua san mateo con gas" && data.additionName != "Inca cola sin azúcar 400ml" && data.additionName != "Inca cola sabor original"), {
                                    additionName:beb.title,
                                    id:prop.productId
                                }])
                                setBeb(i)}}  col={bebSelected == i ? "dodgerblue" : null} bg={bebSelected == i ? "#e5f2ff" : null}>{beb.title} {beb.xid == 3 ? <span style={{color:"dodgerblue",marginLeft:"5px",fontSize:"17px"}}>+0,50€</span> : null}</c.Section>
                        )
                    })
                }
            </c.SectionBody>
        </c.SectionView>
    )
}
const CustomizeFasfu = (prop) =>{
    const customizeFasfu=([
        {title:"Sin lechuga"},
        {title:"Sin tomate"},
        {title:"Sin cebolla"},
        {title:"Sin pepinillo"},
        {title:"Sin mayonesa Fasfú"}
    ])
    const [selectedCustomizeFasfu, setCustomizeFasfu]=useState("")
    useEffect(()=>{
        setCustomizeFasfu("")
    }, [prop.isDefaultValues])
    return(
        <c.SectionView>
            <c.SectionTopTitleN>
                <c.SectionViewTitle>Personaliza tu fasfú burger</c.SectionViewTitle>
                <c.SectionViewDesc>Selecciona máximo 5 opciones</c.SectionViewDesc>
            </c.SectionTopTitleN>
            <c.SectionBody>
                {
                    customizeFasfu.map((cf,i)=>{
                        return(
                            <c.Section onClick={()=>{
                                if(selectedCustomizeFasfu.includes(cf.title)){
                                    setCustomizeFasfu(selectedCustomizeFasfu.filter((item)=>item !== cf.title))
                                prop.setAdditionalProducts(old=>old.filter((data)=>data.additionName == cf.title).slice(0,-1))
                                }else{
                                    setCustomizeFasfu(p=>[...p, cf.title])
                                prop.setAdditionalProducts(old=>[...old, {
                                    additionName:cf.title,
                                    id:prop.productId
                                }])
                                }
                            }} bg={selectedCustomizeFasfu.includes(cf.title) ? "#e5f2ff" : null} col={selectedCustomizeFasfu.includes(cf.title) ? "dodgerblue" : null}>{cf.title}</c.Section>
                        )
                    })
                }
            </c.SectionBody>
        </c.SectionView>
    )
}


const EditServilletas = (prop) =>{
    const [bebSelected3,setBeb3]=useState(0)
    const bebidas3=([
        {title:"Si deseo servilletas"},
        {title:"No deseo servilletas"},
    ])
    useEffect(()=>{
        setBeb3(0)
       prop.setAdditionalProducts(old=>[...old, {
                                    additionName:"Si deseo servilletas",
                                    id:prop.productId
                                }])
    }, [prop.isDefaultValues])
    return(
        <c.SectionView>
            <c.SectionTopTitle>
                <c.SectionViewTitle>¿Deseas servilletas?</c.SectionViewTitle>
            </c.SectionTopTitle>
            <c.SectionBody>
                {
                    bebidas3.map((beb,i)=>{
                        return(
                            <c.Section onClick={()=>{
                                prop.setAdditionalProducts(old=>[...old.filter((data)=>data.title!="Si deseo servilletas" && data.title != "No deseo servilletas"), {
                                    additionName:beb.title,
                                    id:prop.productId
                                }])
                                setBeb3(i)
                            }}  col={bebSelected3 == i ? "dodgerblue" : null} bg={bebSelected3 == i ? "#e5f2ff" : null}>{beb.title}</c.Section>
                        )
                    })
                }
            </c.SectionBody>
        </c.SectionView>
    )
}

const EditFChicken = (prop) =>{
    const customizeFasfu2=([
        {title:"Sin mayo verde"},
        {title:"Sin pepinillos"},
        {title:"Sin coleslaw"}
    ])
    const [selectedCustomizeFasfu2, setCustomizeFasfu2]=useState("")
    useEffect(()=>{
        setCustomizeFasfu2("")
    }, [prop.isDefaultValues])
    return(
        <c.SectionView>
            <c.SectionTopTitleN>
                <c.SectionViewTitle>Personaliza tu Fasfú Fried Chicken</c.SectionViewTitle>
                <c.SectionViewDesc>Selecciona máximo 3 opciones</c.SectionViewDesc>
            </c.SectionTopTitleN>
            <c.SectionBody>
                {
                    customizeFasfu2.map((cf,i)=>{
                        return(
                            <c.Section onClick={()=>{
                                if(selectedCustomizeFasfu2.includes(cf.title)){
                                    setCustomizeFasfu2(selectedCustomizeFasfu2.filter((item)=>item !== cf.title))
                                prop.setAdditionalProducts(old=>old.filter((data)=>data.additionName ==cf.title).slice(0,-1))
                                }else{
                                    setCustomizeFasfu2(p=>[...p, cf.title])
                                prop.setAdditionalProducts(old=>[...old, {
                                    additionName:cf.title,
                                    id:prop.productId
                                }])
                                }
                            }} bg={selectedCustomizeFasfu2.includes(cf.title) ? "#e5f2ff" : null} col={selectedCustomizeFasfu2.includes(cf.title) ? "dodgerblue" : null}>{cf.title}</c.Section>
                        )
                    })
                }
            </c.SectionBody>
        </c.SectionView>
    )
}

const EditGCheese = (prop) =>{
    const customizeFasfu2=([
        {title:"Mermelada cebolla y chile"},
        {title:"Mermelada tocineta whisky"},
        {title:"Mayo verde"}
    ])
    const [selectedCustomizeFasfu2, setCustomizeFasfu2]=useState("")
    useEffect(()=>{
        setCustomizeFasfu2("")
    }, [prop.isDefaultValues])
    return(
        <c.SectionView>
            <c.SectionTopTitleN>
                <c.SectionViewTitle>Personaliza tu Fasfú Grilled Cheese Sandwich</c.SectionViewTitle>
                <c.SectionViewDesc>Selecciona máximo 3 opciones</c.SectionViewDesc>
            </c.SectionTopTitleN>
            <c.SectionBody>
                {
                    customizeFasfu2.map((cf,i)=>{
                        return(
                            <c.Section onClick={()=>{
                                if(selectedCustomizeFasfu2.includes(cf.title)){
                                    setCustomizeFasfu2(selectedCustomizeFasfu2.filter((item)=>item !== cf.title))
                                prop.setAdditionalProducts(old=>old.filter((data)=>data.additionName ==cf.title).slice(0,-1))
                                }else{
                                    setCustomizeFasfu2(p=>[...p, cf.title])
                                prop.setAdditionalProducts(old=>[...old, {
                                    additionName:cf.title,
                                    id:prop.productId
                                }])
                                }
                            }} bg={selectedCustomizeFasfu2.includes(cf.title) ? "#e5f2ff" : null} col={selectedCustomizeFasfu2.includes(cf.title) ? "dodgerblue" : null}>{cf.title}</c.Section>
                        )
                    })
                }
            </c.SectionBody>
        </c.SectionView>
    )
}
export default CustomizationSpain;
