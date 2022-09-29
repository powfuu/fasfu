import styled from "styled-components"
import {ArrowIosBackOutline} from "@styled-icons/evaicons-outline/ArrowIosBackOutline"
const mxw = (width) =>{
  return `@media (max-width: ${width}px)`
}
export const ProductoContent = styled.div`
    height:100vh;
    width:100%;
    overflow:hidden;
    top:0;
    position:fixed;
    background:rgb(245,245,245);
    z-index:12;
    background:white;
    transform: scale(${p=>p.scale});
    transition:.4s all ease-in-out;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    ${mxw(1010)}{
        overflow:scroll;
::-webkit-scrollbar-thumb {
  background:transparent;
}
    }
`
export const ProductView = styled.div`
    width:100%;
`
export const ProductViewTopTitle = styled.div`
    display:flex;
    flex-direction:row;
    padding-left:20px;
    padding-top:20px;
    gap:13.5px;
    width:100%;
    border-bottom:1px solid rgb(235,235,235);
    padding-bottom:15px;
`
export const ProductName = styled.h1`
    color:black;
    font-size:22px;
    margin-top:7px;
    ${mxw(764)}{
    }
    ${mxw(700)}{
        font-size:19.5px;
        margin-left:-2px;
    }
    ${mxw(470)}{
        font-size:17.5px;
        margin-left:-5px;
    }
`
export const CloseProduct = styled(ArrowIosBackOutline)`
    color:black;
    height:36px;
    cursor:pointer;
    padding:3px 6px;
    margin-top:3px;
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
export const AddProduct = styled.button`
    margin-left:auto;
    margin-right:40px;
    background:black;
    color:white;
    border-radius:7px;
    padding:5.5px 16px;
    border:none;
    font-size:15px;
    outline:none
    cursor:pointer;
    transition:.5s;
    &:hover{
        background:transparent;
        border:1px solid black;
        color:black;
        cursor:pointer;
    }
    ${mxw(700)}{
        font-size:14px;
    }
    ${mxw(470)}{
        font-size:13px;
    }
`
export const ProductDivition = styled.div`
    display:flex;
    flex-direction:row;
    gap:20px;
    width:100%;
    height:100vh;
    ${mxw(1010)}{
        flex-direction:column;
        align-items:center;
        height:max-content;
    }
`
export const ProductLeft = styled.div`
    padding-left:70px;
    padding-top:20px;
    padding-right:30px;
    overflow:scroll;
::-webkit-scrollbar-thumb {
  background:transparent;
}
    ${mxw(1010)}{
        width:100%;
        padding-left:0px;
        padding-right:0px;
    }
`
export const ProductRight = styled.div`
    padding-left:110px;
    padding-top:40px;
    width:50%;
    overflow:scroll;
    padding-bottom:100px;
    padding-right:40px;
    ${mxw(1200)}{
        padding-left:0px;
        padding-right:50px;
    }
    ${mxw(1010)}{
        padding:0;
        padding-left:130px;
        width:100%;
        padding-bottom:80px;
    }
    ${mxw(700)}{
        padding-left:60px;
        margin-top:50px;
    }
::-webkit-scrollbar-thumb {
  background:transparent;
}
`
export const ProductImg = styled.img`
    border-radius:12px;
    height:405px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    width:405px;
    background:transparent;
    object-fit:cover;
    object-position:center;
    margin-bottom:7px;
    margin-top:8.5px;
    ${mxw(700)}{
        height:315px;
        width:315px;
        margin-top:8px;
    }
`
export const ProductDesc = styled.p`
    color:rgb(80,80,80);
    margin-top:18px;
    line-height:29px;
    text-align:center;
    font-size:15px;
    border-bottom:1px solid rgb(230,230,230);
    padding-bottom:35px;
    white-space:wrap;
    ${mxw(1010)}{
        padding-left:5%;
        padding-right:9.25%;
    }
    ${mxw(700)}{
        font-size:14px;
    }
`
export const DuplicatorText = styled.h1`
    color:rgb(45,45,45);
    margin-top:45px;
    font-size:18px;
    text-align:center;
    ${mxw(500)}{
        padding-right:20px;
        padding-left:20px;
    }
