import AddUser from "./AddUser"
import "./UsersList.css"
import Card from "../UI/Card"

const UsersList=(props)=>{

   //console.log(props.users)
   
    return (
        <Card className="users">
             <ul>
        {
        props.users.map((user) => {
          return(
          <li>
            {user.username} ({user.age} years old)
          </li>
          )
})}
      </ul>
        </Card>
       
    )
}

export default UsersList;
