import styled from "styled-components"

export const CustomizationContent = styled.div`

`
export const SectionView = styled.div`
    margin-bottom:50px;
`
export const SectionBody = styled.div`
    display:flex;
    flex-direction:column;
    gap:15px;
    margin-top:8px;
`
export const Section = styled.div`
    width:100%;
    border-bottom:1px solid #E6EBF1;
    padding-bottom:20px;
    padding-top:20px;
    padding-left:20px;
    transition:.6s;
    cursor:pointer;
    background:${p=>p.bg};
    color:${p=>p.col};
    &:hover{
        background:#e5f2ff;
        color:dodgerblue;
    }
`
export const SectionBehind = styled.div`
    width:100%;
    border-bottom:1px solid #E6EBF1;
    padding-bottom:20px;
    border-radius:7px;
    padding-top:20px;
    padding-left:20px;
    transition:.6s;
    cursor:pointer;
    background:${p=>p.bg};
    color:${p=>p.col};
    &:hover{
        background:#e5f2ff;
        color:dodgerblue;
    }
`
export const SectionB = styled.div`
    position:relative;
    width:700px;
    border-radius:7px;
`
export const SectionTopTitle = styled.div`
    display:flex;
    width:100%;
    position:relative;
`
export const SectionTopTitleN = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`
export const SectionViewTitle = styled.h3`
    margin-bottom:15px;
`
export const SectionViewDesc = styled.h3`
    margin-bottom:12px;
    font-size:15.5px;
    margin-left:1.25px;
    color:rgb(110,110,110);
    font-weight:400;
`
export const SectionViewTag = styled.p`
    right:0;
    margin-right:0px;
    position:absolute;
    background:#E6EBF1;
    color:rgb(80,80,80);
    padding:8px 12px;
    border-radius:6px;
    font-size:15px;
`
export const SectionPrice = styled.p`
    padding-top:8px;
    color:rgb(140,140,140);
`
export const SectionPlusMinusInside = styled.div`
    float:right;
    margin-top:-50px;
    display:flex;
    flex-direction:row;
    gap:22px;
    display:${p=>p.display};
    margin-right:${p=>p.mgr}px;
    position:absolute;
    right:0;
`
export const SectionInsideMinus = styled.h3`
    transition:.6s;
    cursor:pointer;
    background:#e5f2ff;
    background:white;
    color:dodgerblue;
    width:35px;
    height:32px;
    border-radius:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    padding-bottom:3px;
    font-size:22px;
    font-weight:400;
    &:hover{
        opacity:.5;
    }
`
export const SectionInsidePlus = styled.h3`
    transition:.6s;
    cursor:pointer;
    background:#e5f2ff;
    background:white;
    color:dodgerblue;
    width:35px;
    height:32px;
    padding-bottom:3px;
    border-radius:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:20px;
    font-weight:400;
    &:hover{
        opacity:.5;
    }
`
export const SectionInsideValue = styled.h3`
    margin-top:3px;
    font-weight:500;
    color:dodgerblue;
`
