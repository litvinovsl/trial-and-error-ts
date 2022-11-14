import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './AppCalculator.css';

function AppCalculator() {

  return (
    <div className='app-calculator'>
      <Navigation />
      <Switch>
      </Switch>
    </div>

  );
}



export default AppCalculator;