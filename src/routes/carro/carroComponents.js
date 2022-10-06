import styled from "styled-components"
import {ArrowIosBackOutline} from "@styled-icons/evaicons-outline/ArrowIosBackOutline"
const mxw = (width) =>{
  return `@media (max-width: ${width}px)`
}
export const CarContent = styled.div`
    height:100vh;
    width:100vw;
    top:0;
    position:fixed;
    margin-left:${p=>p.mgl}vw;
    z-index:12;
    transition:.6s all ease-in-out;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    overflow-x:hidden;
    overflow-y:hidden;
::-webkit-scrollbar-thumb {
  background:transparent;
}
    ${mxw(1000)}{
        overflow-y: scroll;
    }
`
export const CarContentBody = styled.div`
    display:flex;
    flex-direction:row;
    background:white;
    ${mxw(1000)}{
        flex-direction:column;
        height:max-content;
        overflow-x:hidden;
    }
`
export const CarLength = styled.h1`
  transition:.6s;
  color:white;
  font-size:15px;
  margin-left:auto;
    padding-left:10px;
    padding-right:10px;
    padding-top:3px;
    padding-bottom:3px;
  margin-right:28.5px;
    font-weight:500;
  margin-top:8px;
  cursor:pointer;
  background:red;
  border-radius:100%;
  position:fixed;
  right:0;
  z-index:10;
  opacity:0;
`
export const CarLeftView = styled.div`
    width:70vw;
    background:white;
    height:100vh;
    padding-top:110px;
    margin-top:0px;
    overflow:scroll;
::-webkit-scrollbar-thumb {
  background:transparent;
}
    ${mxw(1000)}{
        width:100vw;
        height:max-content;
        min-height:100vh;
        overflow:hidden;
    }
`
export const CarRightView = styled.div`
    width:30vw;
    height:100vh;
    position:relative;
    background:#F6F6F5;
    ${mxw(1000)}{
        width:100vw;
        height:max-content;
        padding-bottom:140px;
        margin-top:-130px;
        background:rgb(250,250,250);
    }
`
export const CarProduct = styled.div`
    align-items:center;
    justify-content:center;
    border-top:1px solid rgb(215,215,215);
    padding:31px 0px;
    padding-bottom:25px;
    margin:0px 120px;
    border-bottom:${p=>p.bb};
    margin-bottom:${p=>p.limb}px;
    ${mxw(1500)}{
        margin:0 30px;
    margin-bottom:${p=>p.limb}px;
    }
`
export const CarLeftContent = styled.div`
    overflow:scroll;
    overflow-x:hidden;
`
export const CarProductImg = styled.img`
    height:95px;
    width:95px;
    border-radius:12px;
    object-fit:cover;
    ${mxw(1275)}{
        height:85px;
        width:85px;
    }
    ${mxw(564)}{
        height:77px;
        width:77px;
    }
`
export const CarProductName = styled.h1`
    font-size:22.5px;
    ${mxw(1275)}{
        font-size:20.5px;
    }
    ${mxw(1200)}{
        max-width:340px;
    }
    ${mxw(1000)}{
        max-width:max-content;
    }
    ${mxw(660)}{
        width:340px;
    }
    ${mxw(564)}{
        width:300px;
        font-size:19px;
        margin-bottom:-5px;
    }
    ${mxw(460)}{
        margin-right:10px;
        width:230px;
    }
    ${mxw(430)}{
        width:200px;
    }
    ${mxw(400)}{
        width:170px;
    }
`
export const CarProductPrice = styled.h2`
    right:0;
    position:absolute;
    bottom:0;
    margin-bottom:-2px;
    margin-right:130px;
    font-weight:400;
    font-size:18px;
    ${mxw(1500)}{
        margin-right:0px;
    }
    ${mxw(800)}{
        display:none;
    }
`
export const CarProductQuantity = styled.h1`

`
export const CarProductRemove = styled.img`
    right:0;
    top:0;
    margin-right:130px;
    margin-top:-10px;
    position:absolute;
    height:35px;
    width:46px;
    cursor:pointer;
    ${mxw(1500)}{
        margin-right:0px;
    }
    ${mxw(500)}{
        height:25px;
        width:36px;
        margin-top:1px;
    }
    ${mxw(375)}{
        margin-right:-15px;
    }
    ${mxw(360)}{
        margin-right:-10px;
    }
`
export const CarProductAddonsView = styled.div`
    display:flex;
    gap:12px;
    margin-top:24px;
    flex-wrap:wrap;
    margin-right:280px;
    ${mxw(1500)}{
        margin-right:100px;
    }
    ${mxw(1275)}{
        gap:8px;
    }
    ${mxw(1000)}{
        margin-right:50px;
    }
    ${mxw(800)}{
        margin-right:0px;
        margin-top:27px;
    }
    ${mxw(500)}{
        margin-right:-38px;
    }
    ${mxw(470)}{
        margin-right: -20px;
    }
`
export const CarProductAddon = styled.h1`
    font-size:13.5px;
    font-weight:300;
    padding:8px;
    border-radius:6px;
    transition:.4s;
        color:dodgerblue;
        border:1px solid #e5f2ff;
        background:#e5f2ff;
    ${mxw(1275)}{
        font-size:12px;
    }
    ${mxw(564)}{
        font-size:11px;
        padding:7px;
    }
    ${mxw(500)}{
        font-size:9.45px;
        padding:5.25px;
    }
`
export const CarProductContent = styled.div`
    display:flex;
    gap:22px;
`
export const CarProductRightContent = styled.div`
    width:100%;
    position:relative;
`
export const CloseProduct = styled(ArrowIosBackOutline)`
    color:black;
    height:40px;
    cursor:pointer;
    padding:4px 7px;
    margin-top:21px;
    margin-left:18px;
    position:absolute;
    border-radius:8px;
    transition:.5s;
    &:hover{
        background:#e5f2ff;
        color:dodgerblue;
    }
    ${mxw(800)}{
        height:35px;
        padding:3px 5px;
    }
`
export const TopInitialView = styled.div`
    width:70vw;
    position:absolute;
    height:88px;
    background:white;
    z-index:1;
    transition:.6s;
`
export const TopViewTitle = styled.h1`
    position:absolute;
    transform:translate(-50%,-50%);
    -ms-transform:translate(-50%,-50%);
    left:0;
    margin-top:42.75px;
    font-size:29px;
    font-weight:700;
    margin-left:150px;
    ${mxw(800)}{
        font-size:24.5px;
        margin-left:130px;
        margin-top:40.5px;
    }
`
export const TitleTableView = styled.div`
    display:flex;
    width:100%;
    justify-content:flex-start;
    margin-left:120px;
    margin-bottom:20px;
    font-size:18px;
    font-weight:300;
    color:rgb(60,60,60);
`
export const TitleTableProduct = styled.p`
    ${mxw(1500)}{
        margin-left:-85px;
    }
`
export const TitleTablePrice = styled.p`
    margin-left:auto;
    margin-right:372px;
    ${mxw(1500)}{
        margin-right:160px;
    }
`
export const EmptyImg = styled.img`
    opacity:.4;
    height:335px;
    ${mxw(500)}{
        height:280px;
    }
`
export const EmptyText = styled.h1`
    font-weight:300;
    color:rgb(160,160,160);
    margin-top:22px;
    margin-left:20px;
    font-size:17.4px;
    ${mxw(500)}{
        font-size:15px;
    }
`
export const EmptyView = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    align-items:center;
    margin-top:110px;
    ${mxw(500)}{
        margin-top:90px;
    }
