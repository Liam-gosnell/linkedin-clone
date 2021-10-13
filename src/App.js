import React, {useEffect} from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Feed from "./Feed";
import { login, logout, selectUser } from "./features/userSlice";
import Header from './Header';
import Sidebar from './Sidebar';
import Login from "./Login.js";
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        })
      );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);


  return (
    <div className="app">
      {/* Header */}
      <Header />

      {!user ? (
      <Login/> 
      ) : (
        <div className="app__body">
        <Sidebar />
        <Feed />
          {/* Widgets */}
      </div>
      )}
    </div>
  );
}

export default App;
