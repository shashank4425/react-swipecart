import React from "react"
import Header from "./Header.jsx";
class Cartloadingview extends React.Component{
  render(){
      return <>
      <Header/>
           <div className="loading_sec">
           <div className="loading_center">
           <p className="loading_txt">Please wait while loading your cart list.</p>
           </div>
           </div>
      </>
  }
}
export default Cartloadingview;