import React from 'react'
import { useState, useEffect, useContext } from 'react'
import useToggle from './useToggle'
import useGetCat from './useGetCat'

const CustomHooks = () => {
    //const [isVisible, setIsVisible] = useState(false)
    const [state, toggle] = useToggle()

    const {data, isCatLoading, refetchData} = useGetCat()
    if (isCatLoading) return <h1>Loading...</h1>

  return (
    <div>
        <p>CustomHooks</p>
        <button onClick={toggle}>
            {state ? "Hide" : "Show"}
        </button>
        {state && <h4>Hidden text</h4>}

        <p>useGetCat</p>
        <h3>{data?.fact}</h3>
        <button onClick={refetchData}>refetch</button>
        
    </div>
  )
}

export default CustomHooks