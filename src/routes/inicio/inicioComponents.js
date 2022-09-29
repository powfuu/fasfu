import styled from "styled-components"
import Skeleton from 'react-loading-skeleton'
import {ArrowDownwardOutline} from "@styled-icons/evaicons-outline/ArrowDownwardOutline"

const mxw = (width) =>{
  return `@media (max-width: ${width}px)`
}
export const Skel = styled(Skeleton)`
`
export const CategoryLoading = styled.div`
    margin-top:35px;
    margin-left:50px;
`
export const CategoryLoadingView = styled.div`
    display:flex;
    gap:80px;
    flex-wrap:wrap;
    ${mxw(1539)}{
        justify-content:center;
        text-align:center;
    }
    ${mxw(779)}{
        gap:20px;
    }
`
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
border: 0; border-width: 0; border: none; border-style: none;
  margin-right:20px;
  margin-left:35px;
  margin-top:23px;
  cursor:pointer;
    ${mxw(600)}{
        height:45px;
        width:45px;
        margin-top:19px;
    }
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
  height:60px;
  position:absolute;
  transform:translate(-50%,-50%);
  -ms-transform:translate(-50%,-50%);
  left:50%;
  margin-top:60px;
    margin-left:25px;
  ${mxw(600)}{
    left:0%;
    margin-left:152px;
        margin-top:53.5px;
        height:52px;
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
  font-size:15px;
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
  ${mxw(440)}{
    width:380px;
    margin-top:-155px;
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
  ${mxw(440)}{
    font-size:24px;
  }
`
export const InitialViewContentDesc=styled.p`
  text-align:left;
  font-size:18.5px;
  color:rgb(220,220,220);
  ${mxw(1150)}{
    text-align:center;
  }
  ${mxw(440)}{
    font-size:14.85px;
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
    transition:.4s all ease-in-out !important;
        &:hover{
            background:transparent;
            border:1px solid rgb(253,253,253);
            color:rgb(253,253,253);
    }
  ${mxw(1223)}{
    margin:20px auto;
  }
  ${mxw(1150)}{
    margin:30px auto;
  }
  ${mxw(440)}{
    margin-top:15px;
    margin-bottom:15px;
        font-size:30px;
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
  opacity:0.3 !important;
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
  ${mxw(440)}{
        margin-top:-380px;
    }
`
export const CategoriesView = styled.div`
  margin-right:50px;
  margin-left:50px;
  margin-bottom:55px;
  padding-top:10px;
    ${mxw(565)}{
        margin-right:20px;
        margin-left:20px;
    }
  ${mxw(365)}{
    margin-right:20px;
    margin-left:15px;
  }
`
export const TopTitleImg = styled.img`
  height:44px;
  margin-right:-6px;
  margin-left:10px;
  margin-top:-2.5px;
  width:44px;
  position:absolute;
  ${mxw(444)}{
    margin-top:0px;
  }
`
export const CategoryTitle = styled.h1`
  padding-left:30px;
  color:rgb(120,120,120);
  font-weight:300;
  font-size:22px;
  margin-left:34px;
  margin-right:20px;
span{
${mxw(1000)}{
    font-size:24px !important;
}
}
${mxw(1000)}{
    font-size:18px;
    margin-top:5px;
}
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
export const ArrowBottom = styled(ArrowDownwardOutline)`
    width:20px;
    height:20px;
    margin-top:3.5px;
`
export const ArrowTop = styled(ArrowDownwardOutline)`
    width:20px;
    height:20px;
    margin-top:3.5px;
    transform:rotate(180deg);
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
    overflow-y:hidden;
    transition: all .8s ease-in-out;
    opacity:0;
  ${mxw(1500)}{
    align-items:center;
    justify-content:center;
  }
    ${mxw(759)}{
        gap:15px;
    }
    ${mxw(432)}{
        gap:13px;
    }
`
export const CategoryDesktop=styled.div`
    ${mxw(759)}{
        display:none;
    }
`
export const Category = styled.div`
  margin-top:50px;
  width:200px;
  height:205px;
  cursor:pointer;
  padding-top:25px;
  padding-bottom:45px;
  background:white;
  border-radius:14px;
  position:relative;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  color:white;
    overflow:hidden;
  transition:.3s;
  &:hover{
    background:#e5f2ff;
  }
    &:hover #cp{
        color:dodgerblue;
        transition:.5s;
    }
    ${mxw(759)}{
        width:90%;
        height:60px;
  padding-top:45px;
    }
    ${mxw(432)}{
        width:95%;
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
    ${mxw(759)}{
        flex-direction:row-reverse;
    }
`
export const ProductTitle = styled.h1`
  text-align:center;
  font-size:16.25px;
  margin-top:5px;
  margin-right:10.5px;
  margin-left:10.5px;
    color:rgb(240,240,240);
  height:55px;
`
export const ProductDesc = styled.h3`
  text-align:center;
  color:rgb(225,225,225);
  font-weight:400;
  margin-top:-43px;
  font-size:13px;
  height:55px;
  margin-left:14px;
  margin-right:14px;
`
export const ProductImg = styled.img`
  height:75px;
  width:95px;
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
    #quick-add-cart{
        height:27px;
        width:27px;
        margin-top:5px;
    }
`
export const ProductWave = styled.svg`
  position:absolute;
  bottom:0;
  height:370px;
`
export const CategoryPrice = styled.h1`
  color:black;
  font-weight:500;
  float:right;
  margin-left:auto;
  margin-right:12px;
    font-size:15.25px;
  margin-top:-17px;
    position:absolute;
    right:0;
`
export const FooterView = styled.div`
  overflow:hidden;
  margin-top:-80px;
  height:700px;
    position:relative;
    ${mxw(1530)}{
        height:750px;
    }
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
    ${mxw(1530)}{
        margin-right:-40px;
    }
    ${mxw(1230)}{
        opacity:.5;
    }
    ${mxw(590)}{
        opacity:.4;
    }
    ${mxw(500)}{
        margin-right:-90px;
    }
`
export const Logo3 = styled.img`
    height:250px;
    width:250px;
    margin-top:390px;
    margin-left:60px;
    opacity:.7;
    ${mxw(1530)}{
        height:220px;
        width:220px;
        margin-top:420px;
    }
    ${mxw(1230)}{
        margin-top:490px;
        height:180px;
        width:180px;
    }
${mxw(800)}{
    margin-left:0px;
    opacity:.6;
    height:170px;
    width:170px;
    margin-top:500px;
}
    ${mxw(590)}{
        display:none;
    }
`
export const Frase = styled.h1`
    color:white;
    font-weight:300;
    font-size:24.75px;
    color:rgb(210,210,210);
    line-height:55px;
    white-space:nowrap;
    ${mxw(1530)}{
        font-size:21px;
    }
    ${mxw(800)}{
        white-space:initial;
        font-size:19px;
        margin-left:52px;
        margin-right:52px;
        text-align:center;
        line-height:40px;
    }
    ${mxw(590)}{
        margin-top:15px;
    }
    ${mxw(454)}{
        font-size:17.5px;
        margin-right:30px;
        margin-left:30px;
    }
    ${mxw(369)}{
        font-size:16px;
        margin-right:20px;
        margin-left:20px;
    }
`
export const FooterCenter = styled.div`
    margin-left: auto;
    margin-right:auto;
    transform:translate(-50%,-50%);
    -ms-transform:translate(-50%,-50%);
    position:absolute;
    height:160px;
    width:100%;
    left:50%;
    margin-top:510px;
    text-align:center;
    .bx.bxs-quote-alt-right{
        margin-right:10px;
        color:white;
        height:28px;
        margin-bottom:5.5px;
    }
    .bx.bxs-quote-alt-left{
        height:28px;
        margin-left:10px;
        margin-bottom:5.5px;
    }
`
export const SocialNetworks=styled.div`
    display:flex;
    gap:25px;
    margin-top:55px;
    align-items:center;
    justify-content:center;
    position:absolute;
    transform:translate(-50%,-50%);
    -ms-transform:translate(-50%,-50%);
    left:50%;
    top:78%;
    #i{
        color:white;
        font-size:40px;
        height:40px;
        padding:18px;
        border-radius:100%;
        transition:.3s all ease-in-out;
        &:hover{
            color:#0306a6;
            cursor:pointer;
            background:white;
        }
    ${mxw(590)}{
             height:35px;
            padding:16px;
    }
    }
    ${mxw(590)}{
        margin-top:85px;
        gap:15px;
    }
`
export const Motogato = styled.img`
    height:415px;
    opacity:.6;
    position:absolute;
    right:0;
    margin-right:60px;
    margin-top:515px;
`
export const Direction = styled.p`
    color:rgb(210,210,210);
    position:absolute;
    white-space:nowrap;
    position:absolute;
    transform:translate(-50%,-50%);
    -ms-transform:translate(-50%,-50%);
    left:50%;
    top:94%;
    z-index:5;
    font-size:15.75px;
    ${mxw(1530)}{
        margin-top:-35px;
    }
    ${mxw(432)}{
        margin-top:-50px;
        font-size:14px;
    }
`
export const IsRestaurantOpen=styled.div`
    background:${p=>p.backgroundStatus};
    z-index:10;
    width:100%;
    display:flex;
    position:fixed;
    width: max-content;
    padding-left:25px;
    padding-right:30px;
    padding-bottom:12px;
    padding-top:11px;
    border-bottom-left-radius:7.5px;
    border-bottom-right-radius:7.5px;
    gap:12px;
    right:0;
    margin-right:165px;
    transition:1s all ease-in-out;
    color: ${p=>p.colorStatus};
    margin-top:${p=>p.statusVisible}px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 4px 8px;
    p{
        font-weight:400;
        font-size:17.5px;
    }
    h1{
        font-size:25px;
        font-weight:500;
        margin-right:-5px;
        margin-left:10px;
        margin-top:-7px;
        cursor:pointer;
    }
    ${mxw(1530)}{
        display:none;
    }
`
export const IsRestaurantOpenResponsive=styled.div`
    background:${p=>p.backgroundStatus};
    z-index:10;
    display:none;
    position:fixed;
    padding-left:25px;
    padding-bottom:12px;
    padding-top:11px;
    width:100%;
    border-bottom-left-radius:7.5px;
    border-bottom-right-radius:7.5px;
    flex-direction:row;
    bottom:0;
    gap:12px;
    transition:1s all ease-in-out;
    color: ${p=>p.colorStatus};
    margin-bottom:${p=>p.statusVisible}px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 4px 8px;
    p{
        font-weight:400;
        font-size:17.5px;
            width:85%;
        ${mxw(484)}{
            font-size:15px;
            margin-top:2px;
    }
        ${mxw(432)}{
            width:80%;
    }
        ${mxw(400)}{
            font-size:13px;
            margin-top:4px;
    }
    }
    h1{
        font-size:25px;
        font-weight:500;
        margin-left:50px;
        margin-top:-6.5px;
        cursor:pointer;
        ${mxw(750)}{
            margin-left:25px;
    }
        ${mxw(615)}{
            margin-left:10px;
    }
        ${mxw(480)}{
            margin-left:0px;
            margin-right:10px;
    }
        ${mxw(400)}{
            font-size:22px;
            margin-top:-4px;
    }
    }
    ${mxw(1530)}{
        display:flex;
    }
`
export const CategoryResponsive = styled.div`
    display:none;
    height:100%;
    ${mxw(759)}{
        display:flex;
    }
`
export const ProductWaveResponsive = styled.svg`
  position:absolute;
  bottom:0;
    height:100%;
  background:#0307a6;
    width:78%;
    border-bottom-right-radius: 17px;
    border-top-right-radius: 17px;
    ${mxw(650)}{
        width:76%;
    }
    ${mxw(432)}{
        width:71%;
    }
`
export const CRLeft = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    position:absolute;
    z-index:2;
    width:70%;
    height:100%;
    margin-top:-22px;
    padding-left:25px;
`
export const CRRight = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:-55px;
    text-align:center;
    justify-content:center;
    z-index:2;
    position:absolute;
    width:30%;
    height:100%;
    right:0;
    ${mxw(650)}{
        margin-right:15px;
    }
    ${mxw(540)}{
        margin-top:-53px;
        margin-right:20px;
    }
    ${mxw(432)}{
        margin-right:20px;
    }
`
export const ProductImgResponsive = styled.img`
    height:85px;
    width:110px;
    position:absolute;
    object-fit:cover;
    object-position:center;
    border-radius:14px;
    ${mxw(540)}{
        height:70px;
        width:95px;
    }
`
export const ProductPriceResponsive = styled.h3`
    color:black;
    margin-top:128.5px;
    font-weight:500;
    margin-left:auto;
    margin-right:17px;
    font-size:15px;
    ${mxw(540)}{
        margin-right:0px;
    }
    ${mxw(532)}{
        font-size:15.25;
    }
`
export const ProductTitleResponsive = styled.h1`
  text-align:left;
  font-size:16.5px;
  color:rgb(240,240,240);
    text-overflow: ellipsis;
    white-space: nowrap;
      overflow: hidden;
height:20px;
width:250px;
${mxw(507)}{
    width:200px;
}
${mxw(507)}{
    font-size:15px;
    width:180px;
}
${mxw(507)}{
    width:160px;
}
`
export const ProductDescResponsive = styled.p`
  color:rgb(225,225,225);
  font-weight:400;
    margin-top:7px;
  font-size:12px;
    margin-right:60px;
    margin-bottom:25px;
    ${mxw(500)}{
        font-size:11px;
    }
`
export const ProductQuickAddResponsive = styled.button`
  text-align:center;
  border:none;
  display:flex;
  background:transparent;
  cursor:pointer;
  color:white;
  transition:.4s;
  &:hover{
    color:white;
  }
    ${mxw(700)}{
        display:none;
    }
    #quick-add-cart{
        height:27px;
        width:27px;
        margin-top:5px;
    }
`
