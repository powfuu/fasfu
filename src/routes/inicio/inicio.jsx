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
export default function Inicio(prop: any) {
  const cartRef = useRef(null)
  const [products, setProducts] = useState([]);
  const [currentJson, setCurrentJson] = useState([]);
  const [PSEx, setPSEx] = useState(false);
  const [BebEx, setBebEx] = useState(false);
  const [countrySrc, setCountrySrc]=useState(localStorage.getItem("@fasfu: countrySelected"))
  const psRef = useRef(null);
  const bebRef = useRef(null);
  const [countriesViewStatus, setCountriesViewStatus]=useState(false)
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
  useEffect(() => {
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    cartRef.current.style.marginTop="-120px"
  }else{
    cartRef.current.style.marginTop="7px"
  }
  prevScrollpos = currentScrollPos;
}
    switch (prop.countrySelectionState) {
      case "España":
        setCurrentJson(spaJson);
        setCountrySrc(spainflag)
        break;
      case "Perú":
        setCurrentJson(perJson);
        setCountrySrc(peruflag)
        break;
      case "México":
        setCurrentJson(mexJson);
        setCountrySrc(mexflag)
        break;
      case "Colombia":
        setCurrentJson(colJson);
        setCountrySrc(colombiaflag)
        break;
    }
  }, [prop.countrySelectionState]);
  return (
      <c.HomeView> 
      {prop.countrySelectionState ? 
      <c.InitialView>
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
              prop.setCountrySelectionState(data.country)
              setCountriesViewStatus((prop)=>!prop)
              localStorage.setItem('@fasfu: countrySelected', data.country)
            }}>
            <c.CountryListSelection src={data.countryflag}/>
            </c.CountrySelectionListContent>
          )
        })
      }
      </c.CountrySelectionView>
      <c.InitialViewLogo src={logo} />
      <c.InitialViewCenterLogo src={logo2} />
      <i class="bx bx-cart" ref={cartRef} id="initial-view-cart"></i>
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
      <c.InitialViewContentButton>
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
          <c.CategoriesView style={{marginTop:"180px"}}>
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
            <c.Category style={{ marginTop: "0px" }}>
            <c.CategoryPrice>
            {data.price}
            {localStorage.getItem("@fasfu: countrySelected") ==
                "España"
                ? "€"
                : "$"}
            </c.CategoryPrice>
            <c.CategoryAbs>
            <c.ProductImg
            src={require(`../../assets/products/spain/${data.pic}`)}
            />
            <c.ProductTitle>{data.name}</c.ProductTitle>
            <c.ProductDesc>
            {data.desc.length >= 52
              ? data.desc.slice(0, 52) + "..."
              : data.desc}
            </c.ProductDesc>
            <c.ProductQuickAdd style={{ marginTop: "-13px" }}>
            <i
            class="bx bx-cart"
            style={{
              fontSize: "30px",
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
            </c.Category>
          );
        })}
      </c.CategoryView>
      </c.CategoriesView>

      <c.CategoriesView>
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
      <c.CategoryView style={{ paddingTop: "50px" }}>

      {currentJson
        .filter((prop) => prop.type == "COMBO")
        .map((data) => {
          return (
            <c.Category style={{ marginTop: "0px" }}>
            <c.CategoryPrice>
            {data.price}
            {localStorage.getItem("@fasfu: countrySelected") ==
                "España"
                ? "€"
                : "$"}
            </c.CategoryPrice>
            <c.CategoryAbs>
            <c.ProductImg
            src={require(`../../assets/products/spain/${data.pic}`)}
            />
            <c.ProductTitle>{data.name}</c.ProductTitle>
            <c.ProductDesc>
            {data.desc.length >= 52
              ? data.desc.slice(0, 52) + "..."
              : data.desc}
            </c.ProductDesc>
            <c.ProductQuickAdd style={{ marginTop: "-13px" }}>
            <i
            class="bx bx-cart"
            style={{
              fontSize: "30px",
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
            </c.Category>
          );
        })}
      </c.CategoryView>
      </c.CategoriesView>

      <c.CategoriesView>
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
            <c.Category style={{ marginTop: "0px" }}>
            <c.CategoryPrice>
            {data.price}
            {localStorage.getItem("@fasfu: countrySelected") ==
                "España"
                ? "€"
                : "$"}
            </c.CategoryPrice>
            <c.CategoryAbs>
            <c.ProductImg
            src={require(`../../assets/products/spain/${data.pic}`)}
            />
            <c.ProductTitle>{data.name}</c.ProductTitle>
            <c.ProductQuickAdd style={{ marginTop: "5px" }}>
            <i
            class="bx bx-cart"
            style={{
              fontSize: "35px",
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
        height: "56px",
          width: "68px",
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
      <c.ExpandCategories>
      <c.ExpandCategoriesContent
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
      </c.TopTitleCategory>
      <c.CategoryView
      style={{
        height: !PSEx ? "345px" : "max-content",
          overflowY: "hidden",
          paddingBottom: "65px",
      }}
      >
      {currentJson
        .filter((prop) => prop.type == "PS")
        .map((data) => {
          return (
            <c.Category style={{ marginBottom: "-50px" }}>
            <c.CategoryPrice>
            {data.price}
            {localStorage.getItem("@fasfu: countrySelected") ==
                "España"
                ? "€"
                : "$"}
            </c.CategoryPrice>
            <c.CategoryAbs>
            <c.ProductImg
            src={require(`../../assets/products/spain/${data.pic}`)}
            />
            <c.ProductTitle>{data.name}</c.ProductTitle>
            <c.ProductQuickAdd style={{ marginTop: "5px" }}>
            <i
            class="bx bx-cart"
            style={{
              fontSize: "35px",
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

      <c.ExpandCategories>
      <c.ExpandCategoriesContent
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
      </c.TopTitleCategory>
      <c.CategoryView
      style={{
        height: !BebEx ? "345px" : "max-content",
          overflowY: "hidden",
          paddingBottom: "65px",
      }}
      >
      {currentJson
        .filter((prop) => prop.type == "Bebida")
        .map((data) => {
          return (
            <c.Category style={{ marginBottom: "-55px" }}>
            <c.CategoryPrice>
            {data.price}
            {localStorage.getItem("@fasfu: countrySelected") ==
                "España"
                ? "€"
                : "$"}
            </c.CategoryPrice>
            <c.CategoryAbs>
            <c.ProductImg
            src={require(`../../assets/products/spain/${data.pic}`)}
            />
            <c.ProductTitle>{data.name}</c.ProductTitle>
            <c.ProductQuickAdd style={{ marginTop: "5px" }}>
            <i
            class="bx bx-cart"
            style={{
              fontSize: "35px",
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
                  <c.SocialNetworks>
                    <i class='bx bxl-twitter' ></i>
                    <i class='bx bxl-instagram' ></i>
                    <i class='bx bxl-facebook' ></i>
                  </c.SocialNetworks>
              </c.FooterCenter>
              <c.FooterContentAri src={ari}/>
          </c.FooterContent>
      </c.FooterView>
      </c.CategoriesContent>
      </c.InitialView>
     : 
      <Countries setCountrySelectionState={prop.setCountrySelectionState} />
          }
      </c.HomeView>
  );
}

