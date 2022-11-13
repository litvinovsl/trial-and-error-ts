import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import MainMenu from '../MainMenu/MainMenu';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CalculateForm from '../CalculateForm/CalculateForm';
import Calculation from '../Calculation/Calculation';

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
        <Route exact path="/credit-calculator/calculation">
          <Calculation />
        </Route>
      </Switch>
      <Footer/>

    </div>

  );
}



export default App;
