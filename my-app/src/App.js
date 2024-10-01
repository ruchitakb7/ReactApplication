
import React,{useState} from "react";

import AddUser from "./components/Users/AddUser"

import UsersList from "./components/Users/UsersList";

function App() {

  const [users,setUsers]=useState([])

  return (
    <div>
     <AddUser setUsers={setUsers}></AddUser>
     <UsersList users={users}></UsersList>
    </div>
  );
}

export default App;
