import styled from "styled-components"

const mxw = (width) =>{
  return `@media (max-width: ${width}px)`
}

export const CountriesView = styled.div`
  position:absolute;
  height:100%;
  width:100%;
  transform:translate(-50%,-50%);
  -ms-transform:translate(-50%,-50%);
  left:50%; 
  top:50%;
  background:white;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  ${mxw(1000)}{
    justify-content:initial;
  }
`
export const CountriesTitle = styled.h1`
  margin-top:-120px;
  margin-bottom:105px;
  font-weight:700;
  padding-left:60px;
  padding-right:60px;
  text-align:center;
  overflow-y:hidden;
  height:60px;
  ${mxw(1000)}{
    margin-top:212px;
    margin-bottom:30px;
  }
    ${mxw(700)}{
        font-size:25px;
        margin-top:205px;
        margin-bottom:-15px;
    }
  ${mxw(532)}{
    height:120px;
  }
  ${mxw(363)}{
    height:160px;
  }
`
export const CountriesLogo = styled.img`
  position:absolute;
  top:0;
  right:0;
  height:190px;
  width:190px;
  margin-right:42px;
  margin-top:18px;
  ${mxw(1000)}{
    left:50%;
    margin-top:22px;
    margin-right:0px;
    margin-left:-84.5px;
    height:180px;
    width:180px;
  }
    ${mxw(700)}{
        height:150px;
        width:150px;
        margin-left:-65px;
    }
`
export const CountriesContent = styled.div`
  display:flex;
  gap:55px;
    overflow:hidden;
  ${mxw(1000)}{
    gap:35px;
    padding-bottom:115px;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    padding-left:22px;
    padding-right:22px;
  }
    ${mxw(700)}{
        gap:15px;
    }
  ${mxw(500)}{
    padding-bottom:140px;
  }
`
export const Country = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:13px;
  cursor:pointer;
  padding:16px 30px;
  border-radius:14px;
  transition:.3s;
  &:hover{
    background:#e5f2ff;
  }
`
export const CountriesCountry = styled.img`
  height:80px;
  width:80px;
    ${mxw(700)}{
        height:60px;
        width:60px;
    }
`
export const CountriesCountryVal = styled.h3`
  font-weight:300;
  color:rgb(115,115,115);
    ${mxw(700)}{
        font-size:16px;
    }
`
export const Wave = styled.svg`
  position:fixed;
  bottom:0;
  ${mxw(500)}{
    height:11%;
  }
`
