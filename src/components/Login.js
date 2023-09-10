import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [isSignInForm,setIsSignInForm] = useState(true)
  const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
    <Header/>
    <div className="absolute">
    <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="logo"></img>
    </div>
    <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-70">
      <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

      {!isSignInForm &&
      <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"></input>
      }

      <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"></input>
     
      <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"></input>
      <button className="p-4 my- bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>

      <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered Sign In now"}
        
      </p>
    </form>
  
  </div>
  );
};

export default Login;
