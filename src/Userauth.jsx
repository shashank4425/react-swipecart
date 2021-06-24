import react from "react";
import "./Userauth.css";
const Userauth = () => {
    return (
        <>
        <section>
        <div className="user-reg">
        <div className="left-brand-des">
                <h2 className="feature-tag"><span className="log-tag">Login</span><span className="title-tag">Get Access To your orders, and
                        many more</span></h2>
            </div>
            <div className="right-sec-login">
            <div className="user-auth-tag">
                 <input type="email" name="emailId" placeholder="Email Id" data-validation="required,validEmail"/>
                 <span className="emailerror">Enter Email Id</span>
                 <input type="password" name="Password" placeholder="Password"/>
                 <span className="passerror">Enter password</span>
                 <div className="login_form_btn"><button type="submit" className="login-btn">Login</button></div>
                 <p className="reg_link">New to SwipCard? Create an account</p>
             </div> 
             <div className="user-auth-tag-on">
                    <input type="email" name="emailId" placeholder="Email Id" data-validation="required,validEmail"/>
                    <span className="emailerror">Enter Email Id</span>
                    <input type="password" name="password" placeholder="Password"/>
                    <span className="passerror">Enter password</span>
                    <input type="password" name="confirmpassword" placeholder="Confirm Password"/>
                    <span className="cpasserror">Enter confirm password</span>
                    <div className="signup_form_btn"><button type="submit" className="signup-btn">Sign up</button></div>
                    <p className="log_link">Already have an account?</p>
                </div>
            </div>
          
        </div>
        </section>
        
        </>
    )
}
export default Userauth;