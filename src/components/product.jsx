import React, { Component } from 'react';
import QuantityPicker from './quantityPicker';

import "./product.css";


class Product extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="product">
                
              <img 
              className="product-image" src={"/images/products/" + this.props.data.image}></img>

              <label>{this.props.data.title}</label>

              <label>{this.props.data.price}</label>
              <label>{this.props.data.price}</label> 


              <QuantityPicker></QuantityPicker>
            </div>
         );
    }
}
 
export default Product;
