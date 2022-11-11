import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import MainMenu from '../MainMenu/MainMenu';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CalculateForm from '../CalculateForm/CalculateForm';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        {/* <Route exact path='/'} > */}
        <Route exact path="/">
          <MainMenu />
        </Route>
        <Route exact path="/credit-calculator">
          <CalculateForm />
        </Route>
      </Switch>
      <Footer/>

    </div>

  );
}



export default App;
