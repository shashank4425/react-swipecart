import React from "react";
import { NavLink } from "react-router-dom";
export default class Productstrip extends React.Component{
render(){
    return <>
         <div className="product_nav">
          <ul className="nav-links-prod">
          <div className="EC_SM"><NavLink exact to="/smartphones"><div className="title">Smartphones</div></NavLink></div>
          <div className="EC_SM"> <NavLink exact to="/laptops"><div className="title">Laptops</div></NavLink></div>
          <div className="EC_SM"><NavLink exact to="/headphones"><div className="title">Headphones</div></NavLink></div>
          <div className="EC_SM"><NavLink exact to="/trainingpage"><div className="title">CounterFunction</div></NavLink></div>
         </ul>
       </div>
    </>
}
}