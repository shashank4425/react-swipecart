import React from "react";
import axios from "axios";
import Header from "./Header.jsx";
import { isLoggedUser } from "../actionTypes/action";
import { NavLink, useHistory} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
const Loginform = () =>{ 
  const LogStatus= useSelector((state) => state.isLoggedUser.isLogged);
  console.log("log status" + LogStatus);
  const[Logdata,User]=useState({
    emailid: "",
    password: "",
   })
   const[message,logMess]=useState({
     logError:null
   })
     InputEvent=(event)=>{
      const{name,value}=event.target;
      User((prevState => {
      return{
        ...prevState, 
        [name]:value
       }
      }))
    }
const dispatch=useDispatch();
const history=useHistory();
  const LoginUser=(e)=>{
  e.preventDefault();
   axios.post("/Swipecart/api-user_loginauth",Logdata).then(response => {
    const status= response.data      
      if(status.resCode==1) {  
        logMess((prevState => {
          return{
            ...prevState, 
            logError:status.errMess
           }
          }))
        //  this.setState((preState =>{
        //    return {
        //      AuthErrMsg:preState.AuthErrMsg=status.errMess
        //    }
        //  }))
     }
     else{
     dispatch(isLoggedUser({LogStatus:status.sessionStatus}))
     //history.push("/")
       localStorage.setItem("sessionId", status.sessionId)
        let pathUrl = "https://swipecartapi.herokuapp.com";          
        window.location.href = pathUrl;  
     }
    }).catch(error => {
      console.log("Error got")
  })
  }
return (     
  <>
   <Header/>
  <div className="user-reg">
      <div className="left-brand-des">
          <h2 className="feature-tag"><span className="log-tag">Login</span><span className="title-tag">Get Access To your orders, and many more</span></h2>
      </div>
      <div className="right-sec-login">
       <div className="user-auth-tag">
       <form onSubmit={LoginUser}>
          <input type="email" name="emailid" placeholder="Email Id" onChange={InputEvent} value={User.emailid} data-validation="required,validEmail"/>
          <span className="emailerror">Enter Email Id</span>
          <input type="password" name="password" placeholder="Password" onChange={InputEvent} value={User.password}/>
          <span className="passerror">Enter password</span>
          <div className="login_form_btn"><button type="submit" className="login-btn">Login</button></div>
            {message.logError==null ? "" : <div class="error"><span class="Error">{message.logError}</span></div> }
          <NavLink exact to="/register-auth" className="reg_link">New to SwipCard? Create an account</NavLink>
        </form>
        </div>
       </div>
      </div>
  </>
 )
}
export default Loginform;