import styled from "styled-components"

const mxw = (width) =>{
  return `@media (max-width: ${width}px)`
}

export const HomeView=styled.div`
  background:rgb(252,252,252);
`
export const InitialView=styled.div`
`
export const InitialViewSvg=styled.svg`
  height:870px;
  ${mxw(1150)}{
    height:1050px;
  }
  ${mxw(668)}{
    height:1150px;
  }
`
export const InitialViewContent = styled.div`
  position:absolute;
  display:flex;
  flex-direction:column;
  width:100%;
  margin-top:-870px;
  ${mxw(1150)}{
  margin-top:-1040px;
  }
  ${mxw(668)}{
    margin-top:-1145px;
  }
`
export const CountrySelection = styled.img`
  height:52px;
  width:52px;
  margin-right:20px;
  margin-left:35px;
  margin-top:23px;
  cursor:pointer;
`
export const CountrySelectionView = styled.div`
  position:absolute;
  background:white;
  border-radius:8px;
  margin-top:87px;
  margin-left:23px;
  z-index:5;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 24px;
  transition:.5s;
  overflow:hidden;
  display:flex;
  flex-direction:column;
  height:${prop=>prop.height}px;
`
export const CountryListSelection = styled.img`
  height:50px;
  width:50px;
  object-fit:cover;
  object-position:center;
`
export const CountrySelectionListContent = styled.div`
  cursor:pointer;
  padding:14px;
  overflow:hidden;
  transition:.5s;
  &:hover{
    background:#e5f2ff;
  }
`
export const InitialViewLogo=styled.img`
  height:80px;
  width:80px;
  margin-top:5.5px;
  ${mxw(600)}{
    display:none;
  }
`
export const InitialViewCenterLogo=styled.img`
  height:70px;
  position:absolute;
  transform:translate(-50%,-50%);
  -ms-transform:translate(-50%,-50%);
  left:50%;
  margin-top:60px;
  ${mxw(600)}{
    left:0%;
    margin-left:180px;
    margin-top:60.5px
  }
  ${mxw(360)}{
    height:60px;
    margin-left:175px;
  }
`
export const InitialViewContentTop=styled.div`
  display:flex;
`
export const InitialViewContentPresentation=styled.div`
  display:flex;
  width:90%;
  ${mxw(1150)}{
    flex-direction:column;
    align-items:center;
    padding-left:50px;
    text-align:center;
  }
  ${mxw(1280)}{
    width:100%;
  }
`
export const RightImageView = styled.div`
  width:90%;
  overflow-y:hidden;
  margin-right:-20px;
  ${mxw(1350)}{
    width:100%;
  }
  ${mxw(1280)}{
    margin-right:50px;
  }
  ${mxw(1290)}{
    width:130%;
  }
`
export const InitialViewContentPresentationDesc=styled.p`
  color:rgb(210,210,210);
  text-align:center;
  margin-top:-112px;
  font-size:16px;
  ${mxw(1150)}{
    display:none;
  }
`
export const InitialViewContentPresentationImg=styled.img`
  height:590px;
  width:100%;
  object-fit:cover;
  margin-top:-105px;
  ${mxw(1150)}{
    width:500px; 
    margin-left:0px;
    margin-top:-135px;
    object-fit:contain;
  }
  ${mxw(554)}{
    margin-top:-175px;
    margin-left:-35px;
    width:400px;
  }
  ${mxw(428)}{
    width:320px;
    margin-top:-185px;
    margin-left:-40px;
  }
`
export const InitialViewContentTitle=styled.h1`
  text-align:left;
  font-size:38px;
  margin-top:80px;
  ${mxw(1150)}{
    text-align:center;
    margin-top:50px;
  }
  ${mxw(668)}{
    margin-top:40px;
  }
  ${mxw(428)}{
    font-size:26px;
  }
`
export const InitialViewContentDesc=styled.p`
  text-align:left;
  font-size:18.5px;
  color:rgb(220,220,220);
  ${mxw(1150)}{
    text-align:center;
  }
  ${mxw(428)}{
    font-size:15.5px;
    margin-top:-5px;
  }
`
export const InitialViewContentButton=styled.span`
  background:white;
  border-radius:100%;
  padding:14px 18px;
  cursor:pointer;
  color:#0307a6;
  font-size:35px;
  display:flex;
  align-items:center;
  justify-content:center;
  width:max-content;
  margin-top:45px;
  margin-left:270px;
  ${mxw(1223)}{
    margin:20px auto;
  }
  ${mxw(1150)}{
    margin:30px auto;
  }
  ${mxw(428)}{
    margin-top:15px;
    margin-bottom:15px;
  }
`
export const InitialViewContentTitleLeft=styled.div`
  color:white;
  display:flex;
  flex-direction:column;
  margin-left:180px;
  margin-right:180px;
  gap:25px;
  padding:20px;
  position:relative;
  ${mxw(1350)}{
    margin-left:50px;
  }
  ${mxw(1350)}{
    margin-top:-40px;
  }
  ${mxw(1150)}{
    margin:0 auto;
    margin-left:70px;
    margin-right:70px;
  }
  ${mxw(850)}{
    margin-left:20px;
    margin-right:80px;
  }
  ${mxw(540)}{
    margin-left:0px;
  }
`
export const LuisImg = styled.img`
  position:absolute;
  opacity:0.3;
  height:650px;
  margin-left:380px;
  margin-top:-925px;
  ${mxw(1520)}{
    margin-left:240px;
  }
  ${mxw(1350)}{
    margin-left:120px;
  }
  ${mxw(1150)}{
    height:550px;
    margin-right:80px;
    margin-left:0px;
    right:0;
    margin-top:-1080px;
  }
  ${mxw(600)}{
    margin-right:20px;
    height:500px;
  }
`
export const CategoriesContent = styled.div`
  margin-top:-305px;
`
export const CategoriesView = styled.div`
  margin-right:50px;
  margin-left:50px;
  margin-bottom:55px;
  padding-top:10px;
  ${mxw(365)}{
    margin-right:20px;
    margin-left:20px;
  }
`
export const TopTitleImg = styled.img`
  height:44px;
  margin-right:-6px;
  margin-top:-2.5px;
  width:44px;
  position:absolute;
  ${mxw(444)}{
    margin-top:5px !important;
  }
`
export const CategoryTitle = styled.h1`
  padding-left:20px;
  color:rgb(120,120,120);
  font-weight:300;
  font-size:25px;
  margin-left:34px;
  margin-right:20px;
`
export const ExpandCategories = styled.h3`
  margin-left:auto;
  border:1px solid #0307a6;
  border-radius:8px;
  padding: 10px 14px;
  color:#0307a6;
  font-weight:400;
  cursor:pointer;
  transition:.3s;
  margin-right:60px;
    background:#0307a6;
    color:white;
  &:hover{
    background:transparent;
    color:#0307a6;
  }
  white-space:nowrap;
  ${mxw(770)}{
    margin-right:10px;
  }
  ${mxw(712)}{
    max-height:26px;
  }
  ${mxw(700)}{
    min-width:20px;
    margin-right:-0px;
  }
`
export const ExpandCategoriesContent = styled.div`
  display:flex;
  gap:5px;
  flex-wrap:nowrap;
  ${mxw(700)}{
    p{
      display:none;
  } 
  }
`
export const TopTitleCategory = styled.div`
  display:flex;
  padding-top:10px;
`
export const CategoryView = styled.div`
  display:flex;
  gap:30px;
  width:100%;
  flex-wrap:wrap;
  transition:.5s all ease-in-out;
  ${mxw(1500)}{
    align-items:center;
    justify-content:center;
  }
`
export const Category = styled.div`
  margin-top:50px;
  width:265px;
  height:260px;
  cursor:pointer;
  padding-top:45px;
  padding-bottom:45px;
  background:white;
  border-radius:14px;
  position:relative;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  color:white;
  transition:.3s;
  &:hover{
    background:#e5f2ff;
  }
`
export const CategoryAbs = styled.div`
  position:absolute;
  z-index:1;
  display:flex;
  align-items:center;
  flex-direction:column;
  gap:15px;
  justify-content:center;
  width:100%;
`
export const ProductTitle = styled.h1`
  text-align:center;
  font-size:19px;
  margin-top:5px;
  margin-right:14.5px;
  margin-left:14.5px;
  height:55px;
`
export const ProductDesc = styled.h3`
  text-align:center;
  color:rgb(225,225,225);
  font-weight:400;
  margin-top:-36px;
  font-size:14px;
  height:55px;
  margin-left:20px;
  margin-right:20px;
`
export const ProductImg = styled.img`
  height:120px;
  width:140px;
  object-fit:cover;
  border-radius:20px;
  margin-top:12px;
`
export const ProductQuickAdd = styled.button`
  text-align:center;
  border:none;
  display:flex;
  background:transparent;
  cursor:pointer;
  color:white;
  color:rgb(190,190,190);
  margin-top:-10px;
  transition:.4s;
  &:hover{
    color:white;
  }
`
export const ProductWave = styled.svg`
  position:absolute;
  bottom:0;
  height:460px;
`
export const CategoryPrice = styled.h1`
  color:black;
  font-weight:500;
  float:right;
  margin-left:auto;
  margin-right:16px;
  font-size:19px;
  margin-top:-30px;
`
export const FooterView = styled.div`
  overflow:hidden;
  margin-top:-80px;
  height:700px;
    position:relative;
`
export const FooterWave = styled.svg`
  height:100%;
    position:absolute;
`
export const FooterWave1 = styled.svg`
  height:100%;
    position:absolute;
    margin-top:30px;
`
export const FooterWave2 = styled.svg`
  height:100%;
    position:absolute;
    z-index:2;
    margin-top:40px;
`
export const FooterContent = styled.div`
    position:absolute;
    display:flex;
    width:100%;
    z-index:3;
`
export const FooterContentAri = styled.img`
    height:520px;
    margin-left:auto;
    margin-right:30px;
    margin-top:130px;
`
export const Logo3 = styled.img`
    height:250px;
    width:250px;
    margin-top:390px;
    margin-left:60px;
    opacity:.7;
`
export const Frase = styled.h1`
    color:white;
    font-weight:300;
    font-size:25px;
    color:rgb(210,210,210);
    line-height:55px;
    white-space:nowrap;
`
export const FooterCenter = styled.div`
    margin-left: auto;
    margin-right:auto;
    transform:translate(-50%,-50%);
    -ms-transform:translate(-50%,-50%);
    position:absolute;
    height:160px;
    left:50%;
    margin-top:530px;
    text-align:center;
    .bx.bxs-quote-alt-right{
        margin-left:10px;
        margin-bottom:5px;
    }
    .bx.bxs-quote-alt-left{
        margin-right:10px;
        margin-bottom:5px;
    }
`
export const SocialNetworks=styled.div`
    display:flex;
    gap:35px;
    margin-top:67px;
    align-items:center;
    justify-content:center;
    i{
        color:white;
        font-size:40px;
        cursor:pointer;
    }
`
