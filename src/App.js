import './App.css';
import React from 'react';
import { Tode } from './todo';
// import { useState } from "react"
// const App =()=> {
//   const [name,setName]=useState("");
//   const [email,setEmail]=useState("");
//   const [password,setPassword]=useState("");

//   const handleSubmit=()=>{
//     localStorage.setItem("name",name);
//     localStorage.setItem("email",email);
//     localStorage.setItem("password",password);
//   }

//   return (
//    <>
//     <input type="name" placeholder = "Enter Name " onChange={(e)=>setName(e.target.value)}/><br/>
//     <input type="email" placeholder = "Enter Email"  onChange={(e)=>setEmail(e.target.value)}/><br/>
//     <input type="password" placeholder = "Enter Password "  onChange={(e)=>setPassword(e.target.value)}/>
//     <button onClick={handleSubmit}>Submit</button>
//     <div>
//       <div>{localStorage.getItem("name")}</div>
//       <div>{localStorage.getItem("email")}</div>
//       <div>{localStorage.getItem("password")}</div>
//     </div>
//    </>

//   );
// }

// export default App;
export  const App = ()=>{
    return(
      <>
         <Tode/>
      </>
    )
}