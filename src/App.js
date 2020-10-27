import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import SideBar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
import Login from './Login'
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, setUser] = useStateValue()

  return (
    <div className="app">
      {!user ? <Login /> :
        <>
          {/* Header */}
          <Header />
          <div className="app__body">
            {/* App Body */}
            {/* Sidebar */}
            <SideBar />
            {/* Feed */}
            <Feed />
            {/* Widgets */}
            <Widgets />
          </div>
        </>
      }
    </div>
  );
}

export default App;