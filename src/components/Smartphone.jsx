import React from "react";
import Header from "./Header.jsx";
import Smartphoneslist from "../jsonlist/Smartphoneslist.json";
import axios from "axios";
import Nevigationstrip from "./Nevigationstrip.jsx";
function Smartphone(props){
  var url=window.location.href,i=0;
  url=url.split("=");  
 
  
  const AddtoCart=(val)=>{
    const data={
      id:val.item.id,
      url:val.item.url,
      prodName:val.item.prodName,
      prodTitle:val.item.prodTitle,
      prodColor:val.item.prodColor,
      prodRam:val.item.prodRam,
      prodOfferPrice:val.item.prodOfferPrice,
      prodPrevPrice:val.item.prodPrevPrice,
      prodPath:val.item.prodPath,
      prodDisplaySize:val.item.prodDisplaySize,
      quantity:val.item.quantity
    };
   axios.post("/Swipecart/api/AddtoCart",data).then(response => {
    alert("Product added in your cart! To View got to 'View Cart' section ")
    }).catch(error => {
      alert("Error got")
    })
  }
  const BuyNow= (val) => alert(JSON.stringify(val.item)  +" >  Currently this product is not available.")
 
    for(i=0;i<Smartphoneslist.length;i++){ 
        if(Smartphoneslist[i].id === url[1]){
          const item=Smartphoneslist[i];
          return (
            <>
             <Header/>
            <Nevigationstrip/>
            <div className="smartphone_product">
               <div className="listItem">
               <div className="left_sec">
               <div className="img_phones">
                  <img src={Smartphoneslist[i].prodPath} alt="imgtag" />
                </div>
                <ul className="row_btn">
                <button type="button" onClick={() => AddtoCart({ item })} className="add_to_cart">Add to Cart</button>
                <button type="button" onClick={() => BuyNow({ item })} className="buy-now-btn">Buy Now</button>
                </ul>
               </div>
               <div className="right_sec">
                <div className="prod_desc">
                 <h1>{Smartphoneslist[i].prodTitle} {Smartphoneslist[i].prodColor} {props.state}</h1>
                  <ul className="specs_list">
                      <li>{Smartphoneslist[i].prodCamara}</li>
                      <li>{Smartphoneslist[i].prodBattery}</li>
                      <li>{Smartphoneslist[i].prodRam}</li>
                      <li>{Smartphoneslist[i].prodRom}</li>
                      <li>{Smartphoneslist[i].prodDisplaySize}</li>
                  </ul>
                 <span className="price-sec">
                  <span className="a-price screen_price">
                   <span className="a-price-symbol">₹</span>
                   <span className="C_price p-sec">{Smartphoneslist[i].prodOfferPrice}</span>
                </span>
                <span className="a-price offscreen_price">
                  <span className="offscreen-symbol">₹</span>
                  <span className="P_price p-sec">{Smartphoneslist[i].prodPrevPrice}</span>
              </span>
          </span>
        </div>
      </div>
   </div>
  </div>    
            </>
          )
        }
    }
  }
 
export default Smartphone;