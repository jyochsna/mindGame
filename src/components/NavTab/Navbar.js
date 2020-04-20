import React from "react";
// import "../styles/navbar.css";
import "./style.css";

function Navbar(props){
    return(
        <div className="navbar ">

            <div className="navbar-brand" onClick = {() => props.reset()}> 
            Clicky Game </div>
            <div className="header-message"> {props.message} </div>
            <div className="header-items">
                <p> Score : {props.score} </p>
                <p> Top Score : {props.topScore} </p>
            </div>
        </div>
    )
}

export default Navbar