import React from 'react'
import {useState} from "react"
import { useContext } from 'react'
import { AppContext } from '../ReactRouterDom'

const ChangeProfile = (props) => {
    const {setUsername} = useContext(AppContext)

    const [newUsername, setNewUsername] = useState("")
  return (
    <div>
      <input
        onChange={(event) => {
          setNewUsername(event.target.value)
        }} 
      />
      <button
      onClick={()=>{
        setUsername(newUsername)  //props.setUsername(newUsername)
      }}
      >
        
        Change Username
        </button>
    </div>
  )
}

export default ChangeProfile