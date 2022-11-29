import { toHaveClass } from '@testing-library/jest-dom/dist/matchers';
import { isVisible } from '@testing-library/user-event/dist/utils';
import { React, useState } from 'react'
import { Button } from '@mui/material';
import "./App.css";
export default function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // const[counter4, setCounter4] = counter1 + counter2 + counter3;
  //increase counter1
  const increase1 = () => {
    setCounter1(count1 => count1 + 1);
    setCounter4(count4 => count4 + 1);

    
  };

  const handleClick = () => {
    setIsActive(current => !current);
    }
   const decrease1 = () => {
        setCounter1(count1 => count1 - 1);   
        setCounter4(count4 => count4 - 1);

  }
 
  //reset counter 1
  const reset1 = () =>{
    increase1(useState)
 }

    //increase counter
    const increase2 = () => {
      setCounter2(count2 => count2 + 1);
      setCounter4(count4 => count4 + 1);
    };
   
    //decrease counter
    const decrease2 = () => {
      setCounter2(count2=> count2 - 1);
      setCounter4(count4 => count4 - 1);
    };
   
    //reset counter 
    const reset2 = () =>{
      setCounter2(0)
    };
      //increase counter
  const increase3 = () => {
    setCounter3(count3 => count3 + 1);
    setCounter4(count4 => count4 + 1);

  };
 
  //decrease counter
  const decrease3 = () => {
    setCounter3(count3 => count3 - 1);
   setCounter4(count4 => count4 - 1);
  };
 
  //reset counter 
  const reset3 = () =>{
    setCounter3(0)
  }
const reset4 = () =>{
  setCounter1(0);
  setCounter2(0);
  setCounter3(0);
  setCounter4(0);


}




const show = ({ available }) => {
  if (!available) return null;

}
  return (
   
  <div className="card__box">    
    <span className="counter__output">{counter4}</span>
    <Button variant="contained" className="reset" onClick={reset4} >Reset</Button>
    <div className="counter1">
      <div className="btn__container">
      <span className="counter__output">{counter1}</span>
          <Button variant="contained" className="control__btn" onClick={increase1}>+</Button>
          <Button variant="contained" className="control__btn" onClick={decrease1}>-</Button>
          <Button variant="contained" className="reset" onClick={reset1}>Reset</Button>
      </div>
    </div>
    <div className="counter2">
      <div className="btn__container">
      <span className="counter__output">{counter2}</span>
      <Button variant="contained" className="control__btn" onClick={increase2}>+</Button>
          <Button variant="contained" className="control__btn" onClick={decrease2}>-</Button>
          <Button variant="contained" className="reset" onClick={reset2}>Reset</Button>
      </div>
    </div>
    <div className="counter3">
      <div className="btn__container">
      <span className="counter__output">{counter3}</span>
      <Button variant="contained" className="control__btn" onClick={increase2}>+</Button>
          <Button variant="contained" className="control__btn" onClick={decrease2}>-</Button>
          <Button variant="contained" className="reset" onClick={reset2}>Reset</Button>
      </div>
    </div>
  </div>
  
      

  );
}