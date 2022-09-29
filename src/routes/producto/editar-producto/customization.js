import styled from "styled-components"
const mxw = (width) =>{
  return `@media (max-width: ${width}px)`
}
const mnw = (width) =>{
  return `@media (min-width: ${width}px)`
}
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
    width:100%;
`
export const Section = styled.div`
    border-bottom:1px solid #E6EBF1;
    padding-bottom:20px;
    padding-top:20px;
    width:700px;
    padding-left:20px;
    border-radius:12px;
    transition:.6s;
    cursor:pointer;
    text-overflow:ellipsis;
    background:${p=>p.bg};
    color:${p=>p.col};
    ${mxw(1741)}{
        width:95%;
    }
    ${mnw(1111)}{
    &:hover{
        background:#e5f2ff;
        color:dodgerblue;
    }
    }
    ${mxw(1010)}{
        width:78%;
    }
    ${mxw(700)}{
        width:81%;
    }
    ${mxw(700)}{
        font-size:15.5px;
    }
    ${mxw(400)}{
        width:79%;
    }
`
export const SectionBehind = styled.div`
    width:100%;
    border-bottom:1px solid #E6EBF1;
    padding-bottom:20px;
    border-radius:12px;
    padding-top:20px;
    padding-left:20px;
    transition:.6s;
    text-overflow:ellipsis;
    cursor:pointer;
    background:${p=>p.bg};
    color:${p=>p.col};
    ${mnw(1111)}{
    &:hover{
        background:#e5f2ff;
        color:dodgerblue;
    }
    }
    ${mxw(700)}{
        font-size:15.5px;
    }
`
export const SectionB = styled.div`
    position:relative;
    width:700px;
    border-radius:12px;
    text-overflow:ellipsis;
    ${mxw(1741)}{
        width:95%;
    }
    ${mxw(1580)}{
        padding-right:40px;
    }
    ${mxw(1010)}{
        width:83%;
    }
    ${mxw(700)}{
        width:86%;
    }
    ${mxw(700)}{
        font-size:15.5px;
    }
    ${mxw(400)}{
        width:80%;
    }
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
    ${mxw(700)}{
        font-size:18px;
    }
    ${mxw(440)}{
        padding-right:40px;
    }
`
export const SectionViewDesc = styled.h3`
    margin-bottom:12px;
    font-size:15.5px;
    margin-left:1.25px;
    color:rgb(110,110,110);
    font-weight:400;
    ${mxw(700)}{
        font-size:14px;
        margin-top:-3px;
    }
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
    ${mxw(1010)}{
        margin-right:120px;
    }
    ${mxw(700)}{
        font-size:14px;
        margin-right:60px;
    }
`
export const SectionPrice = styled.p`
    padding-top:8px;
    color:rgb(140,140,140);
    ${mxw(700)}{
        font-size:15px;
    }
`
export const SectionPlusMinusInside = styled.div`
    float:right;
    margin-top:-48px;
    display:flex;
    flex-direction:row;
    gap:22px;
    display:${p=>p.display};
    margin-right:${p=>p.mgr}px;
    position:absolute;
    right:0;
    ${mxw(1580)}{
        gap:15px;
        margin-top:-40px;
        margin-right:45px;
    }
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

    ${mnw(1111)}{
    &:hover{
        opacity:.5;
    }
    }
    ${mxw(1580)}{
        height:24px;
        width:27px;
        font-size:17px;
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
    ${mnw(1111)}{
    &:hover{
        opacity:.5;
    }
    }
    ${mxw(1580)}{
        height:24px;
        width:27px;
        font-size:17px;
    }
`
export const SectionInsideValue = styled.h3`
    margin-top:3px;
    font-weight:500;
    color:dodgerblue;
    ${mxw(1580)}{
        margin-top:1.5px;
        font-size:15.5px;
    }
`
