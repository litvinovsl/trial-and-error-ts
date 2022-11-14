import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import MainMenu from '../MainMenu/MainMenu';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CalculateForm from '../CalculateForm/CalculateForm';
import Calculation from '../Calculation/Calculation';

function App() {

  const data = {
    sum: 100000,
    creditStartDate: '26.04.2022',
    interestRate: 10,
    numberOfMonths: 24,
    paymentDay: 15,
    percentages: 95,
}

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
          <Calculation
            sum={data.sum}
            numberOfMonths={data.numberOfMonths}
            interestPaid={data.percentages} />
        </Route>
      </Switch>
      <Footer />

    </div>

  );
}



export default App;
