import React, { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/images.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../store/userSlice/userSlice";
import { toggleGptSearchView } from "../store/gptSlice";
import { changeLanguauge } from "../store/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const {showGptSearch} = useSelector((store) => store.gpt);
  const dispatch = useDispatch();

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView())
   }

   const handleSelectLanguage  =(e) => {
    dispatch(changeLanguauge(e.target.value))
   }
  
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        //Sign-out successful
        // navigate("/");
      })
      .catch((error) => {
        //An error occured
        navigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user,"cls89");
      
      if (user) {
        const { uid, email, displayName } = user;
        console.log(displayName,"cls890")
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: USER_AVATAR,
          })
        );
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
  },[])
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-54" src={LOGO} alt="Logo" />
      {user && (
        <div className="flex px-2">
        {showGptSearch && 
          <select className="bg-gray-900 text-white py-2 m-4" onChange={handleSelectLanguage}>
          {SUPPORTED_LANGUAGES?.map(lang => (
            <option value={lang.identifier}>{lang?.name}</option>
          ))}
          </select>
        }
        <button className="h-10 px-8 mx-4 my-6 bg-purple-800 text-white rounded-lg" onClick={handleGptSearch}>{showGptSearch ? "Home" : "Gpt Search"}</button>
          <img src={user?.photoURL} alt="Logo" className="w-12 h-12 my-4" />
          {/* <h1 className="text-white font-bold my-10">{user?.displayName}</h1> */}
          <button
            className="text-red-700 font-bold px-4 cursor-pointer"
            onClick={handleSignout}
          >
            Sign out
          </button>
          
        </div>
      )}
    </div>
  );
};

export default Header;
