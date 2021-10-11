import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Feed from "./Feed";
import { selectUser } from "./features/userSlice";
import Header from './Header';
import Sidebar from './Sidebar';
import Login from "./Login.js";

function App() {
  const user = useSelector(selectUser);


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
