import { useState, useEffect, useRef } from "react";
import Countries from "./countries";
import * as c from "./inicioComponents.js";
import spainflag from "../../assets/countries/spain.png";
import peruflag from "../../assets/countries/peru.png";
import colombiaflag from "../../assets/countries/colombia.png";
import mexflag from "../../assets/countries/mexico.png";
import logo from "../../assets/logos/logo1_white.png";
import logo2 from "../../assets/logos/logo2_white.png";
import initialburger from "../../assets/initialburger.png";
import luis from "../../assets/luisillo.png";
import ari from "../../assets/arisilla.png";
import logo3 from "../../assets/logos/logo3.png"
import spaJson from "../../json/spain.json";
import colJson from "../../json/col.json";
import mexJson from "../../json/mex.json";
import perJson from "../../json/per.json";
import burger from "../../assets/products/burger.png";
import combo from "../../assets/products/combo.png";
import potato from "../../assets/products/potatos.png";
import cake from "../../assets/products/cake.png";
import beverage from "../../assets/products/beverage.png";
import motogatomochi from "../../assets/motogato.png"
import Carro from "../carro/carro"
import Product from "../producto/producto"
export default function Inicio(prop: any) {
  let date = new Date();
    let time = `${date.getHours({
        hour12: false
    })}`
  const [products, setProducts] = useState([]);
  const [currentJson, setCurrentJson] = useState([]);
  const [PSEx, setPSEx] = useState(false);
  const [BebEx, setBebEx] = useState(false);
  const [BurEx, setBurEx] = useState(false);
  const [ComEx, setComEx] = useState(false);
  const [PatEx, setPatEx] = useState(false);
  const [countrySrc, setCountrySrc]=useState(prop.countrySelectionState)
  const psRef = useRef(null);
  const bebRef = useRef(null);
  const comRef = useRef(null);
  const burRef = useRef(null);
  const patRef = useRef(null);
  const [countriesViewStatus, setCountriesViewStatus]=useState(null)
    //#00e57e is open and #ff441f is closed
  const [restaurantStatus,setRestaurantStatus]=useState(null)
  const [restaurantStatusVisible, setRestaurantStatusVisible]=useState(false)
  const countriesArr: []=[
    {
      id:0,
      country: "España",
      countryflag: spainflag,
      isSelected: 400
    },
    {
      id:1,
      country: "México",
      countryflag: mexflag,
      isSelected: 400
    },
    {
      id:2,
      country: "Colombia",
      countryflag: colombiaflag,
      isSelected: 400
    },
    {
      id:3,
      country: "Perú",
      countryflag: peruflag,
      isSelected: 400
    }
  ]
    const setDataCountry = (data: string) =>{
                 switch (data) {
                   case "España":
                     setCurrentJson(spaJson);
                     setCountrySrc(spainflag)
                         if(time >= 12){
                             setRestaurantStatus("#00e57e")
                         }else{
                             setRestaurantStatus("#ff441f")
                         }
                     break;
                   case "Perú":
                     setCurrentJson(perJson);
                     setCountrySrc(peruflag)
                         if(time >= 11){
                             setRestaurantStatus("#00e57e")
                         }else{
                             setRestaurantStatus("#ff441f")
                         }
                     break;
                   case "México":
                     setCurrentJson(mexJson);
                     setCountrySrc(mexflag)
                         if(time >= 12){
                             setRestaurantStatus("#00e57e")
                         }else{
                             setRestaurantStatus("#ff441f")
                         }
                     break;
                   case "Colombia":
                     setCurrentJson(colJson);
                     setCountrySrc(colombiaflag)
                         if(time >= 11){
                             setRestaurantStatus("#00e57e")
                         }else{
                             setRestaurantStatus("#ff441f")
                         }
                     break;
                 }
    }
  useEffect(() => {
        setRestaurantStatusVisible(true)
    setDataCountry(prop.countrySelectionState)
  }, [prop.countrySelectionState]);
  return (
      <c.HomeView> 
      {prop.countrySelectionState ? 
      <c.InitialView>
          <c.IsRestaurantOpenResponsive statusVisible={ !restaurantStatusVisible ? -200 : 0 } backgroundStatus={restaurantStatus == "#00e57e" ? "#E9FCF2" : "#ffe2e2"} colorStatus={restaurantStatus}>
              <p>{restaurantStatus == "#00e57e" ? prop.countrySelectionState == "España" ? "Disponible, Horario de atención (12 - 00:00)" : prop.countrySelectionState == "Perú" ? "Disponible, Horario de atención (10am - 11pm)" : "" : restaurantStatus == "#ff441f" ? prop.countrySelectionState == "España" ? "No Disponible, Horario de atención (12 - 00:00)" : prop.countrySelectionState == "Perú" ? "No Disponible, Horario de atención (10am - 11pm)" : null :  null}</p>
              <i class="bx bx-x" onClick={()=>setRestaurantStatusVisible(false)}></i>
    </c.IsRestaurantOpenResponsive>
          <c.IsRestaurantOpen statusVisible={ !restaurantStatusVisible ? -200 : 0 } backgroundStatus={restaurantStatus == "#00e57e" ? "#E9FCF2" : "#ffe2e2"} colorStatus={restaurantStatus}>
              <p>{restaurantStatus == "#00e57e" ? prop.countrySelectionState == "España" ? "Disponible, Horario de atención (12 - 00:00)" : prop.countrySelectionState == "Perú" ? "Disponible, Horario de atención (10am - 11pm)" : "" : restaurantStatus == "#ff441f" ? prop.countrySelectionState == "España" ? "No Disponible, Horario de atención (12 - 00:00)" : prop.countrySelectionState == "Perú" ? "No Disponible, Horario de atención (10am - 11pm)" : null :  null}</p>
              <i class="bx bx-x" onClick={()=>setRestaurantStatusVisible(false)}></i>
          </c.IsRestaurantOpen>
      <c.InitialViewSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="120 0 1440 320"
      >
      <path
      fill="#0307a6"
      fill-opacity="1"
      d="M0,192L48,208C96,224,192,256,288,256C384,256,480,224,576,213.3C672,203,768,213,864,213.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
      </c.InitialViewSvg>

      <c.LuisImg src={luis} />
      <c.InitialViewContent>
      <c.InitialViewContentTop>
      <c.CountrySelection onClick={()=> setCountriesViewStatus((prop)=>!prop)} src={countrySrc}/>
      <c.CountrySelectionView height={
        countriesViewStatus ? 335 : 0
      }>
      {
        countriesArr.map((data)=>{
          prop.countrySelectionState == data.country ? data.isSelected=200 : null
          return(
            <c.CountrySelectionListContent onClick={()=>{
              setCountriesViewStatus((prop)=>!prop)
              setTimeout(() => {
              setRestaurantStatusVisible(true)
              prop.setCountrySelectionState(data.country)
              setDataCountry(data.country)
              localStorage.setItem('@fasfu: countrySelected', data.country)
              }, 600);
            }}>
            <c.CountryListSelection src={data.countryflag}/>
            </c.CountrySelectionListContent>
          )
        })
      }
      </c.CountrySelectionView>
      <c.InitialViewLogo src={logo} />
      <c.InitialViewCenterLogo src={logo2} />
      <Carro isInCar={prop.isInCar} setIsInCar={prop.setIsInCar}/>
      <Product isInProduct={prop.isInProduct} setIsInProduct={prop.setIsInProduct}/>
      </c.InitialViewContentTop>
      <c.InitialViewContentPresentation>
      <c.InitialViewContentTitleLeft>
      <c.InitialViewContentTitle>
      Sabor único, presentación de 10 y lo mejor de todo ¡al
      alcance de tu paladar!
      </c.InitialViewContentTitle>
      <c.InitialViewContentDesc>
      Más que un simple platillo, es una obra de arte. Pan e
      ingredientes elegidos con cautela para el agrado de tu
      paladar, una porciòn exacta de carne que es cocinada el
      tiempo preciso, vegetales frescos y con tus ingredientes
      favoritos al gusto.
      </c.InitialViewContentDesc>
          <c.InitialViewContentButton onClick={()=>burRef.current.scrollIntoView({block:"start",behavior:"smooth"})}>
          <i class="bx bx-down-arrow-alt"></i>
      </c.InitialViewContentButton>
      </c.InitialViewContentTitleLeft>
      <c.RightImageView>
      <c.InitialViewContentPresentationImg src={initialburger} />
      <c.InitialViewContentPresentationDesc>
      Experimenta una increíble experiencia y sabores 100% únicos
      </c.InitialViewContentPresentationDesc>
      </c.RightImageView>
      </c.InitialViewContentPresentation>
      </c.InitialViewContent>
      <c.CategoriesContent>
          <c.CategoriesView ref={burRef} style={{marginTop:"180px"}}>
      <c.TopTitleCategory>
      <c.TopTitleImg src={burger} />
      <c.CategoryTitle>
      Fasfú Menu /{" "}
      <span
      style={{ color: "black", fontWeight: 700, fontSize: 28 }}
      >
      Burgers
      </span>
      </c.CategoryTitle>
      </c.TopTitleCategory>
      <c.CategoryView style={{ paddingTop: "50px" }}>
      {currentJson
        .filter((prop) => prop.type == "BURGER")
        .map((data) => {
          return (
              <c.Category onClick={()=>prop.setIsInProduct(true)} style={{ marginTop: "0px" }}>
                <c.CategoryDesktop>
            <c.CategoryPrice>
            {data.price}
            {prop.countrySelectionState ==
                "España"
                ? "€"
                : prop.countrySelectionState == "Perú" ? "S/" : "$"}
            </c.CategoryPrice>
            <c.CategoryAbs>
            <c.ProductImg
                src={require(`../../assets/products/${prop.countrySelectionState == "España" ? "spain" : "perucol"}/${data.pic}`)}
            />
            <c.ProductTitle>{data.name}</c.ProductTitle>
            <c.ProductDesc>
            {data.desc.length >= 45
              ? data.desc.slice(0, 45) + "..."
              : data.desc}
            </c.ProductDesc>
            <c.ProductQuickAdd style={{ marginTop: "-13px" }}>
            <i
            class="bx bx-cart"
            style={{
              fontSize: "28px",
                marginTop:'3px',
                background: "transparent",
            }}
            />
            <p
            style={{ marginTop: "10px", marginLeft: "5px" }}
            >
            Agregar al carro
            </p>
            </c.ProductQuickAdd>
            </c.CategoryAbs>
            <c.ProductWave
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            >
            <path
            fill="#0307a6"
            fill-opacity="1"
            d="M0,128L48,149.3C96,171,192,213,288,218.7C384,224,480,192,576,170.7C672,149,768,139,864,144C960,149,1056,171,1152,192C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
            </c.ProductWave>
                </c.CategoryDesktop>
                <c.CategoryResponsive>
                    <c.CRLeft>
             <c.ProductTitleResponsive>{data.name}</c.ProductTitleResponsive>
                         <c.ProductDescResponsive>
                             {data.desc.length >= 97 
                                 ? data.desc.slice(0, 97) + "..."
                                 : data.desc} 
                         </c.ProductDescResponsive> 
                          <c.ProductQuickAddResponsive style={{ marginTop: "-13px" }}>  
                             <i 
                                class="bx bx-cart"
                                style={{ 
                                     fontSize: "28px", 
                                     marginTop:'3px',
                                     background: "transparent", 
                                 }} 
                             /> 
                             <p 
                                 style={{ marginTop: "10px", marginLeft: "5px" }} 
                             > 
                                 Agregar al carro 
                             </p> 
                         </c.ProductQuickAddResponsive> 
                    </c.CRLeft>
                    <c.CRRight>
            <c.ProductImgResponsive
                src={require(`../../assets/products/${prop.countrySelectionState == "España" ? "spain" : "perucol"}/${data.pic}`)}
            />
                        <c.ProductPriceResponsive>
                            {data.price}
                            {prop.countrySelectionState ==
                                    "España"
                                        ? "€"
                                        : prop.countrySelectionState == "Perú" ? "S/" : "$"}
                        </c.ProductPriceResponsive>
                    </c.CRRight>
                <c.ProductWaveResponsive></c.ProductWaveResponsive>
                </c.CategoryResponsive>
            </c.Category>
          );
        })}
      </c.CategoryView>
      </c.CategoriesView>

      <c.CategoriesView ref={comRef}>
      <c.TopTitleCategory>
      <c.TopTitleImg
      src={combo}
      style={{
        height: "54px",
          width: "54px",
          marginTop: "-14px",
      }}
      />
      <c.CategoryTitle style={{marginLeft:"44px"}}>
      Fasfú Menu /{" "}
      <span
      style={{ color: "black", fontWeight: 700, fontSize: 28 }}
      >
      Combos
      </span>
      </c.CategoryTitle>
          {
              prop.countrySelectionState != "España" && prop.countrySelectionState != "Perú" ? 
      <c.ExpandCategories onClick={() => {
        setComEx((prop) => !prop);
        if (ComEx == false) {
          comRef.current.scrollIntoView({
            block: "start",
            behavior: "smooth",
          });
        }
      }}>
      <c.ExpandCategoriesContent>
      <i
      class={
        !ComEx ? "bx bx-down-arrow-alt" : "bx bx-up-arrow-alt"
      }
      style={{ fontSize: "22px", marginTop: "1.5px" }}
      ></i>
      <p style={{ fontSize: "17px", marginTop: "2px" }}>
      {!ComEx ? "Ver más" : "Ver menos"}
      </p>
      </c.ExpandCategoriesContent>
      </c.ExpandCategories>
      : null
          }
      </c.TopTitleCategory>
          <c.CategoryView
      style={{
        maxHeight: !ComEx? "3200px" : "3200px",
          overflowY: "hidden",
          paddingBottom: "65px",
            paddingTop: "50px"
      }}>
      {currentJson
        .filter((prop) => prop.type == "COMBO")
        .map((data) => {
          return (
            <c.Category onClick={()=>prop.setIsInProduct(true)} style={{ marginTop: "0px" }}>
                <c.CategoryDesktop>
            <c.CategoryPrice>
            {data.price}
            {prop.countrySelectionState ==
                "España"
                ? "€"
                : prop.countrySelectionState == "Perú" ? "S/" : "$"}
            </c.CategoryPrice>
            <c.CategoryAbs>
            <c.ProductImg
                src={require(`../../assets/products/${prop.countrySelectionState == "España" ? "spain" : "perucol"}/${data.pic}`)}
            />
                <c.ProductTitle style={{fontSize:"14px",marginBottom:"-1px"}}>{data.name}</c.ProductTitle>
            <c.ProductDesc>
            {data.desc.length >= 52
              ? data.desc.slice(0, 52) + "..."
              : data.desc}
            </c.ProductDesc>
            <c.ProductQuickAdd style={{ marginTop: "-13px" }}>
            <i
            class="bx bx-cart"
            style={{
              fontSize: "28px",
                marginTop:'3px',
                background: "transparent",
            }}
            />
            <p
            style={{ marginTop: "10px", marginLeft: "5px" }}
            >
            Agregar al carro
            </p>
            </c.ProductQuickAdd>
            </c.CategoryAbs>
            <c.ProductWave
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            >
            <path
            fill="#0307a6"
            fill-opacity="1"
            d="M0,128L48,149.3C96,171,192,213,288,218.7C384,224,480,192,576,170.7C672,149,768,139,864,144C960,149,1056,171,1152,192C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
            </c.ProductWave>
                </c.CategoryDesktop>
                <c.CategoryResponsive>
                    <c.CRLeft>
             <c.ProductTitleResponsive>{data.name}</c.ProductTitleResponsive>
                         <c.ProductDescResponsive>
                             {data.desc.length >= 97 
                                 ? data.desc.slice(0, 97) + "..."
                                 : data.desc} 
                         </c.ProductDescResponsive> 
                          <c.ProductQuickAddResponsive style={{ marginTop: "-13px" }}>  
                             <i 
                                class="bx bx-cart"
                                style={{ 
                                     fontSize: "28px", 
                                     marginTop:'3px',
                                     background: "transparent", 
                                 }} 
                             /> 
                             <p 
                                 style={{ marginTop: "10px", marginLeft: "5px" }} 
                             > 
                                 Agregar al carro 
                             </p> 
                         </c.ProductQuickAddResponsive> 
                    </c.CRLeft>
                    <c.CRRight>
            <c.ProductImgResponsive
                src={require(`../../assets/products/${prop.countrySelectionState == "España" ? "spain" : "perucol"}/${data.pic}`)}
            />
                        <c.ProductPriceResponsive>
                            {data.price}
                            {prop.countrySelectionState ==
                                    "España"
                                        ? "€"
                                        : prop.countrySelectionState == "Perú" ? "S/" : "$"}
                        </c.ProductPriceResponsive>
                    </c.CRRight>
                <c.ProductWaveResponsive></c.ProductWaveResponsive>
                </c.CategoryResponsive>
            </c.Category>
          );
        })}
      </c.CategoryView>
      </c.CategoriesView>

          <c.CategoriesView style={{marginTop:"-60px"}}>
      <c.TopTitleCategory>
      <c.TopTitleImg
      src={potato}
      style={{
        height: "56px",
          width: "56px",
          marginTop: "-5px",
          marginRight: "-7px",
      }}
      />
      <c.CategoryTitle style={{marginLeft:"46px"}}>
      Fasfú Menu /{" "}
      <span
      style={{ color: "black", fontWeight: 700, fontSize: 28 }}
      >
      Patatas
      </span>
      </c.CategoryTitle>
      </c.TopTitleCategory>
      <c.CategoryView style={{ paddingTop: "50px" }}>
      {currentJson
        .filter((prop) => prop.type == "PATATAS")
        .map((data) => {
          return (
            <c.Category onClick={()=>prop.setIsInProduct(true)} style={{ marginTop: "0px" }}>
                <c.CategoryDesktop>
            <c.CategoryPrice>
            {data.price}
            {prop.countrySelectionState ==
                "España"
                ? "€"
                : prop.countrySelectionState == "Perú" ? "S/" : "$"}
            </c.CategoryPrice>
            <c.CategoryAbs>
            <c.ProductImg
                src={require(`../../assets/products/${prop.countrySelectionState == "España" ? "spain" : "perucol"}/${data.pic}`)}
            />
            <c.ProductTitle>{data.name}</c.ProductTitle>
            <c.ProductQuickAdd style={{ marginTop: "5px" }}>
            <i
            class="bx bx-cart"
            style={{
              fontSize: "30px",
                marginTop:'6px',
                background: "transparent",
            }}
            />
            <p
            style={{ marginTop: "15px", marginLeft: "5px" }}
            >
            Agregar al carro
            </p>
            </c.ProductQuickAdd>
            </c.CategoryAbs>
            <c.ProductWave
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            >
            <path
            fill="#0307a6"
            fill-opacity="1"
            d="M0,128L48,149.3C96,171,192,213,288,218.7C384,224,480,192,576,170.7C672,149,768,139,864,144C960,149,1056,171,1152,192C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
            </c.ProductWave>
                </c.CategoryDesktop>
                <c.CategoryResponsive>
                    <c.CRLeft>
             <c.ProductTitleResponsive>{data.name}</c.ProductTitleResponsive>
                          <c.ProductQuickAddResponsive style={{ marginTop: "-13px" }}>  
                             <i 
                                class="bx bx-cart"
                                style={{ 
                                     fontSize: "28px", 
                                     marginTop:'3px',
                                     background: "transparent", 
                                 }} 
                             /> 
                             <p 
                                 style={{ marginTop: "10px", marginLeft: "5px" }} 
                             > 
                                 Agregar al carro 
                             </p> 
                         </c.ProductQuickAddResponsive> 
                    </c.CRLeft>
                    <c.CRRight>
            <c.ProductImgResponsive
                src={require(`../../assets/products/${prop.countrySelectionState == "España" ? "spain" : "perucol"}/${data.pic}`)}
            />
                        <c.ProductPriceResponsive>
                            {data.price}
                            {prop.countrySelectionState ==
                                    "España"
                                        ? "€"
                                        : prop.countrySelectionState == "Perú" ? "S/" : "$"}
                        </c.ProductPriceResponsive>
                    </c.CRRight>
                <c.ProductWaveResponsive></c.ProductWaveResponsive>
                </c.CategoryResponsive>
            </c.Category>
          );
        })}
      </c.CategoryView>
      </c.CategoriesView>
      <c.CategoriesView ref={psRef}>
      <c.TopTitleCategory>
      <c.TopTitleImg
      src={cake}
      style={{
        height: "52px",
          width: "64px",
          marginTop: "-6px",
          marginRight: "-12px",
      }}
      />
      <c.CategoryTitle style={{marginLeft:"53px"}}>
      Fasfú Menu /{" "}
      <span
      style={{ color: "black", fontWeight: 700, fontSize: 28 }}
      >
      Postres & Salsas
      </span>
      </c.CategoryTitle>
          {
              prop.countrySelectionState != "" ? 
          <c.ExpandCategories 
      onClick={() => {
        setPSEx((prop) => !prop);
        if (PSEx == false) {
          psRef.current.scrollIntoView({
            block: "start",
            behavior: "smooth",
          });
        }
      }}
          >
      <c.ExpandCategoriesContent>
      <i
      class={
        !PSEx ? "bx bx-down-arrow-alt" : "bx bx-up-arrow-alt"
      }
      style={{ fontSize: "22px", marginTop: "1.5px" }}
      ></i>
      <p style={{ fontSize: "17px", marginTop: "2px" }}>
      {!PSEx ? "Ver más" : "Ver menos"}
      </p>
      </c.ExpandCategoriesContent>
      </c.ExpandCategories>
      : null}
      </c.TopTitleCategory>
      <c.CategoryView
      style={{
        maxHeight: !PSEx ? "300px" : "3200px",
          overflowY: "hidden",
          paddingBottom: "65px",
      }}
      >
      {currentJson
        .filter((prop) => prop.type == "PS")
        .map((data) => {
          return (
            <c.Category onClick={()=>prop.setIsInProduct(true)} style={{ marginBottom: "-50px" }}>
                <c.CategoryDesktop>
            <c.CategoryPrice>
            {data.price}
            {prop.countrySelectionState ==
                "España"
                ? "€"
                : prop.countrySelectionState == "Perú" ? "S/" : "$"}
            </c.CategoryPrice>
            <c.CategoryAbs>
            <c.ProductImg
                src={require(`../../assets/products/${prop.countrySelectionState == "España" ? "spain" : "perucol"}/${data.pic}`)}
            />
                <c.ProductTitle style={{fontSize:data.name=="Malteada de Chocolate y Aguacate" ? "15px": null}}>{data.name}</c.ProductTitle>
            <c.ProductQuickAdd style={{ marginTop: "5px" }}>
            <i
            class="bx bx-cart"
            style={{
              fontSize: "30px",
                marginTop:'6px',
                background: "transparent",
            }}
            />
            <p
            style={{ marginTop: "15px", marginLeft: "5px" }}
            >
            Agregar al carro
            </p>
            </c.ProductQuickAdd>
            </c.CategoryAbs>
            <c.ProductWave
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            >
            <path
            fill="#0307a6"
            fill-opacity="1"
            d="M0,128L48,149.3C96,171,192,213,288,218.7C384,224,480,192,576,170.7C672,149,768,139,864,144C960,149,1056,171,1152,192C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
            </c.ProductWave>
                </c.CategoryDesktop>
                <c.CategoryResponsive>
                    <c.CRLeft>
             <c.ProductTitleResponsive>{data.name}</c.ProductTitleResponsive>
                          <c.ProductQuickAddResponsive style={{ marginTop: "-13px" }}>  
                             <i 
                                class="bx bx-cart"
                                style={{ 
                                     fontSize: "28px", 
                                     marginTop:'3px',
                                     background: "transparent", 
                                 }} 
                             /> 
                             <p 
                                 style={{ marginTop: "10px", marginLeft: "5px" }} 
                             > 
                                 Agregar al carro 
                             </p> 
                         </c.ProductQuickAddResponsive> 
                    </c.CRLeft>
                    <c.CRRight>
            <c.ProductImgResponsive
                src={require(`../../assets/products/${prop.countrySelectionState == "España" ? "spain" : "perucol"}/${data.pic}`)}
            />
                        <c.ProductPriceResponsive>
                            {data.price}
                            {prop.countrySelectionState ==
                                    "España"
                                        ? "€"
                                        : prop.countrySelectionState == "Perú" ? "S/" : "$"}
                        </c.ProductPriceResponsive>
                    </c.CRRight>
                <c.ProductWaveResponsive></c.ProductWaveResponsive>
                </c.CategoryResponsive>
            </c.Category>
          );
        })}
      </c.CategoryView>
      </c.CategoriesView>

      <c.CategoriesView ref={bebRef}>
      <c.TopTitleCategory>
      <c.TopTitleImg
      src={beverage}
      style={{
        height: "50px",
          width: "30px",
          marginTop: "-7px",
          marginRight: "-7px",
      }}
      />
      <c.CategoryTitle style={{marginLeft:"26px"}}>
      Fasfú Menu /{" "}
      <span
      style={{ color: "black", fontWeight: 700, fontSize: 28 }}
      >
      Bebidas
      </span>
      </c.CategoryTitle>

          {
              prop.countrySelectionState != "" ?
          <c.ExpandCategories
      onClick={() => {
        setBebEx((prop) => !prop);
        if (BebEx == false) {
          setTimeout(() => {
            bebRef.current.scrollIntoView({
              block: "start",
              behavior: "smooth",
            });
          }, 10);
        }
      }}
          >
      <c.ExpandCategoriesContent>
      <i
      class={
        !BebEx ? "bx bx-down-arrow-alt" : "bx bx-up-arrow-alt"
      }
      style={{ fontSize: "22px", marginTop: "1.5px" }}
      ></i>
      <p style={{ fontSize: "17px", marginTop: "2px" }}>
      {!BebEx ? "Ver más" : "Ver menos"}
      </p>
      </c.ExpandCategoriesContent>
      </c.ExpandCategories>
      : null
          }
      </c.TopTitleCategory>
      <c.CategoryView
      style={{
        maxHeight: !BebEx ? "300px" : "3200px",
          overflowY: "hidden",
          paddingBottom: "65px",
      }}
      >
      {currentJson
        .filter((prop) => prop.type == "Bebida")
        .map((data) => {
          return (
            <c.Category onClick={()=>prop.setIsInProduct(true)} style={{ marginBottom: "-55px" }}>
                <c.CategoryDesktop>
            <c.CategoryPrice>
            {data.price}
            {prop.countrySelectionState ==
                "España"
                ? "€"
                : prop.countrySelectionState == "Perú" ? "S/" : "$"}
            </c.CategoryPrice>
            <c.CategoryAbs>
            <c.ProductImg
                src={require(`../../assets/products/${prop.countrySelectionState == "España" ? "spain" : "perucol"}/${data.pic}`)}
            />
            <c.ProductTitle>{data.name}</c.ProductTitle>
            <c.ProductQuickAdd style={{ marginTop: "5px" }}>
            <i
            class="bx bx-cart"
            style={{
              fontSize: "30px",
                marginTop:'6px',
                background: "transparent",
            }}
            />
            <p
            style={{ marginTop: "15px", marginLeft: "5px" }}
            >
            Agregar al carro
            </p>
            </c.ProductQuickAdd>
            </c.CategoryAbs>
            <c.ProductWave
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            >
            <path
            fill="#0307a6"
            fill-opacity="1"
            d="M0,128L48,149.3C96,171,192,213,288,218.7C384,224,480,192,576,170.7C672,149,768,139,864,144C960,149,1056,171,1152,192C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
            </c.ProductWave>
                </c.CategoryDesktop>
                <c.CategoryResponsive>
                    <c.CRLeft>
             <c.ProductTitleResponsive>{data.name}</c.ProductTitleResponsive>
                          <c.ProductQuickAddResponsive style={{ marginTop: "-13px" }}>  
                             <i 
                                class="bx bx-cart"
                                style={{ 
                                     fontSize: "28px", 
                                     marginTop:'3px',
                                     background: "transparent", 
                                 }} 
                             /> 
                             <p 
                                 style={{ marginTop: "10px", marginLeft: "5px" }} 
                             > 
                                 Agregar al carro 
                             </p> 
                         </c.ProductQuickAddResponsive> 
                    </c.CRLeft>
                    <c.CRRight>
            <c.ProductImgResponsive
                src={require(`../../assets/products/${prop.countrySelectionState == "España" ? "spain" : "perucol"}/${data.pic}`)}
            />
                        <c.ProductPriceResponsive>
                            {data.price}
                            {prop.countrySelectionState ==
                                    "España"
                                        ? "€"
                                        : prop.countrySelectionState == "Perú" ? "S/" : "$"}
                        </c.ProductPriceResponsive>
                    </c.CRRight>
                <c.ProductWaveResponsive></c.ProductWaveResponsive>
                </c.CategoryResponsive>
            </c.Category>
          );
        })}
      </c.CategoryView>
      </c.CategoriesView>
      <c.FooterView>
          <c.FooterWave xmlns="http://www.w3.org/2000/svg" viewBox="300 0 1440 320"><path fill="#0306a6" fill-opacity="1" d="M0,96L60,106.7C120,117,240,139,360,144C480,149,600,139,720,117.3C840,96,960,64,1080,53.3C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </c.FooterWave>
          <c.FooterWave1 xmlns="http://www.w3.org/2000/svg" viewBox="300 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,96L60,106.7C120,117,240,139,360,144C480,149,600,139,720,117.3C840,96,960,64,1080,53.3C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </c.FooterWave1>
          <c.FooterWave2 xmlns="http://www.w3.org/2000/svg" viewBox="300 0 1440 320"><path fill="#0306a6" fill-opacity="1" d="M0,96L60,106.7C120,117,240,139,360,144C480,149,600,139,720,117.3C840,96,960,64,1080,53.3C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </c.FooterWave2>
          <c.FooterContent>
              <c.Logo3 src={logo3}/>
              <c.FooterCenter>
                  <c.Frase>
<i class='bx bxs-quote-alt-left' ></i>
                      Siete vidas no son suficientes para dejar de amar las hamburguesas
<i class='bx bxs-quote-alt-right' ></i>
                  </c.Frase>
              </c.FooterCenter>
              <c.FooterContentAri src={ari}/>

                  <c.SocialNetworks>
                    <i class='bx bxl-twitter' ></i>
                    <i class='bx bxl-instagram' ></i>
                    <i class='bx bxl-facebook' ></i>
                  </c.SocialNetworks>
          </c.FooterContent>
          <c.Direction>
              {
                  prop.countrySelectionState == "España" ? "Madrid, Málaga, Sevilla, Barcelona, Bilbao"
                  : prop.countrySelectionState == "Perú" ? "Miraflores, Surco, La Molina"
                  : prop.countrySelectionState == "Colombia" ? "Bogotá, Chía, Medellín, Cartagena, Barranquilla"
                  : prop.countrySelectionState == "México" ? "San Ángel, Polanco, Juárez, Coyoacán, Interlomas, Centro"
                  : null
              }
          </c.Direction>
      </c.FooterView>
      </c.CategoriesContent>
      </c.InitialView>
     : 
      <Countries setCountrySelectionState={prop.setCountrySelectionState} />
          }
      </c.HomeView>
  );
}
