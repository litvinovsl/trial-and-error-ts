import { useEffect, useState } from 'react';
import './SymbolsInput.css';

function SymbolsInput({result, setResult}:any){
    // const [one, setOne] = useState(0);
    // const [two, setTwo] = useState(0);
    // const [three, setThree] = useState(0);
    // const [four, setFour] = useState(0);
    // const [five, setFive] = useState(0);
    // const [six, setSix] = useState(0);
    // const [seven, setSeven] = useState(0);
    // const [eight, setEight] = useState(0);
    // const [nine, setNine] = useState(0);
    // const [clear, setClear] = useState(false);
    // const [split, setSplit] = useState(false);
    // const [multiply, setMultiply] = useState(false);
    // const [percentage, setPercentage] = useState(false);
    // const [minus, setMinus] = useState(false);
    // const [plus, setPlus] = useState(false);
    // const [negative, setNegative] = useState(false);
    const [active, setActive] = useState(true);
    useEffect(() => {

    }, [])
    function handleSubtraction(){
      // handleResult();
      // if (result.includes('+') || result.includes('-') || result.includes('*') || result.includes('/')) {
      //   console.log('first', result)

      //   handleResult();
      
        // setResult(result + '-');
      //   console.log('include', result)
      // } else {
      //   setResult(result + '-');
      //   console.log('hernya')
      // }

      if (active){
        setResult(result + '-');
        setActive(false);
      }
    }
    function handleSumm(){
      if (active){
        setResult(result + '+');
        setActive(false);
      }
    }
    function handleMultiplications(){
      if (active){
        setResult(result + '*');
        setActive(false);
      }
    }
    function handleSplitting(){
      if (active){
        setResult(result + '/');
        setActive(false);
      }
    }

    function handleResult(){
      let sum;

      if (result.includes('+')) {
        sum = result.split('+');
        sum = parseInt(sum[0]) + parseInt(sum[1]);
        setResult(String(sum));
        console.log('plus-res', result)
        console.log('plus-sum', result)
        setActive(true);
      } else if (result.includes('-')) {
        sum = result.split('-');
        sum = parseInt(sum[0]) - parseInt(sum[1]);
        setResult(String(sum));
        setActive(true);
      } else if (result.includes('*')) {
        sum = result.split('*');
        sum = parseInt(sum[0]) * parseInt(sum[1]);
        setResult(String(sum));
        setActive(true);
      } else if (result.includes('/')) {
        sum = result.split('/');
        sum = parseInt(sum[0]) / parseInt(sum[1]);
        setResult(String(sum));
        setActive(true);
      } else {
        setResult(result)
      }
      // else if (result.includes()) {
      //   console.log('eeeeeeeerrrrrr')
      // }
      return result
    }

  // console.log(-result)
  return (
    <div className='container'>
        <div className='conteiner__symbol' onClick={() => {setActive(true) ;setResult('')}}>AC</div>
        <div className='conteiner__symbol' onClick={() => setResult(-result)}>+/-</div>
        <div className='conteiner__symbol'>%</div>
        <div className={active ? `conteiner__symbol` : `conteiner__symbol_off`} onClick={handleSplitting}>/</div>
        <div className='conteiner__symbol' onClick={() => {setResult(result + '7')}}>7</div>
        <div className='conteiner__symbol' onClick={() => setResult(result + '8')}>8</div>
        <div className='conteiner__symbol' onClick={() => setResult(result + '9')}>9</div>
        <div className={active ? `conteiner__symbol` : `conteiner__symbol_off`} onClick={handleMultiplications}>*</div>
        <div className='conteiner__symbol' onClick={() => setResult(result + '4')}>4</div>
        <div className='conteiner__symbol' onClick={() => setResult(result + '5')}>5</div>
        <div className='conteiner__symbol' onClick={() => setResult(result + '6')}>6</div>
        <div className={active ? `conteiner__symbol` : `conteiner__symbol_off`} onClick={handleSubtraction}>-</div>
        <div className='conteiner__symbol' onClick={() => setResult(result + '1')}>1</div>
        <div className='conteiner__symbol' onClick={() => setResult(result + '2')}>2</div>
        <div className='conteiner__symbol' onClick={() => setResult(result + '3')}>3</div>
        <div className={active ? `conteiner__symbol` : `conteiner__symbol_off`} onClick={handleSumm}>+</div>
        <div className='conteiner__symbol conteiner__symbol_0' onClick={() => setResult(result + '0')}>0</div>
        <div className='conteiner__symbol'>,</div>
        <div className='conteiner__symbol' onClick={handleResult}>=</div>
    </div>
  );
}



export default SymbolsInput;