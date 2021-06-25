import React from "react";
import axios from "axios";
import { Link,useHistory } from "react-router-dom";
export default class extends React.Component {
  constructor(props){
    super();
    this.state={
      AuthStatus:null
    }
  }  
  componentDidMount() {    
    axios.get(`/Swipecart/api-user-auth_token`)
      .then(res => {    
       const staus = res.data;  
         this.setState((prevState) =>{
           return  {
            AuthStatus : staus.sessionId
           }     
         })
      })
  }
   LogoutUser=()=>{     
    this.setState((prevState) =>{
      return  {
       AuthStatus : prevState.AuthStatus=null
      }     
    })
    let pathUrl = window.location.href;
    window.location.href = pathUrl;   
   }
  
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
        {!this.state.AuthStatus ? 
          <div className="ac-btn">
           <a href="/login-auth" className="log-btn" name="login">Login</a>
          </div>
         :
          <div className="ac-btn">
           <a onClick={this.LogoutUser} className="log-btn logout" name="login">Logout</a>
          </div>
          }
        </div> 
      </div>
     </div>
    </>
  )
 }
}
