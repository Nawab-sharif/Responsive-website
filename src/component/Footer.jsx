import React from "react";

export default function Footer(){
    const year = new Date().getFullYear();
    return(
        <>
            {/* <h1>Hello Bhai...</h1> */}
            <footer className=' w-100 bg-light text-center'>
                <p>©️ {year} Saif Techno Pvt. Ltd. All Rights Reserved | Terms and Condition</p>
            </footer>
        </>
    );
}