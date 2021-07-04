import React from "react"
import Header from "./Header.jsx";
class Emptycart extends React.Component{

  showNow=()=>{
 alert("Sorry! we are working on this. Please click on Logo to visit on home page.")
  }
  render(){
      return <>
       <Header/>
       <div className="cart_pgsec">
           <div className="empty_cart_sec">
             <div className="cart_mess">
              <div className="cart_logo">
                <img src="/images/carticon.png"></img>
                 <span className="cartlogo"></span>
              </div>
             <h1 className="cart_txt">Your cart is empty!</h1>
             <span>Add items to it now.</span>
             <button type="button" onClick={this.showNow} className="shop_now">Shop Now</button>
             </div>
            </div>
            </div>
      </>
  }
}
export default Emptycart;