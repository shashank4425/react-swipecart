import React from "react"
import Header from "./Header.jsx";
import Smartphoneslist from "../jsonlist/Smartphoneslist.json";
import { Link } from "react-router-dom";
import Productstrip from "./Productstrip"
export default class Smartphones extends React.Component{  
  constructor(props){
    super();
    this.state = {
      products:Smartphoneslist,
      selectedProd:[],
      checked:null,
      selectedItem:[],
      brand: {
				Samsung: false,
				Vivo: false,
				REDMI: false,
				OPPO: false
			},
      brandName : [
        {
        name :"Samsung",
        checked: false,
      },
      {
        name :"Vivo",
        checked: true,
      },
      {
        name :"REDMI",
        checked: false,
      },
      {
        name :"OPPO",
        checked: false
      }
    ],
      ram: {
				"1 GB RAM": false,
				"2 GB RAM": false,
				"3 GB RAM": false,
				"4 GB RAM": false
			},
      rom: {
				"8 GB ROM": false,
				"16 GB ROM": false,
				"32 GB ROM": false,
				"64 GB ROM": false
			},
      BRANDSelected:false,
      RAMSelected:false
    }
  }

  SelectedBrand=(e)=>{
    const { name, checked } = e.target;
  
    this.setState((prevState) => {
      const brand = prevState.brand;
      brand[name] = checked;
      const favColors =Object.keys(this.state.brand).filter((key) =>  this.state.brand[key]);
       this.state.selectedItem.push(favColors)
       if(favColors.length==0){
         return {
           products: Smartphoneslist
         }
       }else{
         Smartphoneslist.filter(item=>{  
          this.state.selectedItem.at("-1").map(selectedItems => {
            if(selectedItems==item.prodName ){
              this.state.products=[]; 
              this.setState(prevState=>{
                    return {
                      ...prevState,
                      products:prevState.products.concat(item),
                      BRANDSelected:true
                    }
              })
            
            } 
          })
       })
      }
      return brand;
    });    
    }
    // SelectedRAM=(e)=>{
    //   const { name, checked } = e.target;
    //   this.setState((prevState) => {
    //     const ram = prevState.ram;
    //     ram[name] = checked;
    //     const favBrand =Object.keys(this.state.ram).filter((key) =>  this.state.ram[key]);
    //      this.state.selectedItemRam.push(favBrand)
    //      if(favBrand.length==0){
    //        return {
    //          products: Smartphoneslist
    //        }
    //      }
    //       Smartphoneslist.filter(item=>{  
    //         this.state.selectedItemRam.at("-1").map(selectedItemRam => {
    //           if(selectedItemRam==item.prodRam ){
    //             this.state.products=[]; 
    //             this.setState(prevState=>{                   
    //                   return {
    //                     ...prevState,
    //                     products:prevState.products.concat(item),
    //                     RAMSelected:true
    //                   }
    //             })
    //           } 
    //         })  
    //      })
    //   });
    // }
  
