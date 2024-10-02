import React from "react"
import "./ErrorModal.css"
import AddUser from "../Users/AddUser"
import Button from "./Button"
import Card from "./Card"
import ReactDOM from "react-dom"

const BackDrop=(props)=>{
    return <div className="backdrop" onclick={props.onConfirm}></div>
}

const ModalOverlay= (props)=>{
    return (<Card className="modal">
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
    )
}

const ErrorModal=(props)=>{

    return(
        <React.Fragment>
         {
         ReactDOM.createPortal(
            <BackDrop onConfirm={props.onConfirm}/>,
            document.getElementById('backdrop-root'))
            }
       {
       ReactDOM.createPortal(
        <ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,
        document.getElementById('overlay-root'))
       }
       </React.Fragment>
    )
}
export default ErrorModal