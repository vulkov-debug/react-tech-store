import React, { Component } from 'react'
import {linkData} from './linkData';

const ProductContext = React.createContext();
//Provider
//Consumer
class ProductProvider extends Component{
state = {
  sidebarOpen: false,
  cartOpen: false,
  cartItems: 0,
  links: linkData,
  cart: []
}
// handle sidebar
handleSidebar = () => {
  this.setState({sidebarOpen: !this.state.sidebarOpen})
}
//handle cart
handleCart = () => {
  this.setState({cartOpen: !this.state.cartOpen})
}
//close cart
closeCart = () => {
  this.setState({cartOpen: false})
}
//open cart
openCart = () => {
  this.setState({cartOpen: true})
}

    render(){

        return( <ProductContext.Provider value={{handleSidebar: this.handleSidebar, ...this.state,
        handleCart:this.handleCart, closeCart: this.closeCart, openCart: this.openCart}}>
          {this.props.children}
        </ProductContext.Provider>)
       
    }
}

const ProductConsumer = ProductContext.Consumer;


export {ProductProvider, ProductConsumer}