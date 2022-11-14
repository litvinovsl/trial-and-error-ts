import { useState, FC } from "react";
import { Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './AppCalculator.css';

// interface INavigationCalculator {
//   isCalculation: boolean;
//   isConverter: boolean;
// }

function AppCalculator(){

  const [isCalculation, setIsCalculation] = useState(true);
  const [isConverter, setIsConverter] = useState(false);


  function handleClickSuda() {
    console.log('suda')
    setIsCalculation(true);
    setIsConverter(false);
  }

  function handleClickTuda() {
    console.log('tuda')
    setIsCalculation(false);
    setIsConverter(true);
  }

  return (
    <div className='app-calculator'>
      <Navigation
        onClickSuda={handleClickSuda}
        onClickTyda={handleClickTuda}
        isCalculation={isCalculation}
        isConverter={isConverter} />
      <Switch>
      </Switch>
    </div>

  );
}



export default AppCalculator;