import React from "react";
import axios from "axios";
import Header from "./Header.jsx";
import Cartloadingview from "./Cartloadingview.jsx";
import Emptycart from  "./Emptycart.jsx";
export default class Productcart extends React.Component {
  constructor(props){
    super();
    this.state = {
     status:0, 
     countItem:1,
     vlsppp:0,
     vlspop:0,
     cartlist: [],
     cartitemvisibility:false
   }
  }
   componentDidMount() {    
     axios.get(`/Swipecart/api/GETSwipecartitems`)
       .then(res => {    
        const cartlist = res.data;  
        if(cartlist.length==0){
          this.setState({cartitemvisibility : true})
        }     
        else{
          this.setState({ cartlist });
          this.setState((prevState) =>{
            return  {
                status : prevState.status + 1
            }     
          })
        }
       })
   }
   _INCBTN(person) {
    this.setState((prevState => {
      if(prevState.countItem<4){
        return {
          countItem : prevState.countItem +1
        }
      }
    }))
   }
   _DECBTN(person,e) {
    this.setState((prevState => {
      return{  
        countItem : prevState.countItem -1,
      }
     }))
   }
    _REMOVEITEM(person){
      axios.delete(`/Swipecart/api/RemoveSwipecartitem/${person.id}`)
      .then(res => {
        this.setState((prevState => {
          return{  
            cartlist :  prevState.cartlist.filter(item =>{
               return person !== item 
            })
          }
        }))
        this.setState((prevState => {
          if(prevState.cartlist.length==0){
            this.setState({ cartitemvisibility : true });
          }
         }))
      })
    }
    _PLACE_ORDER(){
      alert("Sorry! Order can be placed from 31 June 2021.")
    }
   render() {
     const plusdisabled=this.state.countItem === 4 ? "disabled" : "";
     const mindisabled=this.state.countItem === 1 ? "disabled" : "";
    let prodPrevPrice=[],prodOfferPrice=[], Discount=0;
     {this.state.cartlist.map(val=>{
      this.state.vlsppp=val.prodPrevPrice.replace(/\,/g,'');
       prodPrevPrice.push(parseInt(this.state.vlsppp));
       this.state.vlspop=val.prodOfferPrice.replace(/\,/g,'');
       prodOfferPrice.push(parseInt(this.state.vlspop)); 
      })}
       prodPrevPrice = prodPrevPrice.reduce(function(val1, val2) { return val1 + val2; }, 0);
       prodOfferPrice = prodOfferPrice.reduce(function(val1, val2) { return val1 + val2; }, 0);
       Discount= prodPrevPrice - prodOfferPrice;
      return (
       <>
        
        {this.state.cartitemvisibility === false ?  (!this.state.status ? <Cartloadingview/> :
         <>
         <Header/>
         <div className="container-fluid">
         <ul className="deatils_Section_list">
         <ul className="left_detail_list">
          <div className="length-item">
           <span className="heading-sec">My Cart ( {this.state.cartlist.length} )</span>
          </div>
         <div className="cart-section">
         <div className="force-overflow"> 
          {this.state.cartlist.map(person => 
           <div className="CIL_SECTION">
            <div className="left_details">
            <div className="cart_details">
              <div className="details-sec">
               <div className="left-img-sec">
                 <img src={person.prodPath} className={person.prodName}/>
               </div>
               <div className="right-prod-sec">
                 <h1 className="title">{person.prodTitle} ( {person.prodColor} )</h1>
                 <ul>
                   <li>{person.prodRam}</li>
                   <li className="prodOfferPrice" prodOfferPrice={person.prodOfferPrice}>{person.prodOfferPrice}</li>
                   <li className="prodPrevPrice" prodPrevPrice={person.prodPrevPrice}>{person.prodPrevPrice}</li>
                 </ul>
                 <div className="_CNT_BTN">
                 <button className="_23FHuj" onClick={this._DECBTN.bind(this,person)} disabled={mindisabled}> – </button>
                 <input type="text" className="TI_CNT" value={this.state.countItem}/>
                  <button className="_23FHuj" onClick={this._INCBTN.bind(this,person)} disabled={plusdisabled}> + </button>  
                 </div>
                 <span className="_RITEM" onClick={this._REMOVEITEM.bind(this,person)}>REMOVE</span>  
               </div>
             </div>
           </div>
          </div>
         </div>        
         )}
         </div>
         </div>
         <div class="placeorder_sec"><button type="button" onClick={this._PLACE_ORDER.bind(this.state.cartlist)} class="placeorder_btn">Place Order</button></div>
        </ul>
         {<div className="right_details">
         <div className="right-price-sec">
         <span className="heading-sec">Price Details</span>
         </div>
            <div className="price_details">
           <div className="result_Sec">
           <div className="left-title">
           <span>Price ( {this.state.cartlist.length} Items ) </span>
            <span>Discount</span>
             <span>Delivery Charges</span>
           </div> 
           <div className="right-psec">
            <span>{this.state.countItem==1? prodPrevPrice: prodPrevPrice*this.state.countItem}</span>
             <span>- {Discount * this.state.countItem}</span>
              <span className="status">FREE</span>            
             </div>
            </div>
            <div className="total_amnt-result">
             <div className="left-title">
              <div className="amnt-title">Total Amount</div>
             </div>          
             <div className="right-psec"><span>{this.state.countItem==1? prodOfferPrice: prodOfferPrice*this.state.countItem}</span></div>
              </div>
             </div>            
           </div>
           }
         </ul>
         </div>
         </>
        ): <Emptycart/>
        
        }
        </>
        )
   }
 }