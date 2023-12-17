import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Routes , Route} from 'react-router-dom';
import Navabar from "./component/Navbar";
import Home from "./component/Home";
import Contact from "./component/Contact";
import About from "./component/About";
import Service from "./component/Service";
import Footer from "./component/Footer";

export default function App(){
    return(
        <>
            {/* <h1>Welcome</h1> */}
            <Navabar/>
            
            <Routes>
                <Route  exact path="/" Component={Home}/>
                <Route path="/about" Component={About}/>
                <Route path="/service" Component={Service}/>
                <Route path="/contact" Component={Contact}/>
                <Route path="*" Component={Home}/>
            </Routes>
            <Footer/>
        </>
    );
}