import React from 'react'
import { useState, useEffect } from 'react'

const UseEffect = () => {
    useEffect(()=>{
        console.log("COMPONENT MOUNTED");
       
    
        return () => {
          console.log("COMPONENT UNMOUNTED");
          
        }
    
      }, [])
  return (
    <div>
        UseEffect
       
    </div>
  )
}

export default UseEffect