`
export const CarRightContent = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-top:-40px;
    padding-left:65px;
    padding-right:65px;
    ${mxw(1500)}{
        padding-left:38px;
    padding-right:15px;
    }
    ${mxw(1200)}{
        padding-left:28px;
    padding-right:15px;
    }
    ${mxw(1000)}{
        margin-top:90px;
        padding:0px;
        align-items:center;
    }
`
export const CarRightContentTitle = styled.h1`
    font-weight:600;
    font-size:22px;
    color:black;
    ${mxw(1000)}{
        margin-left:auto;
        margin-right:40px;
        font-size:19px;
    }
`
export const CarRightContentPrice = styled.h1`
    font-weight:300;
    margin-top:7px;
    color:rgb(90,90,90);
    font-size:24px;
    ${mxw(1000)}{
        margin-left:auto;
        margin-right:40px;
        font-size:22px;
    }
`
export const RealizarPedido = styled.button`
    position:absolute;
    bottom:0;
    margin-bottom:40px;
    background:black;
    cursor:pointer;
    color:white;
    padding:15px 28px;
    border-radius:7px;
    width:85%;
    font-weight:300;
    margin-left:2.5vw;
    font-size:17px;
    outline:none;
    border:none;
    transition:.6s;
    &:hover{
        background:rgb(60,60,60);
    }
    ${mxw(1000)}{
        margin-bottom:15px;
        position:absolute;
        left:50%;
        transform:translate(-50%,-50%);
        -ms-transform:translate(-50%,-50%);
        margin-left:0px;
    }
    @media screen and (max-height:800px){
        margin-bottom:28px;
    }
    @media screen and (max-height:799px){
        margin-bottom:40px;
    }
    }
`
export const CheckoutView = styled.div`
    overflow:scroll;
    height:62%;
    margin-bottom:30px;
    padding-bottom:20px;
::-webkit-scrollbar-thumb {
  background:transparent;
}
    ${mxw(1000)}{
        overflow:hidden;
        height:max-content;
    }
    ${mxw(500)}{
        overflow:hidden;
        height:max-content;
    }
`
export const CheckoutItem = styled.p`
    padding-bottom:18px;
    border-bottom:1px solid rgb(215,215,215);
    width:78%;
    padding-top:18px;
    display:flex;
    ${mxw(1717)}{
    }
    ${mxw(1000)}{
        width:85vw;
        margin-top:24px;
    }
    ${mxw(500)}{
        width:79vw;
    }
`
export const CheckoutPrice = styled.p`
    margin-left:auto;
    ${mxw(1717)}{
        padding-left:25px;
    }
`
export const CheckoutTitle = styled.h1`
    margin-top:-35px;
    margin-bottom:13px;
    font-weight:300;
    font-size:23px;
    ${mxw(500)}{
        margin-top:-45px;
    }
    @media screen and (max-height:800px){
        display:none;
    }
    @media screen and (max-height:799px){
        display:block;
    }
`
