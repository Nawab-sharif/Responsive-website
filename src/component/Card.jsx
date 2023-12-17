import React from "react";
import img1 from './images/img1.jpg';
import {NavLink} from 'react-router-dom';

export default function Card(){
    return(
        <>
            <div className="col-md4 col-10 mx-auto" >
                <div className="card " >
                    <img src={img1} className="card-img-top" alt="Card image" height='450px'/>
                    <div className="card-body" >
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to='' className="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}