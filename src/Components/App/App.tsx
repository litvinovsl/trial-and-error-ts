import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import MainMenu from '../MainMenu/MainMenu';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function App() {
  return (
    <div>
      <Header />
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
