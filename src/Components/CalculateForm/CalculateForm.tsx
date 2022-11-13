import {  useState } from 'react';
import './CalculateForm.css';

function CalculateForm() {
    const [sum, setSum] = useState('');
    const [creditStartDate, setCreditStartDate] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [numberOfMonths, setNumberOfMonths] = useState('');
    const [paymentDay, setPaymentDay] = useState('');

    function handleChangeSum(e: React.ChangeEvent<HTMLInputElement>) {
        setSum(e.target.value);
        console.log(sum)
    }

    function handleChangeCreditStartDate(e: React.ChangeEvent<HTMLInputElement>) {
        setCreditStartDate(e.target.value);
    }

    function handleChangeInterestRate(e: React.ChangeEvent<HTMLInputElement>) {
        setInterestRate(e.target.value);
    }

    function handleChangeNumberOfMonths(e: React.ChangeEvent<HTMLInputElement>) {
        setNumberOfMonths(e.target.value);
    }

    function handleChangePaymentDay(e: React.ChangeEvent<HTMLInputElement>) {
        setPaymentDay(e.target.value);
    }

    return (
        <section className="calculte">
            <h1 className='calculte__title'>Расчет кредита</h1>
            <form className='calculte__form'>
                <label className='calculate__label'>
                    <input className='calculte__input calculte__input-num' onChange={handleChangeSum} type='number' id='sum' name='sum' max={50000000} min={1000} />
                    <span className='calculte__span' 
                    // htmlFor="sum"
                    >Сумма кредита:</span>
                </label>
                <label className='calculate__label'>
                    <input className='calculte__input calculte__input_date' onChange={handleChangeCreditStartDate} type='date' id='creditStartDate' name='creditStartDate' />
                    <span className='calculte__span' 
                    // htmlFor="creditStartDate"
                    >Введите дату взятия кредита:</span>
                </label>
                <label className='calculate__label'>
                    <input className='calculte__input calculte__input-num' onChange={handleChangeInterestRate} max={1000} min={1} type='number' id='interestRate' name='interestRate' />
                    <span className='calculte__span' 
                    // htmlFor="interestRate"
                    >Процентная ставка:</span>
                </label>
                <label className='calculate__label'>
                    <input className='calculte__input calculte__input-num' onChange={handleChangeNumberOfMonths} max={500} min={1} type='number' id='numberOfMonths' name='numberOfMonths' />
                    <span className='calculte__span' 
                    // htmlFor="numberOfMonths"
                    >Колличество месяцев:</span>
                </label>
                <label className='calculate__label'>
                    <input className='calculte__input calculte__input-num' onChange={handleChangePaymentDay} max={31} min={1} step={1} type='number' id='paymentDay' name='paymentDay' />
                    <span className='calculte__span' 
                    // htmlFor="paymentDay"
                    >День платежа:</span>
                </label>
                <button
                    className='calculate__submit'
                    type='submit'
                >Рассчитать
                </button>
            </form>
        </section>
    );
}

export default CalculateForm;