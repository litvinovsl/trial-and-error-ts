import React from 'react';
// import logo from '';
import './Calculation.css';


interface IDiagramStyle {
    interestPaid: number;
}

function Calculation({interestPaid}: IDiagramStyle) {

    const data = {
        sum: 100000,
        creditStartDate: '26.04.2022',
        interestRate: 10,
        numberOfMonths: 24,
        paymentDay: 15,
        percentages: 95,
    }

    // p = 25

    return (
        <section className="calculation">
            <div className='calculation__credit-info'>
                <div className='calculation__credit-info-text'>
                    <p className='calculation__credit-paragraph'>Кредит на сумму 100 000,00 ₽, 24 месяцев.</p>
                    <p className='calculation__credit-paragraph'>На текущий момент остаток долга 2 109,36 ₽.</p>
                    <p className='calculation__credit-paragraph'>Выплачен долг 97 890,64 ₽, проценты 2 447,81 ₽.</p>
                    <p className='calculation__credit-paragraph'>Всего выплачено процентов 2 475,68 ₽.</p>
                    <p className='calculation__credit-paragraph'>Досрочно погашено 83 000,00 ₽.</p>
                    <p className='calculation__credit-paragraph'>Планируемые досрочные погашения 4 978,23 ₽.</p>
                    <p className='calculation__credit-paragraph'>Сумма всех досрочных погашений 87 978,23 ₽.</p>
                    <p className='calculation__credit-paragraph'>Экономия на процентах за счет ЧДП 7 935,40 ₽.</p>
                </div>
                <div className='calculation__diagram'>
                    <div className="pie animate" style={{['--p' as any] : interestPaid }}> {interestPaid}%</div>
                    <p className='calculation__diagram'>*выплачено</p>
                </div>
            </div>
        </section>
    );
}

export default Calculation;