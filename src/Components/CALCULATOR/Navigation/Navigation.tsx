import React from 'react';
import './Navigation.css';

interface NavigationProps {
    onClickSuda: any;
    onClickTyda: any;
    isCalculation: boolean;
    isConverter: boolean;
}

function Navigation({onClickSuda, onClickTyda, isCalculation, isConverter} : NavigationProps) {


  return (

    <div className="navigation">
        <div className='navigation__conteiner'>
            <button onClick={onClickSuda}>сюда</button>
            <button onClick={onClickTyda}>туда</button>
        </div>
    </div>
  );
}

export default Navigation;