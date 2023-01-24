import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Topbar from './components/Pages/Topbar';
import HomePage from './components/Pages/HomePage';
import CreateFlashCard from './components/Pages/CreateFlashCard';
import MyFlashCard from './components/Pages/MyFlashCard';
import FlashCardDetails from './components/Pages/FlashCardDetails';
import Team from './components/Pages/Team';
// import { useAuth0 } from "@auth0/auth0-react";

function App() {

  // const { isAuthenticated} = useAuth0();


  return (
    <div id='mainAppContainer'>
      <div>
        <BrowserRouter>
        {/* We need Topbar and HomePage component out of Routes so that they can render every where */}
        <Topbar />
        <HomePage />
        {/* The different components of app are in routes with specified paths */}
          <Routes>
            <Route path='/' element={<CreateFlashCard />} />
            <Route path='/myflashcard' element={<MyFlashCard />} />
            <Route path='/flashcarddetails' element={<FlashCardDetails />} />
            <Route path='/tech_buddies' element={<Team />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
