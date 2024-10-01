
import React,{useState} from "react";

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
    <div>
     <AddUser onAddUsers={userHandler}></AddUser>
     <UsersList users={users}></UsersList>
    </div>
  );
}

export default App;
