import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import Header from "./Header";
import { 
  createUserWithEmailAndPassword, signInWithEmailAndPassword 
} from "firebase/auth";
import { auth } from "../utils/firebase";
import {useNavigate} from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  const [isSignInForm,setIsSignInForm] = useState(true)
  const [errorMessage,setErrorMessage] = useState(null)
 
  const email = useRef(null)
  const password = useRef(null)
  const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm)
  }

  const handleButtonClick = ()=>{
    //Validate Form Data
   
   // console.log(email.current.value);
   // console.log(password.current.value);
    const msg = checkValidData(email.current.value,password.current.value)
    setErrorMessage(msg)
    //console.log(msg);
    if(msg) return 
    //SignIn / Sign Up
    
    if(!isSignInForm){
        //SignUp Logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => { 
        const user = userCredential.user;
        console.log(user);
        navigate("/browse")
  })
      .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
      setErrorMessage(errorCode+"-"+errorMessage)
  });
    }
    else{
        //Sign In Logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
       .then((userCredential) => {
       const user = userCredential.user;
        console.log(user);
        navigate("/browse")
  })
       .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       setErrorMessage(errorCode+"-"+errorMessage)
  });
    }
   
    }

  

  return (
    <div>
    <Header/>
    <div className="absolute">
    <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="logo"></img>
    </div>
    <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-70">
      <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

      {!isSignInForm &&
      <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"></input>
      }

      <input type="text" ref={email} placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"></input>
     
      <input type="password" autoComplete="cc-number" ref={password} placeholder="Password" className="p-4 my-4 w-full bg-gray-700" />

      <p className="text-red-500 py-1 font-bold text-lg">{errorMessage}</p>

      <button className="p-4 my- bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>

      <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered Sign In now"}
        
      </p>
    </form>
  
  </div>
  );
};

export default Login;
