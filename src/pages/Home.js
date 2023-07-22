import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../ReactRouterDom'

const Home = () =>    {//props
  const {username} = useContext(AppContext)
  return (
    <div>Home Page and user is: {username}</div>  //props.username
  )
}

export default Home