`
export const Duplicator = styled.div`
    display:flex;
    gap:24px;
    justify-content:center;
    margin-top:25px;
`
export const DuplicatorMinus = styled.h1`
    background:#e5f2ff;
    color:dodgerblue;
    border-radius:100%;
    width:50px;
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:28px;
    transition:.6s;
    cursor:pointer;
    font-weight:400;
    &:hover{
        opacity:.5;
    }
    ${mxw(500)}{
        font-size:25px;
        width:45px;
        height:45px;
    }
`
export const DuplicatorValue = styled.p`
    font-size:32px;
    color:rgb(45,45,45);
    ${mxw(500)}{
        font-size:28px;
    }
`
export const DuplicatorPlus = styled.h1`
    transition:.6s;
    cursor:pointer;
    background:#e5f2ff;
    color:dodgerblue;
    width:50px;
    height:50px;
    border-radius:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:28px;
    font-weight:400;
    &:hover{
        opacity:.5;
    }
    ${mxw(500)}{
        font-size:25px;
        width:45px;
        height:45px;
    }
`
export const SectionPriceTotalView = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:20px;
    margin-left: auto;
    gap:8px;
    ${mxw(1010)}{
        margin-right:120px;
        overflow:hidden;
    }
    ${mxw(700)}{
        margin-right:50px;
    }
    ${mxw(600)}{
        margin-right:20px;
    }
    ${mxw(520)}{
        margin-right:50px;
    }
`
export const SectionPriceTotal = styled.h1`
    font-size:23px;
    color:rgb(55,55,55);
    font-weight:500;
    ${mxw(420)}{
        font-size:22px;
    }
`
export const ProductPrice = styled.h1`
    font-size:21px;
    text-align:right;
    ${mxw(420)}{
        font-size:20px;
    }
`
export const LeftRelative = styled.div`
    position:relative;
    z-index:1;
    overflow:scroll;
    height:910px;
    width:660px;
    display:flex;
    flex-direction:column;
    align-items:center;
    ${mxw(1740)}{
        width:100%;
    }
    ${mxw(1010)}{
    overflow:hidden;
        height:max-content;
        width:100%;
    }
`
export const GoUp = styled(ArrowIosBackOutline)`
    color:white;
    background:black;
    height:36px;
    cursor:pointer;
    padding:8px 6px;
    margin-top:15px;
    display:none;
    border-radius:8px;
    transition:.5s;
    position:absolute;
    right:0;
    margin-right:55px;
    transform:rotate(90deg);
    &:hover{
        background:transparent;
        color:black;
        border:1px solid black;
    }
    ${mxw(1010)}{
        display:block;
    }
    ${mxw(700)}{
        height:32px;
    }
`
export const LogoBottom = styled.img`
    float:left;
    height:120px;
    display:none;
    margin-top:-16.5px;
    opacity:.7;
    ${mxw(1010)}{
        display:block;
    }
`
export const Motogato = styled.img`
    height:200px;
    position:absolute;
    opacity:.35;
    margin-left:10%;
    ${mxw(1400)}{
        margin-left:20%;
    }
    ${mxw(1010)}{
        height:200px;
        margin-top:-115px;
        margin-left:20%;
    }
    ${mxw(700)}{
        height:180px;
        margin-left:22%;
        margin-top:-70px;
    }
    ${mxw(520)}{
        margin-left:35%;
    }
    ${mxw(420)}{
        height:170px;
    }
    ${mxw(380)}{
        height:160px;
        margin-top:-45px;
    }
    ${mxw(370)}{
        height:150px;
        margin-left:45%;
    }
`
export const SectionPriceCatView = styled.div`
    display:flex;
    width:110%;
    align-items:center;
    margin-top:40px;
    margin-left:-150px;
    justify-content:flex-start;
    ${mxw(1400)}{
    width:120%;
        margin-top:30px;
    }
    ${mxw(1010)}{
    width:120%;
        margin-top:30px;
    }
    ${mxw(700)}{
        width:115%;
        margin-top:50px;
    }
    ${mxw(520)}{
        width:140%;
        margin-top:75px;
    }
    ${mxw(370)}{
        width:150%;
    }
`
