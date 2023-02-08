import { useState, FC } from "react";
import { Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Result from "../Result/Result";
import SymbolsInput from "../SymbolsInput/SymbolsInput";
// import Calculator from "../Calculator/Calculator";
import './AppCalculator.css';

// interface INavigationCalculator {
//   isCalculation: boolean;
//   isConverter: boolean;
// }

function AppCalculator(){

  const [isCalculation, setIsCalculation] = useState(true);
  const [isConverter, setIsConverter] = useState(false);


  function handleClickSuda() {
    setIsCalculation(true);
    setIsConverter(false);
    // console.log('suda: ', isCalculation, ', tuda: ', isConverter)

  }

  function handleClickTuda() {
    // console.log('tuda')
    setIsCalculation(false);
    setIsConverter(true);
    // console.log('suda: ', isCalculation, ', tuda: ', isConverter)

  }

  const [result, setResult] = useState('');


  return (
    <div className='app-calculator'>
      <Navigation
        onClickSuda={handleClickSuda}
        onClickTyda={handleClickTuda}
        isCalculation={isCalculation}
        isConverter={isConverter} />
        <Result result={result} />
        {isCalculation && <SymbolsInput result={result} setResult={setResult}/>}
      <Switch>

        {/* <Calculator /> */}
      </Switch>
    </div>

  );
}



export default AppCalculator;