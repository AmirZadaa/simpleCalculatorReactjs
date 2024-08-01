import React, { useState } from 'react'
import { evaluate } from 'mathjs';
import  './Style.css'


function App() {
   let [count,setcount]=useState('');
   function fun(e){
    let value=(e.target.value);
    setcount(count+value) 
  }
  function calcu(){
    let ansa=evaluate(count);
    // let resutl=count+ "/n" +ans
    setcount(ansa)
  }
  let clear=()=>setcount('');
  return (
    <> 
    <h1 style={{textAlign:'center',fontFamily:"revert",color:"brown"}}>Simple Calculator</h1>
      <div className='container main'>
        <div className="row  row1">
          <input className="col-12 text-end custom" value={count}></input>
        </div>
        <div className="row">
          <div className="col-3">
            <button onClick={fun} value='1'>1</button>
          </div>
          <div className="col-3">
            <button onClick={fun} value='2'>2</button>
          </div>
          <div className="col-3">
            <button onClick={fun} value='3'>3</button>
          </div>
          <div className="col-3">
            <button onClick={clear}>AC</button>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <button onClick={fun} value='4'>4</button>
          </div>
          <div className="col-3">
            <button onClick={fun} value='5'>5</button>
          </div>
          <div className="col-3">
            <button onClick={fun} value='6'>6</button>
          </div>
          <div className="col-3">
            <button onClick={fun} value='+'>+</button>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <button onClick={fun} value='7'>7</button>
          </div>
          <div className="col-3">
            <button onClick={fun} value='8'>8</button>
          </div>
          <div className="col-3">
            <button onClick={fun} value='9'>9</button>
          </div>
          <div className="col-3">
            <button onClick={fun} value='-'>-</button>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <button onClick={fun} value='.'>.</button>
          </div>
          <div className="col-3">
            <button onClick={fun} value='0'>0</button>
          </div>
          <div className="col-3 btn-large">
            <button onClick={calcu}>=</button>
          </div>
          <div className="col-3 ">
            <button onClick={fun} value='/'>/</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
