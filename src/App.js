import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './Header';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  // BEM class naming convention
  return (
    <div className="app">
      <Routes>
        <Route path="/chat" element={
          <>
            <Header backButton={'/'} />
            <Chats />
          </>
        }>
        </Route>
        <Route path="/chat/:person" element={
          <>
            <Header backButton={'/chat'} />
            <ChatScreen />
          </>
        }>
        </Route>
        <Route path="/" element={<><Header /><TinderCards /><SwipeButtons /></>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
