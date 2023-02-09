import { useEffect, useState } from 'react';
import './SymbolsInput.css';

function SymbolsInput({ result, setResult }: any) {

  const [active, setActive] = useState(true);

  function checkNegativeNumber(num: string) {
    if (num.substring(0, 1) === '-' && num.split('-').length - 1 === 1) {
      return true
    } else {
      return false
    }
  }

  useEffect(() => {
    // console.log('effect ', parseFloat('3.121'));
    if (!result || result.includes('+') || result.includes('-') || result.includes('*') || result.includes('/') || result === '.') {
      setActive(false)
      checkNegativeNumber(result) && setActive(true);
    } else {
      setActive(true)
    }
  }, [result])
  function handleSubtraction() {
    if (active) {
      setResult(result + '-');
      setActive(false);
    }
  }
  function handleSumm() {
    if (active) {
      setResult(result + '+');
      setActive(false);
    }
  }
  function handleMultiplications() {
    if (active) {
      setResult(result + '*');
      setActive(false);
    }
  }
  function handleSplitting() {
    if (active) {
      setResult(result + '/');
      setActive(false);
      console.log(active)
    }
  }

  function handleResult() {
    let sum;

    if (result.includes('+')) {
      sum = result.split('+');
      sum = parseFloat(sum[0]) + parseFloat(sum[1]);
      setResult(String(sum));
      setActive(true);
    } else if (result.includes('-')) {
      if (result.substring(0, 1) === '-' && !(result.includes('*') || result.includes('/'))) {
        sum = result.split('-');
        sum = - (parseFloat(sum[1])) - parseFloat(sum[2]);
        setResult(String(sum));
        setActive(true);
      } else if (result.includes('*') || result.includes('/')) {
        if (result.includes('*')) {
          sum = result.split('*');
          sum = parseFloat(sum[0]) * parseFloat(sum[1]);
          setResult(String(sum));
          setActive(true);
        } else if (result.includes('/')) {
          sum = result.split('/');
          sum = parseFloat(sum[0]) / parseFloat(sum[1]);
          setResult(String(sum));
          setActive(true);
        }
      } else {
        sum = result.split('-');
        sum = parseFloat(sum[0]) - parseFloat(sum[1]);
        setResult(String(sum));
        setActive(true);
      }
    } else if (result.includes('*')) {
      sum = result.split('*');
      sum = parseFloat(sum[0]) * parseFloat(sum[1]);
      setResult(String(sum));
      setActive(true);
    } else if (result.includes('/')) {
      sum = result.split('/');
      sum = parseFloat(sum[0]) / parseFloat(sum[1]);
      setResult(String(sum));
      setActive(true);
    } else {
      setResult(result)
    }
    checkNegativeNumber(result) && setActive(true);
    return result
  }

  function handleMinusOrPlus(){
    console.log(result.length)
    // if (result.substring(0, 1) === '-' && result.length < 1) {
    //   setResult(result.substring(1))
    // } else {
    //   setResult('-' + result);
    // }
  }

  return (
    <div className='container'>
      <div className='conteiner__symbol conteiner__symbol_func' onClick={() => { setActive(true); setResult('') }}>AC</div>
      <div className='conteiner__symbol_off' onClick={handleMinusOrPlus}>+/-</div>
      <div className='conteiner__symbol_off'>%</div>
      <div className={active ? `conteiner__symbol conteiner__symbol_func` : `conteiner__symbol_off`} onClick={handleSplitting}>/</div>
      <div className='conteiner__symbol' onClick={() => { setResult(result + '7') }}>7</div>
      <div className='conteiner__symbol' onClick={() => setResult(result + '8')}>8</div>
      <div className='conteiner__symbol' onClick={() => setResult(result + '9')}>9</div>
      <div className={active ? `conteiner__symbol conteiner__symbol_func` : `conteiner__symbol_off`} onClick={handleMultiplications}>*</div>
      <div className='conteiner__symbol' onClick={() => setResult(result + '4')}>4</div>
      <div className='conteiner__symbol' onClick={() => setResult(result + '5')}>5</div>
      <div className='conteiner__symbol' onClick={() => setResult(result + '6')}>6</div>
      <div className={active ? `conteiner__symbol conteiner__symbol_func` : `conteiner__symbol_off`} onClick={handleSubtraction}>-</div>
      <div className='conteiner__symbol' onClick={() => setResult(result + '1')}>1</div>
      <div className='conteiner__symbol' onClick={() => setResult(result + '2')}>2</div>
      <div className='conteiner__symbol' onClick={() => setResult(result + '3')}>3</div>
      <div className={active ? `conteiner__symbol conteiner__symbol_func` : `conteiner__symbol_off`} onClick={handleSumm}>+</div>
      <div className='conteiner__symbol conteiner__symbol_0' onClick={() => setResult(result + '0')}>0</div>
      <div className='conteiner__symbol conteiner__symbol_func' onClick={() => setResult(result + '.')}>.</div>
      <div className='conteiner__symbol conteiner__symbol_res' onClick={handleResult}>=</div>
    </div>
  );
}



export default SymbolsInput;