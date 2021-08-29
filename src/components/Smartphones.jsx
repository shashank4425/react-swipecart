import React from "react"
import Header from "./Header.jsx";
import Smartphoneslist from "../jsonlist/Smartphoneslist.json";
import { Link } from "react-router-dom";
//import Nevigationstrip from "./Nevigationstrip.jsx";
import Productstrip from "./Productstrip"
export default class Smartphones extends React.Component{  
  constructor(props){
    super();
    this.state = {
      products:Smartphoneslist
    }
  }

  SelectedBrand=(e)=>{
  const name=e.target.value
  
   Smartphoneslist.filter(item=>{ 
     if(name=="All"){
      this.setState(prevState=>{
        return {
            products:prevState.products=Smartphoneslist
         }  
      })
     }    
      else if(name===item.prodName ){
        this.state.products=[]; 
        this.setState(prevState=>{
          return {
              products:prevState.products.concat(item)
           }  
        })
      }
  })
  
  }
  render(){
    //const productsItem=this.state.products==[] ? Smartphoneslist : this.state.products;
    //console.log(productsItem)
    return(
      <>
       <Header/>
       <Productstrip/>
       <section>
       {/* <h1 className="total_prod">Best Selling Phones <p>{Smartphoneslist.length} Items</p></h1> */}
       <div className="mid-sec">
        <div className="product-categories-sec">
        <div className="all_pd_list">
        <div className="find_pd_byname">
         <p className="ftitle">Filters</p><hr/>
         <div className="left-sec-item">
          <div className="custom-select">
        
          <select onChange={this.SelectedBrand.bind(this)}>
              <option value="All" class="brandName">All Brands</option>
              <option value="Samsung">SAMSUNG</option>
              <option value="Vivo">VIVO</option>
              <option value="OPPO">OPPO</option>
              <option value="REDMI">REDMI</option>  
             
         </select>
         {/* <div class="_2gmUFU _3V8rao">Brand</div>
              <hr />
           <div class="left-sec-item">
            <li className="left-list-items"> <input type="checkbox"  name="Samsung" value="Samsung"/><span className="list_name">SAMSUNG</span></li>
            <li className="left-list-items"> <input type="checkbox" name="Vivo" value="Vivo"/><span className="list_name">VIVO</span></li>
            <li className="left-list-items"> <input type="checkbox" name="REDMI" value="REDMI"/><span className="list_name">REDMI</span></li>
            <li className="left-list-items"> <input type="checkbox" name="OPPO" value="OPPO"/><span className="list_name">OPPO</span></li>
           </div><hr /> 
            */}
        </div>
      </div>
     </div>
    </div>
      </div>
      <div className="right-product-sec">           
        {this.state.products.map(item => (
         <>
         <Link to={item.url} key={item.id} target="_blank">
         <div className="product smartphones" name={item.prodName}>
            <div className="listItem">
            <div class="left_img">
             <div className="prod_img_phones">
               <img src={item.prodPath} alt="imgtag" />
             </div>
             </div>
         <div className="mid-feature">
         <p className="prodTitle">{item.prodTitle}</p>
          <ul className="specs_list">
                 <li>{item.prodCamara}</li>
                 <li>{item.prodBattery}</li>
                 <li>{item.prodRam}</li>
                 <li>{item.prodRom}</li>
                 <li>{item.prodDisplaySize}</li>
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
}
