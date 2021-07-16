import React from "react";
import axios from "axios";
import { Link,NavLink } from "react-router-dom";
export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.state={
      AuthStatus:null
    }
  }  
    componentDidMount() {    
    axios.get(`/Swipecart/api-user-auth_token`)
      .then(res => {    
       const responseObj = res.data;  
      console.log(responseObj)
      })
  }
   LogoutUser=()=>{     
     localStorage.clear();     
    let pathUrl = "http://swipecart.herokuapp.com/";
    window.location.href = pathUrl;   
   }
  //  componentDidMount() {    
  //   axios.get(`/Swipecart/api-user-auth_token`)
  //     .then(res => {    
  //      const responseObj = res.data;  
  //     console.log(responseObj)
  //     })
  // }
render(){
  return (
    <> 
    <div className="header-secondary">
    <div className="container">
      <div className="left-sec">
        <div className="brand-logo">
        <Link to="/">
        <div className="logo">
         <img src="/images/logo.png" alt="logo"/>
         <span><lable className="ex">Explore </lable><i className="more">More<sup className="fa fa-star"></sup></i></span>
        </div>
        </Link>
        </div>
        </div>
        <div className="right-sec">
        {!localStorage.getItem("sessionId") ? 
          <div className="ac-btn">
           <a href="/login-auth" className="log-btn" name="login">Login</a>
          </div>
         :
         <>
          <div className="ac-btn">
           <a onClick={this.LogoutUser} className="log-btn logout" name="login">Logout</a>
          </div>
          <div className="cart_sec">
          <NavLink exact to="/cartitem" className="view_cart"><img src="http://swipecart.herokuapp.com/images/cart_ico.png"/><span className="cartTxt">Cart</span></NavLink>
          </div>
          </>
          }
        </div> 
      </div>
     </div>
    </>
  )
 }
}
