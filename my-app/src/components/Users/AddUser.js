
import React, {useState} from "react";
import "./AddUser.css"
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = () => {
  const [username,setUsername]=useState('') 
  const [age,setAge]=useState('') 

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(username,age)
    setUsername('')
    setAge('')
  };

  const usernameHandler=(event)=>{
    setUsername(event.target.value)
    
  }

  const ageHandler=(event)=>{
    setAge(event.target.value)
  }

  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"
        value={username}
        onChange={usernameHandler} />
        <label htmlFor="age">Age</label>
        <input id="age" type="number"
        value={age}
        onChange={ageHandler}
         />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
    
};

export default AddUser;