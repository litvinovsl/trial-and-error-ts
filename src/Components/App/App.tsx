import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import MainMenu from '../MainMenu/MainMenu';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div>
      <Switch>
        {/* <Route exact path='/'} > */}
        <Route exact path="/">
          <MainMenu />
        </Route>
        {/* </Route> */}
      </Switch>
      <Footer/>

    </div>

  );
}



export default App;
