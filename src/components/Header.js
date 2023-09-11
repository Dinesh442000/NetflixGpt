import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import {useNavigate} from "react-router-dom"
import { useSelector } from "react-redux";
const Header = () => {
  const user = useSelector(store=>store.user)
  const navigate = useNavigate()
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      <h1>Error in Signout</h1>
});
  }

  return( <div className="absolute w-screen px-8 py-2 bg-gradient-to-t from-black z-10 flex justify-between ">
    <img className = "w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" ></img>
   {user && <div className="flex p-2">
     <img className="w-20" alt="SignOut icon" src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6"></img>
     <img src={user?.photoURL} alt="user-img"/>
     <button className="cursor-pointer font-bold text-white" onClick={handleSignOut}>(Sign Out)</button>
   </div>}
  </div>);
};

export default Header;
