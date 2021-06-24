import React from "react"
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home.jsx";
import Smartphones from "./components/Smartphones.jsx";
import Smartphone from "./components/Smartphone";
import Headphones from "./components/Headphones.jsx";
import Laptops from "./components/Laptops.jsx";
import Laptop from "./components/Laptop.jsx";
import Productcart from "./components/Productcart";
import Cartlistpage from "./components/Cartlistpage";

import LoginAuth from "./components/Loginform.jsx";
import RegisterAuth from "./components/Registerform.jsx";

import Error from "./components/Error.jsx";
import Counterfunction from "./components/Trainingfolder/Countfunction.jsx"
const App = () => {

    return (
        <>
        <Switch>
        <Route exact path="/" component={Home}/>
         <Route exact path="/smartphones" component={Smartphones}/>
         <Route exact path="/smartphone" component={Smartphone}/>
         <Route exact path="/laptops" component={Laptops}/>
         <Route exact path="/laptop" component={Laptop}/>
         <Route exact path="/headphones" component={Headphones}/>
         <Route exact path="/cartitem" component={Productcart}/>
         <Route exact path="/login-auth" component={LoginAuth}/>
         <Route exact path="/register-auth" component={RegisterAuth}/>
         <Route exact path="/VCLSwipcartDetails/cartilist" component={Cartlistpage}/>
         <Route exact path="/trainingpage" component={Counterfunction}/>
         <Route component={Error}/>
        </Switch>
   </>
   )
  
}

export default App;