import React from "react";
import img from './images/img1.jpg';
import Common from "./Common";

export default function Home(){
    return(<Common
        name='Grow your bussiness with ' 
        imgsrc={img} visit='/service' 
        btname='Get Started'    
        />);
}