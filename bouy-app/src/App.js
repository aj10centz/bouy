import React from 'react';
import { Router } from "@reach/router";

import CivResource from "./Pages/CivResource";
import LandingPage from "./Pages/LandingPage";
import ChatPage from "./Pages/ChatPage";
import VetResource from "./Pages/VetResource";
import FrResource from "./Pages/FrResourse";
import StoreFront from "./Pages/StoreFront";





function App() {
  return (
    <div>
       <Router>
        <LandingPage path="/" /> 
        <CivResource path="/resource-civ" />
        <FrResource path="/resource-fr" />
        <VetResource path="/resource-vet" />
       
        <ChatPage path="/chat" />
        <StoreFront path="/store" />
       
        
      </Router>
    

      
    </div>
  )
}

export default App;






