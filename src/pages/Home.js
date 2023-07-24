import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../ReactRouterDom'
import styles from "../App.module.css"

const Home = () =>    {//props
  const {username} = useContext(AppContext)
  return (
    <div >Home Page and user is: {username}</div>   //props.username   className={styles.homeClass}
  )
}

export default Home