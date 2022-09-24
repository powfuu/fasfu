import { useState } from "react"
import * as c from './countriesComponents'
import spainflag from "../../assets/countries/spain.webp"
import peruflag from "../../assets/countries/peru.webp"
import colombiaflag from "../../assets/countries/colombia.webp"
import mexflag from "../../assets/countries/mexico.webp"
import logo from "../../assets/logos/logo0.webp"
export default function Countries(prop:any){
  const [countries]: Array<any>= useState([
    { id:0, title:"Colombia", flag:colombiaflag },
    { id:1, title:"México", flag:mexflag},
    { id:2, title:"Perú", flag:peruflag},
    { id:3, title:"España", flag:spainflag},
  ])
  const chooseCountry = (country:string) =>{
    localStorage.setItem("@fasfu: countrySelected", country)
    prop.setCountrySelectionState(country)
  }
  return(
    <div>
    <c.CountriesView>
      <c.CountriesTitle data-aos="zoom-in-up" data-aos-delay="200">¿Desde dónde nos visitas?</c.CountriesTitle>
      <c.CountriesContent data-aos="fade-up" data-aos-offset="-999">
        {
          countries.map((co:any)=>{
            return(
              <c.Country onClick={()=>chooseCountry(co.title)}>
                <c.CountriesCountry src={co.flag}/>
                <c.CountriesCountryVal id="cpc">{co.title}</c.CountriesCountryVal>
              </c.Country>
            )
         })
        }
      </c.CountriesContent> 
      <c.CountriesLogo data-aos="zoom-in-left" src={logo}/>
    </c.CountriesView>
<c.Wave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 256"><path fill="#0307A6" fill-opacity="1" d="M0,64L48,53.3C96,43,192,21,288,32C384,43,480,85,576,122.7C672,160,768,192,864,176C960,160,1056,96,1152,69.3C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></c.Wave>
    </div>
  )
}
