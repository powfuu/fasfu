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
`
