import styled from "styled-components"
export const ProductoContent = styled.div`
    height:100vh;
    width:100vw;
    top:0;
    position:fixed;
    z-index:12;
    background:white;
    transform: scale(${p=>p.scale});
    transition:.4s all ease-in-out;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`
