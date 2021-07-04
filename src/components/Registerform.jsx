import React, { useState } from "react";
import axios from "axios";
import Header from "./Header.jsx";
import { NavLink , useHistory} from "react-router-dom";
 const RegisterForm = () =>{
  
  const[data,User]=useState({
        firstname: "",
        lastname:"",
        emailid: "",
        password: "",
        confirmpassword: "",                                
        mobnumber: "",
        firstlineaddress: "",
        lastlineaddress: "",
        otp: ""
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
    const history=useHistory();
  const RegisterUser=(e)=>{
    e.preventDefault();
    console.log("calling")
      axios.post("/Swipecart/api-register_auth",data).then(response => {
        const status= response.data.sessionId;    
        localStorage.setItem("sessionId", status.sessionId)
        history.push('/');
        let pathUrl = window.location.href;          
        window.location.href = pathUrl;         
         }).catch(error => {
           console.log("Error got")
         })
    }

      return (
         <>
         <Header/>
         <div className="user-reg">
            <div className="left-brand-des">
                <h2 className="feature-tag"><span className="log-tag">Looks like you're new here!</span><span className="title-tag">Sign up with your email id to get started</span></h2>
            </div>
            <div className="right-sec-login">
              <div className="user-auth-tag-on">
              <form onSubmit={RegisterUser}>
               <input type="email" name="emailid" onChange={InputEvent} value={User.emailid} placeholder="Email Id" data-validation="required,validEmail"/>
               <span className="emailerror">Enter Email Id</span>
               <input type="password" name="password" onChange={InputEvent} value={User.password} placeholder="Password"/>
               <span className="passerror">Enter password</span>
               <input type="password" name="confirmpassword" onChange={InputEvent} value={User.confirmpassword} placeholder="Confirm Password"/>
               <span className="cpasserror">Enter confirm password</span>
               <div className="signup_form_btn"><button type="submit" className="signup-btn">Sign up</button></div>
               <NavLink exact to="/login-auth" className="reg_link">Already have an account?</NavLink>
              </form>
             </div>
          </div>
        </div>
       </>
      ) 
 }
 export default RegisterForm;