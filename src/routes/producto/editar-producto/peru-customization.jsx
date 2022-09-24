import { useEffect, useState } from "react"
import * as c from "./customization"
const CustomizationPeru = (prop) =>{
    return(
        <c.CustomizationContent>
            <EditBebidaAdicional setAdditionalProducts={prop.setAdditionalProducts} setFinalProductPrice={prop.setFinalProductPrice} productSign={prop.productSign}/>
            <EditBebida/>
            <CustomizeFasfu/>
            <SalsasExtras/>
            <EditServilletas/>
        </c.CustomizationContent>
    )
}
export default CustomizationPeru;

const EditBebidaAdicional = (prop) =>{
    const [bebSelected2,setBeb2]=useState(null)
    const [isSelected, setIsSelected]=useState(false)
    const bebidas2=([
        {title:"Coca-cola sabor original 400ml", price:"6.00"},
        {title:"Coca-cola sin azúcar 400ml", price:"6.00"},
        {title:"Agua san mateo sin gas", price:"6.00"},
        {title:"Agua san mateo con gas", price:"6.00"},
        {title:"Inca cola sin azucar 400ml", price:"6.00"},
        {title:"Inca cola sabor original", price:"6.00"}
    ])
    const [selectedAdditionalBeb,setAdditionalBeb]=useState("")
    return(
        <c.SectionView>
            <c.SectionTopTitleN>
                <c.SectionViewTitle>Elige tu bebida adicional</c.SectionViewTitle>
                <c.SectionViewDesc>Selecciona máximo 10 unidades</c.SectionViewDesc>
            </c.SectionTopTitleN>
            <c.SectionBody>
                {
                    bebidas2.map((beb,i)=>{
                        const handleClick = () =>{
                                if(selectedAdditionalBeb.includes(beb.title)){
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
                                    prop.setFinalProductPrice(fp=>parseFloat(fp)-parseFloat(beb.price))
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

const EditBebida = (prop) =>{
    const [bebSelected,setBeb]=useState(null)
    const bebidas=([
        {title:"Coca-cola sabor original 400ml"},
        {title:"Coca-cola sin azúcar 400ml"},
        {title:"Agua san mateo sin gas"},
        {title:"Agua san mateo con gas"},
        {title:"Inca cola sin azucar 400ml"},
        {title:"Inca cola sabor original"}
    ])
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
                            <c.Section onClick={()=>setBeb(i)}  col={bebSelected == i ? "dodgerblue" : null} bg={bebSelected == i ? "#e5f2ff" : null}>{beb.title}</c.Section>
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
        {title:"Cambio salsa fasfú por mayonesa"}
    ])
    const [selectedCustomizeFasfu, setCustomizeFasfu]=useState("")
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
                                }else{
                                    setCustomizeFasfu(p=>[...p, cf.title])
                                }
                            }} bg={selectedCustomizeFasfu.includes(cf.title) ? "#e5f2ff" : null} col={selectedCustomizeFasfu.includes(cf.title) ? "dodgerblue" : null}>{cf.title}</c.Section>
                        )
                    })
                }
            </c.SectionBody>
        </c.SectionView>
    )
}

const SalsasExtras= (prop) =>{
    const customizeFasfu2=([
        {title:"Ketchup"},
        {title:"Mayonesa"},
        {title:"Mostaza"}
    ])
    const [selectedCustomizeFasfu2, setCustomizeFasfu2]=useState("")
    return(
        <c.SectionView>
            <c.SectionTopTitleN>
                <c.SectionViewTitle>¿Quieres salsas adicionales?</c.SectionViewTitle>
                <c.SectionViewDesc>Selecciona máximo 3 opciones</c.SectionViewDesc>
            </c.SectionTopTitleN>
            <c.SectionBody>
                {
                    customizeFasfu2.map((cf,i)=>{
                        return(
                            <c.Section onClick={()=>{
                                if(selectedCustomizeFasfu2.includes(cf.title)){
                                    setCustomizeFasfu2(selectedCustomizeFasfu2.filter((item)=>item !== cf.title))
                                }else{
                                    setCustomizeFasfu2(p=>[...p, cf.title])
                                }
                            }} bg={selectedCustomizeFasfu2.includes(cf.title) ? "#e5f2ff" : null} col={selectedCustomizeFasfu2.includes(cf.title) ? "dodgerblue" : null}>{cf.title}</c.Section>
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
    return(
        <c.SectionView>
            <c.SectionTopTitle>
                <c.SectionViewTitle>¿Deseas servilletas?</c.SectionViewTitle>
            </c.SectionTopTitle>
            <c.SectionBody>
                {
                    bebidas3.map((beb,i)=>{
                        return(
                            <c.Section onClick={()=>setBeb3(i)}  col={bebSelected3 == i ? "dodgerblue" : null} bg={bebSelected3 == i ? "#e5f2ff" : null}>{beb.title}</c.Section>
                        )
                    })
                }
            </c.SectionBody>
        </c.SectionView>
    )
}
