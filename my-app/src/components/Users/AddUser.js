import React from "react"
const AddUser=()=>{

    const addUserHandler=(event)=>{
        event.preventDefault();
       console.log('hello')
    }

    return(
        <form onSubmit={addUserHandler}>
            <div>
                <div>
                <label htmlFor="username">Username</label>
                <input type="text" id="username"></input>
                </div>
                <div>
                <label htmlFor="age">Age</label>
                <input type="number" id="age"></input>
                </div>
                </div>
                <div>
                    <button type="submit">Add User</button>
                </div>
            
        </form>
    )
}
export default AddUser

