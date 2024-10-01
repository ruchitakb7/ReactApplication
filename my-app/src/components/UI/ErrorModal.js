import React from "react"
import "./ErrorModal.css"
import AddUser from "../Users/AddUser"
import Button from "./Button"
import Card from "./Card"

const ErrorModal=(props)=>{

    return(
        <div>
       <div className="backdrop" onclick={props.onConfirm}></div>
       <Card className="modal">
        <header className="header">
            <h2>{props.title}</h2>
        </header>
        <div className="content">
            <p>{props.message}</p>
        </div>
        <footer className="actions">
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
       </Card>
       </div>
    )
}
export default ErrorModal