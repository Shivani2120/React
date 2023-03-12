import React from "react";

function Product(props){
    return(
       <div>
          <p>{props.product.name}</p>
          <p>{props.product.price}</p>
          <p>{props.product.description}</p>
       </div>
    )
}

export default Product;