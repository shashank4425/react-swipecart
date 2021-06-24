import React, { useState } from "react";
import axios from "axios";
import { NavLink,useHistory} from "react-router-dom";

const Loginform=()=>{  
  const[data,findUser]=useState({
    emailid:"",
    password:""
  })
  InputEvent=(event)=>{
    const{name,value}=event.target;
    findUser((prevState => {
      return{
        ...prevState, 
        [name]:value
       }
    }))
  }
    const history=useHistory();
    const LoginUser=(e)=>{
     e.preventDefault();
      axios.post("/Swipecart/api-user_loginauth",data).then(response => {
       const status= response.data      
         if(status.resCode==1) {                   
          return alert(status.errMess)
        }
        else{
          localStorage.setItem("sessionId", status.sessionId)
          history.push('/');
          let pathUrl = window.location.href;
        window.location.href = pathUrl;  
        }
       }).catch(error => {
         console.log("Error got")
     })
    }
    
    return (
     
        <>
        <div className="user-reg">
            <div className="left-brand-des">
                <h2 className="feature-tag"><span className="log-tag">Login</span><span className="title-tag">Get Access To your orders, and many more</span></h2>
            </div>
            <div className="right-sec-login">
             <div className="user-auth-tag">
             <form onSubmit={LoginUser}>
                <input type="email" name="emailid" placeholder="Email Id" onChange={InputEvent} value={findUser.emailid} data-validation="required,validEmail"/>
                <span className="emailerror">Enter Email Id</span>
                <input type="password" name="password" placeholder="Password" onChange={InputEvent} value={findUser.password}/>
                <span className="passerror">Enter password</span>
                <div className="login_form_btn"><button type="submit" className="login-btn">Login</button></div>
                {/* {Logstatus.status==null ? "" : <div class="error"><span class="Error">{Logstatus.status}</span></div> } */}
                <NavLink exact to="/register-auth" className="reg_link">New to SwipCard? Create an account</NavLink>
              </form>
              </div>
             </div>
            </div>
        </>
    )
}
export default Loginform;
