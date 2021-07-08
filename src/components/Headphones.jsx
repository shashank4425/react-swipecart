import React from "react";
import Headphoneslist from "../jsonlist/Headphoneslist.json";
import {Link} from "react-router-dom";
import Header from "./Header.jsx";
import Nevigationstrip from "./Nevigationstrip.jsx";
function Headphones(){

  const SelectedBrand=(e)=>{
    const name=e.target.value
    this.state.products.filter(item=>{    
      this.setState((prevState=>{
       if(name===item.prodName){
         console.log(item)
        this.state.products.push(item)
        console.log(item)
         return{
           ...this.state.products, products:[item]
         }
       }
      }))
    })
  }
      return (
        <>
         <Header/>
       <Nevigationstrip/>
        <section>
         <h1 className="total_prod">Best Selling Headphones <p>{Headphoneslist.length} Items</p></h1>
         <div className="mid-sec">
           <div className="product-categories-sec">
           <div className="all_pd_list">
            <div className="find_pd_byname">
             <p className="ftitle">Filters</p><hr/>
             <div className="left-sec-item">
             <div className="custom-select">
            <select onChange={SelectedBrand}>
              <option value="All">Select Item</option>
              <option value="boAt">boAt</option>
           </select>
           </div>
            </div>
          </div>
         </div>
           </div>
           <div className="right-product-sec">
           {Headphoneslist.map(item => (
              <>
              <Link to={item.url} target="_blank">
                <div className="product aceesories" name={item.prodName}>
                 <div className="listItem">
                 <div className="prod_img_elc">
                    <img src={item.prodPath} alt="imgtag" />
                  </div>
                  <div className="mid-feature">
                  <p className="prodTitle">{item.title}</p>
                 <ul className="specs_list">
                      <li>Color : {item.color}</li>
                      <li>Batterylife : {item.Batterylife}</li>
                  </ul>
                  </div>
                  <div className="prod_desc">
                <span className="price-sec">
                  <span className="a-price screen_price">
                    <span className="a-price-symbol">₹</span>
                    <span className="C_price p-sec">{item.prodOfferPrice}</span>
                </span>
                <span className="a-price offscreen_price">
                    <span className="offscreen-symbol">₹</span>
                    <span className="P_price p-sec">{item.prodPrevPrice}</span>
                </span>
            </span>
          </div>
        </div>
      </div>
     </Link>
     </>
     ))} 
   </div>
  </div>
  </section>
</> 
)}
 export default Headphones;
