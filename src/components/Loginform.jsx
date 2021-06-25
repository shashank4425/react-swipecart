import React from "react";
import axios from "axios";
import { NavLink} from "react-router-dom";

export default class Loginform extends React.Component{ 
  constructor(props){
    super(props);
    this.state={
          emailid:"",
          password:"",
        }
    this.state={
     AuthErrMsg:null
    }

    this.LoginUser=this.LoginUser.bind(this);
    this.InputEvent=this.InputEvent.bind(this);
  } 

  InputEvent=(event)=>{
    this.setState({
     [event.target.name]:event.target.value
    })
  }
    // const history=useHistory();
     LoginUser=(e)=>{

     e.preventDefault();
      axios.post("/Swipecart/api-user_loginauth",this.state).then(response => {
       const status= response.data      
         if(status.resCode==1) {   
            this.setState((preState =>{
              return {
                AuthErrMsg:preState.AuthErrMsg=status.errMess
              }
            }))
        }
        else{
          localStorage.setItem("sessionId", status.sessionId)
           let pathUrl = "http://swipecart.herokuapp.com/";          
           window.location.href = pathUrl;  
        }
       }).catch(error => {
         console.log("Error got")
     })
    }
    
    render(){
    return (
     
        <>
        <div className="user-reg">
            <div className="left-brand-des">
                <h2 className="feature-tag"><span className="log-tag">Login</span><span className="title-tag">Get Access To your orders, and many more</span></h2>
            </div>
            <div className="right-sec-login">
             <div className="user-auth-tag">
             <form onSubmit={this.LoginUser}>
                <input type="email" name="emailid" placeholder="Email Id" onChange={this.InputEvent} value={this.state.emailid} data-validation="required,validEmail"/>
                <span className="emailerror">Enter Email Id</span>
                <input type="password" name="password" placeholder="Password" onChange={this.InputEvent} value={this.state.password}/>
                <span className="passerror">Enter password</span>
                <div className="login_form_btn"><button type="submit" className="login-btn">Login</button></div>
                 { this.state.AuthErrMsg==null ? "" : <div class="error"><span class="Error">{this.state.AuthErrMsg}</span></div> }
                <NavLink exact to="/register-auth" className="reg_link">New to SwipCard? Create an account</NavLink>
              </form>
              </div>
             </div>
            </div>
        </>
    )
 } 
}
