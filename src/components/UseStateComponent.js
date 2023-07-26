import React from 'react'
import { useState} from 'react'
import useCount  from './useCount'

const UseStateComponent = () => {
  //const  [count, setCount]=useState(0)
  const  {count, increace, decreace, restart} = useCount()
    
  const  [visible, setVisible]=useState(true)

  
  // const increace = ()=>{
  //   setCount(count+1)
  // }
  // const decreace = ()=>{
  //   setCount(count-1)
  // }
  // const restart = ()=>{
  //   setCount(0)
  // }

  return (
    <div>
      
      <p>{count}</p>
      <button onClick={increace}>Increace count</button>
      <button onClick={decreace}>Decreace count</button>
      <button onClick={restart}>Restart</button>
      <br/>
      <br/>

      <button onClick={()=>setVisible(!visible)}>Show/Hide</button>
      {visible && <p>"HI MY NAME IS DIMA"</p>}
    </div>
  )
}

export default UseStateComponent