import React from "react";
import Laptoplist from "../jsonlist/Laptopslist.json";
import axios from "axios";
import Header from "./Header.jsx";
import Productstrip from "./Productstrip"
function Laptop(props){
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
    for(i=0;i<Laptoplist.length;i++){ 
        if(Laptoplist[i].id === url[1]){
          const item=Laptoplist[i];
          return (
            <>
            <Header/>
            <Productstrip/>
            <div className="laptop_product">
               <div className="listItem">
               <div className="left_sec">
               <div className="img_phones">
                  <img src={Laptoplist[i].prodPath} alt="imgtag" />
                </div>
                <ul className="row_btn">
                <button type="button" onClick={() => AddtoCart({ item })} className="add_to_cart">Add to Cart</button>
                <button type="button" onClick={() => BuyNow({ item })} className="buy-now-btn">Buy Now</button>
                </ul>
               </div>
               <div className="right_sec">
                <div className="prod_desc">
                 <h1>{Laptoplist[i].prodTitle} {Laptoplist[i].prodColor} {props.state}</h1>
                  <ul className="specs_list">
                      <li>{Laptoplist[i].GraphicProcessor}</li>
                      <li>{Laptoplist[i].prodRam}</li>
                      <li>{Laptoplist[i].prodDisplaySize}</li>
                      <li>{Laptoplist[i].RAMFrequency}</li>
                      <li>{Laptoplist[i].HDMIPort}</li>
                      <li>{Laptoplist[i].ProcessorVariant}</li>
                      <li>{Laptoplist[i].USBPort}</li>
                  </ul>
                 <span className="price-sec">
                  <span className="a-price screen_price">
                   <span className="a-price-symbol">???</span>
                   <span className="C_price p-sec">{Laptoplist[i].prodOfferPrice}</span>
                </span>
                <span className="a-price offscreen_price">
                  <span className="offscreen-symbol">???</span>
                  <span className="P_price p-sec">{Laptoplist[i].prodPrevPrice}</span>
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
 
export default Laptop;