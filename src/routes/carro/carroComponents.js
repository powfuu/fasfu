import styled from "styled-components"
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
    padding-top:80px;
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
    padding:40px 0px;
    padding-bottom:15px;
    margin:0px 120px;
    border-bottom:${p=>p.bb};
`
export const CarProductImg = styled.img`
    height:85px;
    width:85px;
    border-radius:12px;
`
export const CarProductName = styled.h1`
    font-size:22.5px;
`
export const CarProductPrice = styled.h2`
    right:0;
    position:absolute;
    bottom:0;
    margin-bottom:5px;
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
    margin-top:-20px;
    position:absolute;
    height:40px;
    width:54px;
`
export const CarProductAddonsView = styled.div`
    display:flex;
    gap:12px;
    margin-top:15px;
    flex-wrap:wrap;
    margin-right:280px;
`
export const CarProductAddon = styled.h1`
    font-size:13.5px;
    font-weight:300;
    padding:8px;
    border:1px solid rgb(220,220,220);
    border-radius:5px;
`
export const CarProductContent = styled.div`
    display:flex;
    gap:18px;
`
export const CarProductRightContent = styled.div`
    width:100%;
    position:relative;
`
