import React from "react";
import "./Cards.css";

function FriendCard(props) {
  return (
    // onClick ={()=> props.handleClicked(props.id)}
    <div className="card" onClick={() => props.clicked(props.id)}>
      
        <img alt={props.name} src={props.image} />
     
     
      </div>
    
    // <div className="card" onclick = {() => props.handleClicked(props.id)}>
    //     <img className = "image" alt={props.image} src={props.image}/>
    // </div>
  );
}

export default FriendCard;
