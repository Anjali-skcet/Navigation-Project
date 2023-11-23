import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';

const func1=()=>{
  if(window.location.pathname==="/Dashboard.js"){
    return <Dashboard/>
  }
}

const func2=()=>{
  if(window.location.pathname==="/Login.js"){
    return <Login/>
  }
}

const func3=()=>{
  if(window.location.pathname==="/"){
    return <Signup/>
  }
}

const App = () => {
  return (
    <div>
      {func1()}
      {func2()}
      {func3()}
    </div>
  )
}

export default App