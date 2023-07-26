import React from 'react'
import { useState } from 'react'
import Axios from 'axios'

const FetchingDataFromAPI = () => {
    const [predictedAge, setPredictedAge] = useState(null)
    const [name, setName] = useState("")
    const fetchData = () =>{
      Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
        setPredictedAge(res.data);
      })
    }
  return (
    <div>
        <p>FetchingDataFromAPI</p>
        <input placeholder='Ex. Perdo...'
             onChange={(event)=>{
              setName(event.target.value)
              //styles={{padding: "20 px" }}
             }}/>
      <button onClick={fetchData}>Predict Age</button>

      <h1>Name: {predictedAge?.name}</h1>
      <h1>Predicted Age: {predictedAge?.age}</h1>
      <h1>Count: {predictedAge?.count}</h1>
    </div>
  )
}

export default FetchingDataFromAPI