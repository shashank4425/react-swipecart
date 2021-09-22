import React, { useEffect } from "react";
import axios from "axios";
import { isLoggedUser } from "../actionTypes/action";
import { useDispatch, useSelector } from "react-redux";
import { Link,NavLink } from "react-router-dom";
const Header = () => {
  const LogStatus= useSelector((state) => state.isLoggedUser.isLogged);
  const LogInfo= useSelector((state) => state.isLoggedUser.loginInfo);
   const dispatch=useDispatch();
  const userAuth=async () => {
    const responseData=await axios.get(`/Swipecart/api-user-auth_token`)
    .then(res => {    
     const responseObj = res.data;  
     console.log(responseObj)
     dispatch(isLoggedUser({LogStatus:responseObj,LogInfo:LogInfo}))
     console.log(LogStatus + "IS DATA")
    })
  }
  
   useEffect(()=>{
        userAuth();
    },[])

  const LogoutUser=()=>{   
    axios.get(`/Swipecart/api/api-logout_auth`)
    .then(res => {    
     const responseObj = res.data;  
     console.log(responseObj)
     dispatch(isLoggedUser(responseObj))
     localStorage.clear();     
    let pathUrl = "/";
    window.location.href = pathUrl;   
   })
}
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
        
        {LogStatus==false ? 
          <div className="ac-btn">
           <a href="/login-auth" className="log-btn" name="login">Login</a>
          </div>
         :
         <>
          <div className="ac-btn">
           <a onClick={LogoutUser} className="log-btn logout" name="login">Logout</a>
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
export default Header;