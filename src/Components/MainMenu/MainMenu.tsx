import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.css';


const MainMenu: FC =() => {
  return (
    <div className="main-menu">
         <h1 className='main-menu__title'>Hi, i`m calculate</h1>
        <nav className='main-menu__links'>
          <Link to='/credit-calculator' className='main-menu__link'>Кредитный калькулятор</Link>
          <Link to='/' className='main-menu__link'>\не готово\</Link>
          <Link to='/' className='main-menu__link'>\не готово\</Link>
         </nav>

     </div>
  );
}

export default MainMenu;