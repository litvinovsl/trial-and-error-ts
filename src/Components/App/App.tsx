import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import MainMenu from '../MainMenu/MainMenu';

function App() {
  return (
    <BrowserRouter>
    <div>
    <MainMenu />
    </div>
    </BrowserRouter>
    
  );
}



export default App;
