import { useState } from "react"


export default function Form ({showFormData}){
let [formData , setformData] =useState({
 fullName: "",
 userName: "",
 password: ""
});

let handleClick=(event)=>{
  setformData( (currentData)=>{
return {...currentData, [event.target.name]:event.target.value};
  
});
};

let stopDefault = (event)=>{
 event.preventDefault();
 console.log("hhhhhh",formData);
 showFormData(formData);
 
 setformData({
    fullName: "",
    userName: "",
    password: ""
 });
};

    return (
        <div>
            <form onSubmit={stopDefault}>
                <label htmlFor="fullname"> Full Name</label>
               <input placeholder="Enter Your FullName" value={formData.fullName} onChange={handleClick} id="fullname" name="fullName"/>

               <label htmlFor="username"> User Name</label>
               <input placeholder="Enter Your username" value={formData.userName} onChange={handleClick} id="username" name="userName"/>

               <label htmlFor="password"> Password</label>
               <input placeholder="Password" value={formData.password} onChange={handleClick} id="password" name="password"/>

               <button type="submit" > Submit</button>     {/*vse bhi form ke ander button ka type submit hi hota */}
            </form>
        </div>
    )
}