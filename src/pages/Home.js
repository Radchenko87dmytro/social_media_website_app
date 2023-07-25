import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../ReactRouterDom'
import styles from "../App.module.css"
import {useQuery} from "@tanstack/react-query"
import Axios from 'axios';

const Home = () =>    {//props
  const {username} = useContext(AppContext)

  const {
    data: catData, 
    isLoading, 
    isError, 
    refetch,
  } = useQuery(["cat"], ()=>{
    return Axios.get("https://catfact.ninja/fact").then((res)=>res.data)
  })

  if (isError) {
    return <h1>Sorry, there was an error</h1>
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div >
      Home Page and user is: {username}
      <h4>{catData?.fact}</h4>
      <button onClick={refetch}>Update Data</button>
    </div>   //props.username   className={styles.homeClass}
  )
}

export default Home