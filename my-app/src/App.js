
import React,{Fragment, useState} from "react";

import AddUser from "./components/Users/AddUser"

import UsersList from "./components/Users/UsersList";

function App() {

  const [users,setUsers]=useState([])

  const userHandler=(name,age)=>{
    setUsers((prevState)=>{
      return [...prevState,{username:name,age:age}]
    })
  }

  return (
    <Fragment>
     <AddUser onAddUsers={userHandler}></AddUser>
     <UsersList users={users}></UsersList>
    </Fragment>
  );
}

export default App;
