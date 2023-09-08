import React, { useContext } from 'react'
import { counterContext } from '../../context/counterContext'

export default function CounterPage() {
    var {counter,setCounter}=useContext(counterContext);
  return (
   <>
   <button onClick={()=>{setCounter(++counter)}} className='btn btn-info '>+</button>
   <h1>{counter}</h1>
   <button onClick={()=>{setCounter(--counter)}} className='btn  btn-danger'>-</button>
   </>
  )
}
