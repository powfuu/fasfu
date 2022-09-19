import { useEffect, useState } from "react"
import * as c from "./productoComponents"
const Product = (prop) =>{
    return(
        <>
            <c.ProductoContent scale={
                prop.isInProduct ?
                    1 
                    :
                    0
                }>
                <h1 onClick={()=>prop.setIsInProduct(false)}>Producto</h1>
            </c.ProductoContent>
        </>
    )
}
export default Product;
