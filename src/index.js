import React from "react";
import ReactDom from "react-dom";
import App from "./App.jsx";
import Header from "./components/Header.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDom.render(
<BrowserRouter>
    <Header/>
    <App/>
</BrowserRouter>,document.getElementById("root"))



