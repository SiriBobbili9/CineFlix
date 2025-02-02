import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { onAuthStateChanged  } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../store/userSlice/userSlice'


const Body = () => {
  const dispatch = useDispatch();
  

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },

    ]);

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        console.log(user,"cls89");
        
        if (user) {
          const { uid, email, displayName, photoURL } = user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
        } else {
          dispatch(removeUser());
        }
      });
    },[])
  return (
    <div>
    <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body