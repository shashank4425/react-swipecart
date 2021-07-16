import react from "react";
import {  useSelector } from "react-redux";
import Header from "./Header.jsx";
import Nevigationstrip from "./Nevigationstrip.jsx";
const Home = () => {
    // const LogStatus= useSelector((state) => state.isLoggedUser.isLogged);
    // console.log("log status" + LogStatus);
    return (
        <>
         <Header/>
        <Nevigationstrip/>
         <h1> This is Home page</h1>
        </>
    )
}
export default Home;