  render(){
    return(
      <>
       <Header/>
       <Productstrip/>
       <section>
       <div className="mid-sec">
        <div className="product-categories-sec">
        <div className="all_pd_list">
        <div className="find_pd_byname">
         <p className="ftitle">Filters</p><hr/>
         <div className="left-sec-item">
          <div className="custom-select BRND_CAT">
         <div class="_2gmUFU _3V8rao">
            <div className="left_sec_cate">
             <div className="CATEGORY_HNG">Brand</div>
            <i className="arrow up"></i>
           </div>
          </div>
           <div class="left-sec-item">
           <li className="left-list-items"> <input type="checkbox" defaultChecked={this.state.brand.Samsung}  onChange={this.SelectedBrand.bind(this)} name="Samsung" value="Samsung"/><span className="list_name">SAMSUNG</span></li>
            <li className="left-list-items"> <input type="checkbox" defaultChecked={this.state.brand.Vivo} onChange={this.SelectedBrand.bind(this)} name="Vivo" value="Vivo"/><span className="list_name">VIVO</span></li>
            <li className="left-list-items"> <input type="checkbox" defaultChecked={this.state.brand.REDMI}  onChange={this.SelectedBrand.bind(this)} name="REDMI" value="REDMI"/><span className="list_name">REDMI</span></li>
            <li className="left-list-items"> <input type="checkbox" defaultChecked={this.state.brand.OPPO} onChange={this.SelectedBrand.bind(this)} name="OPPO" value="OPPO"/><span className="list_name">OPPO</span></li>
            {/* {this.state.brandName.map(item => (
            <div className="brand">
             <li className="left-list-items"> <input type="checkbox" onChange={this.SelectedBrand.bind(this)} name={item.name} value={item.name}/><span className="list_name">{item.name}</span></li>
            </div>
          ))} */}
        </div>
        </div>
        {/* <div className="custom-select BRND_CAT">
         <div class="_2gmUFU _3V8rao">
            <div className="left_sec_cate">
             <div className="CATEGORY_HNG">PRICE</div>
            <i className="arrow up"></i>
           </div>
          </div>
           <div class="left-sec-item">
            <li className="left-list-items"> <input type="checkbox" defaultChecked={this.state.brand.MAXFIFTEEN}  onChange={this.SelectedBrand.bind(this)} name="9,999 - 14,999" value="9,999 - 14,999"/><span className="list_name">9,999 - 14,999</span></li>
            <li className="left-list-items"> <input type="checkbox" defaultChecked={this.state.brand.MAXTWENTYFIVE} onChange={this.SelectedBrand.bind(this)} name="15,000 - 24,999" value="15,000 - 24,999"/><span className="list_name">15,000 - 24,999</span></li>
            <li className="left-list-items"> <input type="checkbox" defaultChecked={this.state.brand.MAXTHIRTYFIVE}  onChange={this.SelectedBrand.bind(this)} name="20,000 - 34,999" value="20,000 - 34,999"/><span className="list_name">20,000 - 34,999</span></li>
            <li className="left-list-items"> <input type="checkbox" defaultChecked={this.state.brand.MAXFIFTY} onChange={this.SelectedBrand.bind(this)} name="35,000 - 50,000" value="35,000 - 50,000"/><span className="list_name">35,000 - 50,000</span></li>
        </div>
        </div> */}
        {/* <div className="custom-select BRND_CAT">
         <div class="_2gmUFU _3V8rao">
            <div className="left_sec_cate">
             <div className="CATEGORY_HNG">RAM</div>
            <i className="arrow up"></i>
           </div>
          </div>
           <div class="left-sec-item">
            <li className="left-list-items"> <input type="checkbox" defaultChecked={this.state.brand.ONEGBRAM}  onChange={this.SelectedRAM.bind(this)} name="1 GB RAM" value="1 GB RAM"/><span className="list_name">1 GB RAM</span></li>
            <li className="left-list-items"> <input type="checkbox" defaultChecked={this.state.brand.TWOGBRAM} onChange={this.SelectedRAM.bind(this)} name="2 GB RAM" value="2 GB RAM"/><span className="list_name">2 GB RAM</span></li>
            <li className="left-list-items"> <input type="checkbox" defaultChecked={this.state.brand.THREEGBRAM}  onChange={this.SelectedRAM.bind(this)} name="3 GB RAM" value="3 GB RAM"/><span className="list_name">3 GB RAM</span></li>
            <li className="left-list-items"> <input type="checkbox" defaultChecked={this.state.brand.FOURGBRAM} onChange={this.SelectedRAM.bind(this)} name="4 GB RAM" value="4 GB RAM"/><span className="list_name">4 GB RAM</span></li>
        </div>
        </div> */}
        {/* <div className="custom-select BRND_CAT">
         <div class="_2gmUFU _3V8rao">
            <div className="left_sec_cate">
             <div className="CATEGORY_HNG">INTERNAL STORAGE CAPECITY</div>
            <i className="arrow up"></i>
           </div>
          </div>
          <div class="left-sec-item">
            <li className="left-list-items"> <input type="checkbox" defaultChecked={this.state.brand.EIGHTGBRAM}  onChange={this.SelectedROM.bind(this)} name="8 GB ROM" value="8 GB ROM"/><span className="list_name">8 GB ROM</span></li>
            <li className="left-list-items"> <input type="checkbox" defaultChecked={this.state.brand.SIXTEENGBRAM} onChange={this.SelectedROM.bind(this)} name="16 GB ROM" value="16 GB ROM"/><span className="list_name">16 GB ROM</span></li>
            <li className="left-list-items"> <input type="checkbox" defaultChecked={this.state.brand.THRITYTWOGBRAM}  onChange={this.SelectedROM.bind(this)} name="32 GB ROM" value="32 GB ROM"/><span className="list_name">32 GB ROM</span></li>
            <li className="left-list-items"> <input type="checkbox" defaultChecked={this.state.brand.SIXTYFOURGBRAM} onChange={this.SelectedROM.bind(this)} name="64 GB R0M" value="64 GB R0M"/><span className="list_name">64 GB R0M</span></li>
        </div>
        </div> */}
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
