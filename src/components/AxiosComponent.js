import React from 'react'
import Axios from 'axios';
import {useState, useEffect } from 'react';

const AxiosComponent = () => {

    const [catFact, setCatFact] = useState("")

// fetch("https://catfact.ninja/fact")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    
    const fetchCatFact = () => {
      Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    })
    }

    useEffect(() => {
      fetchCatFact()
    }, [])

  return (
    <div>
        <h2>Axios</h2>
        <button onClick={fetchCatFact}>Generate Cat Fact</button>
        <p>{catFact}</p>
    </div>
  )
}

export default AxiosComponent