import { useState, useEffect, useRef } from "react";
import Countries from "./countries";
import * as c from "./inicioComponents.js";
import spainflag from "../../assets/countries/spain.webp";
import peruflag from "../../assets/countries/peru.webp";
import colombiaflag from "../../assets/countries/colombia.webp";
import mexflag from "../../assets/countries/mexico.webp";
import logo from "../../assets/logos/logo1_white.webp";
import logo2 from "../../assets/logos/logo2_white.webp";
import initialburger from "../../assets/initialburger.webp";
import luis from "../../assets/luisillo.webp";
import ari from "../../assets/arisilla.webp";
import logo3 from "../../assets/logos/logo3.webp"
import spaJson from "../../json/spain.json";
import colJson from "../../json/col.json";
import mexJson from "../../json/mex.json";
import perJson from "../../json/per.json";
import burger from "../../assets/products/burger.png";
import combo from "../../assets/products/combo.png";
import potato from "../../assets/products/potatos.png";
import cake from "../../assets/products/cake.png";
import beverage from "../../assets/products/beverage.png";
import motogatomochi from "../../assets/motogato.webp"
import Carro from "../carro/carro"
import Product from "../producto/producto"
import 'react-loading-skeleton/dist/skeleton.css'
import {ShoppingCartOutline} from "@styled-icons/evaicons-outline/ShoppingCartOutline"
import {Twitter, Facebook, Instagram} from "@styled-icons/boxicons-logos"
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
  const [restaurantStatusText, setRestaurantStatusText] = useState('')
    //#00e57e is open and #ff441f is closed
  const [restaurantStatus,setRestaurantStatus]=useState(null)
  const [restaurantStatusVisible, setRestaurantStatusVisible]=useState(false)
  const [loaded0, setLoaded0]=useState(false)
  const [loaded1, setLoaded1]=useState(false)
  const [loaded2, setLoaded2]=useState(false)
  const [loaded3, setLoaded3]=useState(false)
  const [loaded4, setLoaded4]=useState(false)
    const [car, setCar] = useState(localStorage.getItem("@fasfu: car") ? JSON.parse(localStorage.getItem("@fasfu: car")) : [])
  const [additionalProducts, setAdditionalProducts]=useState([])
    const [carAddons,setCarAddons]=useState(localStorage.getItem("@fasfu: addons") ? JSON.parse(localStorage.getItem("@fasfu: addons")) : [])
const formatterEs = new Intl.NumberFormat('es-ES', {
       style: 'currency',
       currency: 'EUR',
       minimumFractionDigits: 2
     })
const formatterPeso = new Intl.NumberFormat('es-CO', {
       style: 'currency',
       currency: 'COP',
       minimumFractionDigits: 3
     })
const formatterPer = new Intl.NumberFormat('es-PE', {
       style: 'currency',
       currency: 'PEN',
       minimumFractionDigits: 2
     })
