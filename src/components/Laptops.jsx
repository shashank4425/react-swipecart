import React from "react"
import Header from "./Header.jsx";
import Laptoplist from "../jsonlist/Laptopslist.json";
import { Link} from "react-router-dom";
import Productstrip from "./Productstrip"
//import Nevigationstrip from "./Nevigationstrip.jsx";
export default class Laptops extends React.Component{  
    constructor(props){
      super();
      this.state = {
        products:Laptoplist
  
      }
    }
  SelectedBrand=(e)=>{
    const name=e.target.value
  
    Laptoplist.filter(item=>{     
        if(name===item.prodName ){
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
    return (
      <>
      <Header/>
       <Productstrip/>
      <section>
       {/* <h1 className="total_prod">Best Selling Laptops <p>{Laptoplist.length} Items</p></h1> */}
       <div className="mid-sec">
         <div className="product-categories-sec">
         <div className="all_pd_list">
          <div className="find_pd_byname">
           <p className="ftitle">Filters</p><hr/>
           <div className="left-sec-item">
           <div className="custom-select">
          <select onChange={this.SelectedBrand.bind(this)}>
              <option value="All">Select Item</option>
              <option value="Dell">Dell</option>
              <option value="Lenovo">Lenovo</option>
         </select>
         </div>
          </div>
        </div>
       </div>
         </div>
         <div className="right-product-sec">
         {Laptoplist.map(item => (
            <>
            <Link to={item.url} target="_blank">
              <div className="product laptops" name={item.prodName}>
               <div className="listItem">
               <div className="prod_img_lap">
                  <img src={item.prodPath} alt="imgtag" />
                </div>
                <div className="mid-feature">
                <p className="prodTitle">{item.prodTitle}</p>
                 <ul className="specs_list">
                    <li>{item.prodRam}</li>
                    <li>{item.prodDisplaySize}</li>
                    <li>{item.GraphicProcessor}</li>
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