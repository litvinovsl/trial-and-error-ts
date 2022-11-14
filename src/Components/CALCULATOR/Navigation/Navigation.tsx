import {useEffect} from 'react';
import './Navigation.css';

interface NavigationProps {
    onClickSuda: any;
    onClickTyda: any;
    isCalculation: boolean;
    isConverter: boolean;
}

function Navigation({onClickSuda, onClickTyda, isCalculation, isConverter} : NavigationProps) {

//  useEffect(() => {
//     console.log('suda: ', isCalculation, ', tuda: ', isConverter)
//  }, [isCalculation, isConverter])


  return (

    <div className="navigation">
        <div className='navigation__conteiner'>
            <button 
            className={`${isCalculation ? 'navigation__button-action' : 'navigation__button'}`}
            onClick={onClickSuda}>сюда</button>
            <button 
            className={`${isConverter ? 'navigation__button-action' : 'navigation__button'}`}
            onClick={onClickTyda}>туда</button>
        </div>
    </div>
  );
}

export default Navigation;