const formatterMex = new Intl.NumberFormat('es-MX', {
       style: 'currency',
       currency: 'MXN',
       minimumFractionDigits: 2
     })
  const [priceSign, setPriceSign]=useState(formatterMex)
  const [customization, setCustomization]=useState("mex")
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
                        setTimeout(() => {
                            setLoaded0(true)
                            setLoaded1(true)
                            setLoaded2(true)
                            setLoaded3(true)
                            setLoaded4(true)
                        }, 3000);
                         if(data != prop.countrySelectionState){
                            setLoaded0(false)
                            setLoaded1(false)
                            setLoaded2(false)
                            setLoaded3(false)
                            setLoaded4(false)
                         }
                 switch (data) {
                   case "España":
                        setCurrentJson(spaJson);
                         setCustomization('spain')
                     setCountrySrc(spainflag)
                         setPriceSign(formatterEs)
                         if(time >= 12){
                             setRestaurantStatus("#00e57e")
                         setRestaurantStatusText("Disponible, Horario de atención (12 - 00:00)")
                         }else{
                             setRestaurantStatus("#ff441f")
                             setRestaurantStatusText("No Disponible, Horario de atención (12 - 00:00)")
                         }
                     break;
                   case "Perú":
                     setCurrentJson(perJson);
                     setCountrySrc(peruflag)
                         setCustomization('peru')
                         setPriceSign(formatterPer)
                         if(time >= 11){
                             setRestaurantStatus("#00e57e")
                         setRestaurantStatusText("Disponible, Horario de atención (11am - 10pm)")
                         }else{
                             setRestaurantStatus("#ff441f")
                             setRestaurantStatusText("No Disponible, Horario de atención (11am - 10pm)")
                         }
                     break;
                   case "México":
                     setCurrentJson(mexJson);
                     setCountrySrc(mexflag)
                         setCustomization('mex')
                         setPriceSign(formatterMex)
                         if(time >= 12){
                             setRestaurantStatus("#00e57e")
                         setRestaurantStatusText("Disponible, Horario de atención (12am - 10pm)")
                         }else{
                             setRestaurantStatus("#ff441f")
                             setRestaurantStatusText("No Disponible, Horario de atención (12am - 10pm)")
                         }
                     break;
                   case "Colombia":
                     setCurrentJson(colJson);
                     setCountrySrc(colombiaflag)
                         setPriceSign(formatterPeso)
                         setCustomization('col')
                         if(time >= 11){
                             setRestaurantStatus("#00e57e")
                         setRestaurantStatusText("Disponible, Horario de atención (11am - 10pm)")
                         }else{
                             setRestaurantStatus("#ff441f")
                             setRestaurantStatusText("No Disponible, Horario de atención (11am - 10pm)")
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
              <p>{restaurantStatusText}</p>
              <h1 class="bx bx-x" onClick={()=>setRestaurantStatusVisible(false)}>x</h1>
    </c.IsRestaurantOpenResponsive>
          <c.IsRestaurantOpen statusVisible={ !restaurantStatusVisible ? -200 : 0 } backgroundStatus={restaurantStatus == "#00e57e" ? "#E9FCF2" : "#ffe2e2"} colorStatus={restaurantStatus}>
              <p>{restaurantStatusText}</p>
              <h1 class="bx bx-x" onClick={()=>setRestaurantStatusVisible(false)}>x</h1>
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

      <c.LuisImg data-aos="zoom-in-up" src={luis} />
      <c.InitialViewContent>
      <c.InitialViewContentTop>
      <c.CountrySelection data-aos="zoom-in" data-aos-delay="100" onClick={()=> setCountriesViewStatus((prop)=>!prop)} src={countrySrc}/>
      <c.CountrySelectionView height={
        countriesViewStatus ? 335 : 0
      }>
      {
        countriesArr.map((data)=>{
          prop.countrySelectionState == data.country ? data.isSelected=200 : null
          return(
            <c.CountrySelectionListContent onClick={()=>{
              setCountriesViewStatus((prop)=>!prop)
              setCar([])
              setCarAddons([])
              localStorage.setItem("@fasfu: car",[])
              localStorage.setItem("@fasfu: addons",[])
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
      <Carro productSign={priceSign} countrySelectionState={prop.countrySelectionState} isInCar={prop.isInCar} car={car} setCar={setCar} setCarAddons={setCarAddons} carAddons={carAddons} additionalProducts={additionalProducts} setAdditionalProducts={setAdditionalProducts} setIsInCar={prop.setIsInCar}/>
      <Product additionalProducts={additionalProducts} setAdditionalProducts={setAdditionalProducts} setCarAddons={setCarAddons} carAddons={carAddons} car={car} setCar={setCar} customization={customization} country={prop.countrySelectionState} productSign={priceSign} isInProduct={prop.isInProduct} currentProduct={prop.currentProduct} setCurrentProduct={prop.setCurrentProduct} setIsInProduct={prop.setIsInProduct}/>
      </c.InitialViewContentTop>
      <c.InitialViewContentPresentation>
      <c.InitialViewContentTitleLeft>
      <c.InitialViewContentTitle data-aos="zoom-in-up">
          {loaded0}Sabor único, presentación de 10 y lo mejor de todo ¡al
      alcance de tu paladar!
      </c.InitialViewContentTitle>
      <c.InitialViewContentDesc data-aos="fade-up" data-aos-delay="300">
      Más que un simple platillo, es una obra de arte. Pan e
      ingredientes elegidos con cautela para el agrado de tu
      paladar, una porciòn exacta de carne que es cocinada el
      tiempo preciso, vegetales frescos y con tus ingredientes
      favoritos al gusto.
      </c.InitialViewContentDesc>
          <c.InitialViewContentButton data-aos="zoom-in" data-aos-delay="500" onClick={()=>burRef.current.scrollIntoView({block:"start",behavior:"smooth"})}>
              <c.ArrowBottom style={{height:'25px',width:'25px'}}/>
      </c.InitialViewContentButton>
      </c.InitialViewContentTitleLeft>
      <c.RightImageView>
      <c.InitialViewContentPresentationImg data-aos='zoom-in-up' data-aos-delay="300" src={initialburger} />
      <c.InitialViewContentPresentationDesc data-aos='fade-up' data-aos-delay="500">
      Experimenta una increíble experiencia y sabores 100% únicos
      </c.InitialViewContentPresentationDesc>
      </c.RightImageView>
      </c.InitialViewContentPresentation>
      </c.InitialViewContent>


      <c.CategoriesContent>
          <c.CategoriesView ref={burRef} style={{marginTop:"180px"}}>
      <c.TopTitleCategory data-aos="fade-up">
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
              {
                  !loaded0 ? 
              <c.CategoryLoadingView>
                  {[...Array(4)].fill().map(()=>{
                          return(
                  <c.CategoryLoading>
                      <br/>
                  <c.Skel circle={0} borderRadius={16} width={90} height={80}/>
                      <br/>
                  <c.Skel width={250} height={16} />                    
                      <br/>
                  <c.Skel width={250} count={3} height={10} />                    
                  </c.CategoryLoading>
                          )
                      })}
              </c.CategoryLoadingView>
              : null }

              <c.CategoryView style={{ visibility:!loaded0 ? "hidden" : "visible", opacity: !loaded0 ? "0" : "1",paddingTop: "50px",paddingBottom:"20px", maxHeight: !loaded0 ? "0px" : null}}>
      {currentJson
        .filter((prop) => prop.type == "BURGER")
        .map((data, index) => {
          return (
              <c.Category onClick={()=>{
                  prop.setIsInProduct(true)
                  prop.setCurrentProduct(data)
                  setAdditionalProducts([])
                  }} style={{ marginTop: "0px" }}>
                <c.CategoryDesktop>
            <c.CategoryPrice id="cp">
            {priceSign.format(parseFloat(data.price))}
            </c.CategoryPrice>
            <c.CategoryAbs>
                <c.ProductImg onLoad={(prop)=>{
                    if(data.index == data.length){
                        setTimeout(() => {
                            setLoaded0(true)
                        }, 500);
                    }
                    }}
                src={require(`../../assets/products/${prop.countrySelectionState == "España" ? "spain" : "perucolmex"}/${data.pic}`)}
            />
            <c.ProductTitle>{data.name}</c.ProductTitle>
            <c.ProductDesc>
            {data.desc.length >= 45
              ? data.desc.slice(0, 45) + "..."
              : data.desc}
            </c.ProductDesc>
            <c.ProductQuickAdd style={{ marginTop: "-13px" }}>
        <ShoppingCartOutline id="quick-add-cart"/>
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
        <ShoppingCartOutline id="quick-add-cart"/>
                             <p 
                                 style={{ marginTop: "10px", marginLeft: "5px" }} 
                             > 
                                 Agregar al carro 
                             </p> 
                         </c.ProductQuickAddResponsive> 
                    </c.CRLeft>
                    <c.CRRight>
            <c.ProductImgResponsive onLoad={()=>{
                    if(data.index == data.length){
                        setTimeout(() => {
                            setLoaded0(true)
                        }, 500);
                    }
                    }}
                src={require(`../../assets/products/${prop.countrySelectionState == "España" ? "spain" : "perucolmex"}/${data.pic}`)}
            />
                        <c.ProductPriceResponsive id="cp">
                            {priceSign.format(parseFloat(data.price))}
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
      </c.TopTitleCategory>
              {
                  !loaded1 ? 
              <c.CategoryLoadingView>
                  {[...Array(4)].fill().map(()=>{
                          return(
                  <c.CategoryLoading>
                      <br/>
                  <c.Skel circle={0} borderRadius={16} width={90} height={80}/>
                      <br/>
                  <c.Skel width={250} height={16} />                    
                      <br/>
                  <c.Skel width={250} count={3} height={10} />                    
                  </c.CategoryLoading>
                          )
                      })}
              </c.CategoryLoadingView>
              : null }
          <c.CategoryView
      style={{
opacity: !loaded1 ? "0" : "1",
          visibility: !loaded1 ? "hidden" : "visible",
          maxHeight: !loaded1 ? "0px" : !ComEx ? "3200px" : "3200px",
          paddingBottom: "65px",
            paddingTop: "50px"
      }}>
      {currentJson
        .filter((prop) => prop.type == "COMBO")
        .map((data) => {
          return (
            <c.Category onClick={()=>{
                  prop.setIsInProduct(true)
                  prop.setCurrentProduct(data)
                  }} style={{ marginTop: "0px" }}>
                <c.CategoryDesktop>
            <c.CategoryPrice  id="cp">
            {priceSign.format(parseFloat(data.price))}
            </c.CategoryPrice>
            <c.CategoryAbs>
            <c.ProductImg onLoad={()=>{
                    if(data.index == data.length){
                        setTimeout(() => {
                            setLoaded1(true)
                        }, 500);
                    }
                    }}
                src={require(`../../assets/products/${prop.countrySelectionState == "España" ? "spain" : "perucolmex"}/${data.pic}`)}
            />
                <c.ProductTitle style={{fontSize:"14px",marginBottom:"-1px"}}>{data.name}</c.ProductTitle>
            <c.ProductDesc>
            {data.desc.length >= 52
              ? data.desc.slice(0, 52) + "..."
              : data.desc}
            </c.ProductDesc>
            <c.ProductQuickAdd style={{ marginTop: "-13px" }}>
        <ShoppingCartOutline id="quick-add-cart"/>
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
        <ShoppingCartOutline id="quick-add-cart"/>
                             <p 
                                 style={{ marginTop: "10px", marginLeft: "5px" }} 
                             > 
                                 Agregar al carro 
                             </p> 
                         </c.ProductQuickAddResponsive> 
                    </c.CRLeft>
                    <c.CRRight>
            <c.ProductImgResponsive onLoad={()=>{
                    if(data.index == data.length){
                        setTimeout(() => {
                            setLoaded1(true)
                        }, 500);
                    }
                    }}
                src={require(`../../assets/products/${prop.countrySelectionState == "España" ? "spain" : "perucolmex"}/${data.pic}`)}
            />
                        <c.ProductPriceResponsive id="cp">
                            {priceSign.format(parseFloat(data.price))}
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
              {
                  !loaded2 ? 
              <c.CategoryLoadingView>
                  {[...Array(4)].fill().map(()=>{
                          return(
                  <c.CategoryLoading>
                      <br/>
                  <c.Skel circle={0} borderRadius={16} width={90} height={80}/>
                      <br/>
                  <c.Skel width={250} height={16} />                    
                      <br/>
                  <c.Skel width={250} count={3} height={10} />                    
                  </c.CategoryLoading>
                          )
                      })}
              </c.CategoryLoadingView>
              : null }
              <c.CategoryView  style={{ opacity: !loaded2 ? "0" : "1",visibility:!loaded2 ? "hidden" : "visible",paddingTop: "50px",paddingBottom:"20px", maxHeight: !loaded2 ? "0px" : null}}>
      {currentJson
        .filter((prop) => prop.type == "PATATAS")
        .map((data) => {
          return (
            <c.Category onClick={()=>{
                  prop.setIsInProduct(true)
                  prop.setCurrentProduct(data)
                  }} style={{ marginTop: "0px" }}>
                <c.CategoryDesktop>
            <c.CategoryPrice id="cp">
            {priceSign.format(parseFloat(data.price))}
            </c.CategoryPrice>
            <c.CategoryAbs>
            <c.ProductImg onLoad={(prop)=>{
                    if(data.index == data.length){
                        setTimeout(() => {
                            setLoaded2(true)
                        }, 500);
                    }
                    }}
                src={require(`../../assets/products/${prop.countrySelectionState == "España" ? "spain" : "perucolmex"}/${data.pic}`)}
            />
            <c.ProductTitle>{data.name}</c.ProductTitle>
            <c.ProductQuickAdd style={{ marginTop: "5px" }}>
                <ShoppingCartOutline style={{marginTop:"9px"}} id="quick-add-cart"/>
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
                         <c.ProductDescResponsive>
                             {data.desc.length >= 97 
                                 ? data.desc.slice(0, 97) + "..."
                                 : data.desc} 
                         </c.ProductDescResponsive> 
                          <c.ProductQuickAddResponsive style={{ marginTop: "-3px" }}>  
        <ShoppingCartOutline id="quick-add-cart"/>
                             <p 
                                 style={{ marginTop: "10px", marginLeft: "5px" }} 
                             > 
                                 Agregar al carro 
                             </p> 
                         </c.ProductQuickAddResponsive> 
                    </c.CRLeft>
                    <c.CRRight>
            <c.ProductImgResponsive onLoad={(prop)=>{
                    if(data.index == data.length){
                        setTimeout(() => {
                            setLoaded2(true)
                        }, 500);
                    }
                    }}
                src={require(`../../assets/products/${prop.countrySelectionState == "España" ? "spain" : "perucolmex"}/${data.pic}`)}
            />
                        <c.ProductPriceResponsive id="cp">
                            {priceSign.format(parseFloat(data.price))}
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
              prop.countrySelectionState == "España"  ? 
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
          { !PSEx ? 
              <c.ArrowBottom/>
                    : 
              <c.ArrowTop/>
          }
      <p style={{ fontSize: "17px", marginTop: "2px" }}>
      {!PSEx ? "Ver más" : "Ver menos"}
      </p>
      </c.ExpandCategoriesContent>
      </c.ExpandCategories>
      : null}
      </c.TopTitleCategory>
            {
                  !loaded3 ? 
              <c.CategoryLoadingView>
                  {[...Array(4)].fill().map(()=>{
                          return(
                  <c.CategoryLoading>
                      <br/>
                  <c.Skel circle={0} borderRadius={16} width={90} height={80}/>
                      <br/>
                  <c.Skel width={250} height={16} />                    
                      <br/>
                  <c.Skel width={250} count={3} height={10} />                    
                  </c.CategoryLoading>
                          )
                      })}
              </c.CategoryLoadingView>
              : null }
          <c.CategoryView id={
              prop.countrySelectionState == "España" ? "psv" : null
              }
      style={{opacity: !loaded3 ? "0" : "1",
          visibility:!loaded3 ? "hidden" : "visible",paddingBottom:"70px", maxHeight: !loaded3 ? "0px" : !PSEx ? prop.countrySelectionState == "España" ? "280px" : "3200px" : "3200px"
      }}
      >
      {currentJson
        .filter((prop) => prop.type == "PS")
        .map((data) => {
          return (
            <c.Category onClick={()=>{
                  prop.setIsInProduct(true)
                  prop.setCurrentProduct(data)
                  }} style={{ marginBottom: "-50px" }}>
                <c.CategoryDesktop>
            <c.CategoryPrice id="cp">
            {priceSign.format(parseFloat(data.price))}
            </c.CategoryPrice>
            <c.CategoryAbs>
            <c.ProductImg onLoad={(prop)=>{
                    if(data.index == data.length){
                        setTimeout(() => {
                            setLoaded3(true)
                        }, 500);
                    }
                    }}
 
                src={require(`../../assets/products/${prop.countrySelectionState == "España" ? "spain" : "perucolmex"}/${data.pic}`)}
            />
                <c.ProductTitle style={{fontSize:data.name=="Malteada de Chocolate y Aguacate" ? "15px": null}}>{data.name}</c.ProductTitle>
            <c.ProductQuickAdd style={{ marginTop: "5px" }}>
                <ShoppingCartOutline style={{marginTop:"9px"}} id="quick-add-cart"/>
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
                         <c.ProductDescResponsive>
                             {data.desc.length >= 97 
                                 ? data.desc.slice(0, 97) + "..."
                                 : data.desc} 
                         </c.ProductDescResponsive> 
                          <c.ProductQuickAddResponsive style={{ marginTop: "-3px" }}>  
        <ShoppingCartOutline id="quick-add-cart"/>
                             <p 
                                 style={{ marginTop: "10px", marginLeft: "5px" }} 
                             > 
                                 Agregar al carro 
                             </p> 
                         </c.ProductQuickAddResponsive> 
                    </c.CRLeft>
                    <c.CRRight>
            <c.ProductImgResponsive onLoad={(prop)=>{
                    if(data.index == data.length){
                        setTimeout(() => {
                            setLoaded3(true)
                        }, 500);
                    }
                    }}
                src={require(`../../assets/products/${prop.countrySelectionState == "España" ? "spain" : "perucolmex"}/${data.pic}`)}
            />
                        <c.ProductPriceResponsive id="cp">
                            {priceSign.format(parseFloat(data.price))}
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
              prop.countrySelectionState == "España" ?
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
{
          !BebEx ? 
              <c.ArrowBottom/>
              : 
              <c.ArrowTop/>
      }
      <p style={{ fontSize: "17px", marginTop: "2px" }}>
      {!BebEx ? "Ver más" : "Ver menos"}
      </p>
      </c.ExpandCategoriesContent>
      </c.ExpandCategories>
      : null
          }
      </c.TopTitleCategory>
{
                  !loaded4 ? 
              <c.CategoryLoadingView>
                  {[...Array(4)].fill().map(()=>{
                          return(
                  <c.CategoryLoading>
                      <br/>
                  <c.Skel circle={0} borderRadius={16} width={90} height={80}/>
                      <br/>
                  <c.Skel width={250} height={16} />                    
                      <br/>
                  <c.Skel width={250} count={3} height={10} />                    
                  </c.CategoryLoading>
                          )
                      })}
              </c.CategoryLoadingView>
              : null }
      <c.CategoryView id={
              prop.countrySelectionState == "España" ? "bebv" : null
              }
      style={{opacity: !loaded4 ? "0" : "1",
          visibility:!loaded4 ? "hidden" : "visible",paddingBottom: !loaded4 ? "0px" : "125px", maxHeight: !loaded4 ? "0px" : !BebEx ? prop.countrySelectionState == "España" ? "220px" : "3200px" : "3200px"
      }}
      >
      {currentJson
        .filter((prop) => prop.type == "Bebida")
        .map((data) => {
          return (
            <c.Category onClick={()=>{
                  prop.setIsInProduct(true)
                  prop.setCurrentProduct(data)
                  }} style={{ marginBottom: "-55px" }}>
                <c.CategoryDesktop>
            <c.CategoryPrice id="cp">
            {priceSign.format(parseFloat(data.price))}
            </c.CategoryPrice>
            <c.CategoryAbs>
            <c.ProductImg onLoad={(prop)=>{
                    if(data.index == data.length){
                        setTimeout(() => {
                            setLoaded4(true)
                        }, 500);
                    }
                    }}
                src={require(`../../assets/products/${prop.countrySelectionState == "España" ? "spain" : "perucolmex"}/${data.pic}`)}
            />
            <c.ProductTitle>{data.name}</c.ProductTitle>
            </c.CategoryAbs>

                    <c.ProductQuickAdd style={{ position:"absolute",zIndex:"5", marginTop:"180px", marginLeft:"25px" }}>
                        <ShoppingCartOutline style={{marginTop:"9px"}} id="quick-add-cart"/>
            <p
            style={{ marginTop: "15px", marginLeft: "5px" }}
            >
            Agregar al carro
            </p>
            </c.ProductQuickAdd>
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
                          <c.ProductQuickAddResponsive style={{ marginTop: "-3px" }}>  
        <ShoppingCartOutline id="quick-add-cart"/>
                             <p 
                                 style={{ marginTop: "10px", marginLeft: "5px" }} 
                             > 
                                 Agregar al carro 
                             </p> 
                         </c.ProductQuickAddResponsive> 
                    </c.CRLeft>
                    <c.CRRight>
            <c.ProductImgResponsive onLoad={(prop)=>{
                    if(data.index == data.length){
                        setTimeout(() => {
                            setLoaded4(true)
                        }, 500);
                    }
                    }}
                src={require(`../../assets/products/${prop.countrySelectionState == "España" ? "spain" : "perucolmex"}/${data.pic}`)}
            />
                        <c.ProductPriceResponsive id="cp">
                            {priceSign.format(parseFloat(data.price))}
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
<img class="bx bxs-quote-alt-right" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAR9JREFUSEvdlW9xwkAUxHcV0CooKCB1gIQ6oA5AAjhoFbRVUCS0CkACOCAKlnnMJfOS5s/LDPlQ7vPO/u52390RIy+O7I87B0h6AbAEMCX53BVnm7YxIkkZgG8zdqYzksc6pE/7ByDpFcCHM/oFsCH502Deq60A0m72zmhLctMUTVRbBxwAzJPhO8l1W+6SQtoSkEqy3Iv1SPLcsnsrP6T1gM80Md7TSrXsLaqyYElhrQeYwVNLJHYSm6LriSSFtR6gnmfji6RNjQHC2iGAQ3HZAoBSOwQAkld9AFBqox2Yb07yIdBBResBbwBWHT34DsJaD7Dd2XRMGiA5gKwYVUlhbf0m2+Nmu1sk0AnALr1FlUsnKaS98w/nFv/1/4/oAgG/oBmbRFOdAAAAAElFTkSuQmCC"/>
                      Siete vidas no son suficientes para dejar de amar las hamburguesas
<img class="bx bxs-quote-alt-left" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAASZJREFUSEvtldtNw0AQRc+tADqAVAB0QAlQAaEDUkFogQ6gg3QCqYBQAelg0Fhra7LYu+sP/2Uky5J9PWdeOxYLmxb2zxlQrfBJiczsEtgCD8B1+noHbCQdordW7QAwM3f4CTgktyOwkuR35mgj4B14KuT8JuklAZq1EWCVgh4krRKgWTsHgKROb2Y1wKCNgC/gppRFADRr5/QgZlDrwWgGPj0+ihcTWfxI6kY3jWhJu5d069r8HLiDV+AeuMpAH5LW/bM0qlXt5C5KUf4GyKMkP3T/rKQtAWKdh5QnAJPaUYCZeeq+Mnq7k+STMxZ9UZv3wGvvjv3e27Mkj/DEzKxJm++i7+BlD6zHIk8NbtLmGXgZ/NpNNTRMUZP2/Ecrra7u3eIl+gMS1pgZ+J6NOAAAAABJRU5ErkJggg=="/>
<i class='bx bxs-quote-alt-right' ></i>
                  </c.Frase>
              </c.FooterCenter>
              <c.FooterContentAri src={ari}/>

                  <c.SocialNetworks>
                      <a href="https://twitter.com/fasfuburgers?lang=es" target="_blank">
                          <Twitter id="i"/>
                      </a>
                      <a href="https://www.instagram.com/fasfu.burgers/?hl=es" target="_blank">
                          <Instagram id="i"/>
                      </a>
                      <a href="https://www.facebook.com/people/Fasf%C3%BA-Burgers/100076023661997/" target="_blank">
                          <Facebook id="i"/>
                      </a>
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
      <Countries country={prop.countrySelectionState} setCountrySelectionState={prop.setCountrySelectionState} />
          }
      </c.HomeView>
  );
}
