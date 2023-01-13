import React from 'react';
import Counter from './counter';
import '../pages/_app.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo, faRecycle,faShoppingCart } from '@fortawesome/free-solid-svg-icons'


class Counters extends React.Component{

  refreshPage() {
    window.location.reload();
  }
  render(){
    const {onReset,counters,onDelete,onIncrement,onDecrement} = this.props;
  
    return(
      <div className='button-box'>

<FontAwesomeIcon icon= {faShoppingCart} />  <span> </span><span className='idcount'>0</span>  Items
<br />        <br></br>

      <button onClick = {onReset}className="reset" > <FontAwesomeIcon icon= {faRedo} />
</button>
      {"    "}      {"    "}      {"    "}


      <button onClick={() => window.location.reload()} className="reload" > <FontAwesomeIcon icon= {faRecycle} /></button>
      {counters.map(counter =>
        <Counter
         key = {counter.id}
        onDelete = {onDelete}
        onIncrement = {onIncrement}
        onDecrement = {onDecrement}
        counter = {counter}
        />)}
        
       
      </div>
    );
  }
  // formatCount() {
  //   const {value } = this.props.counter;
  //   return value === 0 ? "zero" : value ;
  // }
  
}

export default Counters;
