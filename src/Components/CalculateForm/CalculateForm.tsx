import React from 'react';
import './CalculateForm.css';

function CalculateForm() {
  return (
    <section className="calculte">
        <h1 className='calculte__title'>Расчет кредита</h1>
        <form className='calculte__form'>
            <input className='calculte__input-text' type='text' name='sum' />
            <input className='calculte__input-text calculte__input-text_date' type='date' name='creditStartDate' />
            <input className='calculte__input-text' type='text' name='interestRate' />
            <input className='calculte__input-text' type='text' name='numberOfMonths' />
            <input className='calculte__input-text' type='text' name='paymentDay' />
        </form>
    </section>
  );
}

export default CalculateForm;