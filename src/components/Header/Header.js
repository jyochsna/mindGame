import React from "react";
import {Jumbotron, Container}from 'reactstrap';

import "./header.css";

function Header(){
    return(
      <div>
      <Jumbotron fluid className="jumbo">
        <Container fluid>
          <h1 className="display-3">Clicky Game!</h1>
          <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
        </Container>
      </Jumbotron>
    </div>
    );
}

 export default Header