import React, { Component } from 'react';
import QuantityPicker from './quantityPicker';

import "./product.css";


class Product extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="product">
                
              <img src="https://picsum.photos/300/350"></img>

              <label>Product Description here</label>

              <label>$ Total</label>
              <label>$ Price</label> 


              <QuantityPicker></QuantityPicker>
            </div>
         );
    }
}
 
export default Product;
