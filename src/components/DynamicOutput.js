import React from 'react'
import { useState } from 'react'

const DynamicOutput = () => {
    const  [text, setText]=useState("")
    const typeText =(e)=>{
        setText(e.target.value)
        //console.log(e.target.value)
      }
  return (
    <div>
        Dynamic Output
        <input onChange={typeText}/>
        <p>{text}</p>
    </div>
  )
}

export default DynamicOutput