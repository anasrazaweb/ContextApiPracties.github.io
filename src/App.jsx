import React from "react"
import Login from "./Component/Login"
import Password from "./Component/Password"
import UserProvider from "./Context/UserProvider"


function App() {

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" ,fontFamily: "sans-serif" }}>
      <div >
        <UserProvider>
          <h1 >Context Api </h1>
          <Login />
          <Password />
        </UserProvider>
      </div>

    </div>
  )
}

export default App
