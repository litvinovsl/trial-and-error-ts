import React from 'react';
import './CalculateForm.css';

function CalculateForm() {
    return (
        <section className="calculte">
            <h1 className='calculte__title'>Расчет кредита</h1>
            <form className='calculte__form'>
                <label className='calculate__label'>
                    <input className='calculte__input' type='text' id='sum' name='sum' />
                    <span className='calculte__span' 
                    // htmlFor="sum"
                    >Сумма кредита:</span>
                </label>
                {/* <label className='calculate__label'>
                    <input className='calculte__input calculte__input_date' type='date' id='creditStartDate' name='creditStartDate' />
                    <span className='calculte__span' 
                    // htmlFor="creditStartDate"
                    >Введите дату взятия кредита:</span>
                </label> */}
                <label className='calculate__label'>
                    <input className='calculte__input' type='text' id='interestRate' name='interestRate' />
                    <span className='calculte__span' 
                    // htmlFor="interestRate"
                    >Процентная ставка:</span>
                </label>
                <label className='calculate__label'>
                    <input className='calculte__input' type='text' id='numberOfMonths' name='numberOfMonths' />
                    <span className='calculte__span' 
                    // htmlFor="numberOfMonths"
                    >Колличество месяцев:</span>
                </label>
                <label className='calculate__label'>
                    <input className='calculte__input' type='text' id='paymentDay' name='paymentDay' />
                    <span className='calculte__span' 
                    // htmlFor="paymentDay"
                    >День платежа:</span>
                </label>
            </form>
        </section>
    );
}

export default CalculateForm;