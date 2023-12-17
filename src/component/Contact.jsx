import React, { useState } from "react";

export default function Contact(){
    const [data,setData] = useState({
        fullname:'',
        phone:'',
        email:'',
        msg:''
    });

    function inputEvent(event){
        const {name,value} = event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            };
        });
    }

    function formSubmit(e){
        e.preventDefault();
        alert(
            `Hello, I am ${data.fullname} My phone number is ${data.phone} and My E-mail is ${data.email}`)
    }
    return(
        <>
            <div className=" my-5">
                <h1 className=" text-center">Contact US</h1>
            </div>
            <div className=" container contact_div">    
                <div className=" row">
                    <div className=" col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                            <input type="text" 
                            class="form-control" 
                            id="exampleFormControlInput1" 
                            name="fullname"
                            // value={data.fullname}
                            onClick={inputEvent}
                            placeholder="Enter your name"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Phone</label>
                            <input type="number" 
                            class="form-control" 
                            id="exampleFormControlInput1" 
                            name="phone"
                            // value={data.phone}
                            onClick={inputEvent}
                            placeholder="Enter phone number"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" 
                            class="form-control" 
                            id="exampleFormControlInput1" 
                            name="email"
                            // value={data.email}
                            onClick={inputEvent}
                            placeholder="name@example.com"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                            <textarea class="form-control" 
                            id="exampleFormControlTextarea1" 
                            rows="3"
                            name="msg"
                            // value={data.msg}
                            onChange={inputEvent}></textarea>
                        </div>
                        <div className="col-12 align-content-center" >
                            <button className="btn btn-outline-primary " type="submit">Submit Form</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>       
    );
}