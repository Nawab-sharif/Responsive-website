import React from "react";
import img from './images/img1.jpg';
import Common from "./Common";


export default function About(){
    return(<Common 
        name='Welcome to About Page' 
        imgsrc={img} visit='/contact' 
        btname='Contact Now'    
        />);
}