import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {

  const [Name, setName] = useState("")
  const [Password, setPassword] = useState("")
  const { setUser } = useContext(UserContext)

  const HandleSubmit = (e) => {
    e.preventDefault()
    setUser({ Password, Name })
  }

  return (
    <div>
      <div>
        <label >Name:-</label>
        <br/>
        <input type='text'
        style={{marginBottom:"10px", padding:"7px"}}
        placeholder='Enter your Name'
          onChange={(e) => setName(e.target.value)}
          value={Name}
        />
      </div>
      <div>
        <label>Password:-</label>
        <br/>
        <input type='text'
        style={{marginBottom:"10px", padding:"7px"}}
        placeholder='Enter your Password'
          onChange={(e) => setPassword(e.target.value)}
          value={Password}
        />
      </div>
      <button 
      style={{width:"100% ", padding:"5px", borderRadius:"20px", marginBottom:"10px", border:"none", cursor:"pointer"}}
      onClick={HandleSubmit}>Submit</button>
    </div>
  )
}

export default Login