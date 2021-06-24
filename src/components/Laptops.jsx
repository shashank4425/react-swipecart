import react from "react";
import Laptoplist from "../jsonlist/Laptopslist.json";
import { Link} from "react-router-dom";
import Nevigationstrip from "./Nevigationstrip.jsx";
function Laptops(){
    return (
      <>
      <Nevigationstrip/>
      <section>
       <h1 className="total_prod">Best Selling Products <p>{Laptoplist.length} Items</p></h1>
       <div className="mid-sec">
         <div className="product-categories-sec">
         <div className="all_pd_list">
          <div className="find_pd_byname">
           <p className="ftitle">Filters</p><hr/>
           <div className="left-sec-item">
             <li className="left-list-items"> <input type="checkbox" name="5010" value="5010"/><span className="list_name">All</span></li>
             <li className="left-list-items"> <input type="checkbox" name="Dell"  value="Dell"/><span className="list_name">Dell</span></li>
             <li className="left-list-items"> <input type="checkbox" name="Lenovo"  value="Lenovo"/><span className="list_name">Lenovo</span></li>
          </div><hr/>
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
export default Laptops;