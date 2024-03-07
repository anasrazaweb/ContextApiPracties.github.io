import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Password = () => {
  const { User } = useContext(UserContext)

  if (!User) return <div style={{fontSize:"20px"}}>pleser login</div>
  return <div style={{fontSize:"30px"}}>Welcome  <br/> {" "} {User.Name}<br/>  {User.Password}</div>

}

export default Password