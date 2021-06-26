import React from "react"
import { NavLink } from "react-router-dom";
export default class Nevigationstrip extends React.Component{
  render(){
      return <>
           <div className="product_nav">
            <ul className="nav-links">
             <NavLink exact to="/" activeClassName="selected">Home</NavLink>
             <NavLink exact to="/smartphones">Smartphones</NavLink>
             <NavLink exact to="/laptops">Laptops</NavLink>
             <NavLink exact to="/headphones">Headphones</NavLink>
             <NavLink exact to="/trainingpage">CounterFunction</NavLink>
           </ul>
         </div>
      </>
  }
}