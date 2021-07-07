import React from "react"
import { NavLink } from "react-router-dom";
export default class Nevigationstrip extends React.Component{
  render(){
      return <>
           <div className="product_nav">
            <ul className="nav-links">
            <div className="EC_SM"><NavLink exact to="/smartphones"><div className="img_Sec"><img src="/images/22ff11CC.png"/></div><div className="title">Smartphones</div></NavLink></div>
            <div className="EC_SM"> <NavLink exact to="/laptops"><div className="img_Sec"><img src="/images/laptop3fzhzkvchccq.jpeg"/></div><div className="title">Laptops</div></NavLink></div>
            <div className="EC_SM"><NavLink exact to="/headphones"><div className="img_Sec"><img src="/images/rockerz-450-boat-original-headp.jpeg"/></div><div className="title">Headphones</div></NavLink></div>
            <div className="EC_SM"><NavLink exact to="/trainingpage"><div className="img_Sec"></div><div className="title">CounterFunction</div></NavLink></div>
           </ul>
         </div>
      </>
  }
}