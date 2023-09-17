import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGE, USER_AVATAR } from "./constans";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/congifSlice";
const Header = () => {
  const user = useSelector((store) => store.user);
  const searchWindowView = useSelector((store) => store.gpt.showGptSearch);
  console.log(searchWindowView);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        <h1>Error in Signout</h1>;
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
    //Toggle GPT Search
  };

  const handleLanguageChange = (e) => {
    //console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe when component unmounts
    return () => unsubscribe;
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-t from-black z-10 flex justify-between ">
      <img className="w-44" src={LOGO} alt=""></img>
      {user && (
        <div className="flex p-2">
          {searchWindowView && (
            <select
              name=""
              id=""
              className="p-2 bg-gray-500 text-white m-2"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 m-2 text-white bg-purple-600 rounded-lg my-2"
            onClick={handleGptSearchClick}
          >
            {searchWindowView ? "HomePage" : "GPT Search"}
          </button>
          <img className="w-20" alt="SignOut icon" src={USER_AVATAR}></img>
          {/*<img src={user?.photoURL} className="w-20" alt="user-img" />*/}
          <button
            className="cursor-pointer font-bold text-white"
            onClick={handleSignOut}
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
