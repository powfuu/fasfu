import styled from "styled-components"
import {ArrowIosBackOutline} from "@styled-icons/evaicons-outline/ArrowIosBackOutline"
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
    margin-top:7.5px;
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
`
export const AddProduct = styled.button`
    margin-left:auto;
    margin-right:40px;
    background:black;
    color:white;
    border-radius:7px;
    padding:5.5px 17px;
    border:none;
    font-size:15.5px;
    outline:none
    cursor:pointer;
    transition:.5s;
    &:hover{
        background:transparent;
        border:1px solid black;
        color:black;
        cursor:pointer;
    }
`
export const ProductDivition = styled.div`
    display:flex;
    flex-direction:row;
    gap:20px;
    width:100%;
    height:100vh;
`
export const ProductLeft = styled.div`
    padding-left:70px;
    padding-top:20px;
    padding-right:30px;
`
export const ProductRight = styled.div`
    padding-left:120px;
    padding-top:40px;
    width:50%;
    overflow:scroll;
    padding-bottom:100px;
    padding-right:40px;

::-webkit-scrollbar-thumb {
  background:transparent;
}
`
export const ProductImg = styled.img`
    border-radius:12px;
    height:405px;
    width:405px;
    object-fit:cover;
    object-position:center;
    margin-left:120px;
    margin-top:27.5px;
`
export const ProductDesc = styled.p`
    color:rgb(80,80,80);
    margin-top:18px;
    max-width:660px;
    line-height:29px;
    text-align:center;
    font-size:15px;
`
export const DuplicatorText = styled.h1`
    color:rgb(45,45,45);
    margin-top:60px;
    font-size:18px;
    text-align:center;
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
`
export const DuplicatorValue = styled.p`
    font-size:32px;
    color:rgb(45,45,45);
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
`
export const SectionPriceTotalView = styled.div`
    display:flex;
    flex-direction:column;
    float:right;
    margin-top:40px;
    gap:8px;
`
export const SectionPriceTotal = styled.h1`
    font-size:23px;
    color:rgb(55,55,55);
    font-weight:500;
`
export const ProductPrice = styled.h1`
    font-size:21px;
    text-align:right;
`
export const Motogato = styled.img`
    position:absolute;
    transform:translate(-50%,-50%);
    -ms-transform:translate(-50%,-50%);
    bottom:0;
    margin-bottom:-90px;
height:250px;
    opacity:.45;
    left:0;
    margin-left:150px;
`
export const LeftRelative = styled.div`
    position:relative;
    z-index:1;
`
