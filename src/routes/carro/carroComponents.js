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
