import React from 'react'
import { useState} from 'react'

const UseStateComponent = () => {
  const  [age, setAge]=useState(0)
    
  const  [visible, setVisible]=useState(true)

  
  

  const increace = ()=>{
    setAge(age+1)
  }
  const Decreace = ()=>{
    setAge(age-1)
  }
  const setToZero = ()=>{
    setAge(0)
  }
  return (
    <div>
      
      {age}
      <button onClick={increace}>Increace age</button>
      <button onClick={Decreace}>Decreace age</button>
      <button onClick={setToZero}>Set to zero</button>
      <br/>
      <br/>

      <button onClick={()=>setVisible(!visible)}>Show/Hide</button>
      {visible && <p>"HI MY NAME IS DIMA"</p>}
    </div>
  )
}

export default UseStateComponent