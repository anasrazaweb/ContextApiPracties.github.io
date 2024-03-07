import React, { useState } from 'react'
import UserContext from './UserContext'

const UserProvider = ({children}) => {
    const [User, setUser] = useState(null)
  return (
    <UserContext.Provider value={{User, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider