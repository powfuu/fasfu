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
    z-index:12;
    background:white;
    margin-left:${p=>p.mgl}vw;
    transition:.6s all ease-in-out;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    display:flex;
    flex-direction:row;
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
    margin-top:20px;
    overflow:scroll;
::-webkit-scrollbar-thumb {
  background:transparent;
}
`
export const CarRightView = styled.div`
    width:30vw;
    height:100vh;
    background:#F6F6F5;
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
`
export const CarProductImg = styled.img`
    height:95px;
    width:95px;
    border-radius:12px;
`
export const CarProductName = styled.h1`
    font-size:22.5px;
`
export const CarProductPrice = styled.h2`
    right:0;
    position:absolute;
    bottom:0;
    margin-bottom:-2px;
    margin-right:130px;
    font-weight:400;
    font-size:18px;
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
`
export const CarProductAddonsView = styled.div`
    display:flex;
    gap:12px;
    margin-top:24px;
    flex-wrap:wrap;
    margin-right:280px;
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
    ${mxw(700)}{
        height:30px;
    }
    ${mxw(500)}{
        height:35px;
    }
    ${mxw(400)}{
        height:40px;
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
    margin-top:43.5px;
    font-size:33px;
    font-weight:700;
    margin-left:172px;
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

`
export const TitleTablePrice = styled.p`
    margin-left:auto;
    margin-right:372px;
`
