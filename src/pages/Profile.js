import React from 'react'
import ChangeProfile from "../components/ChangeProfile" 
import { useContext } from 'react'
import { AppContext } from '../ReactRouterDom'

const Profile = () => { //props
  const {username} = useContext(AppContext)
  
  return (
    <div>
       Profile Page, user is: {username}   {/*props.username  */}
      <ChangeProfile/>                     {/*setUsername={props.setUsername} */}
    </div>
  )
}

export default Profile