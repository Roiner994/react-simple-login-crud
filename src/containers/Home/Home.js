import React, { Component } from "react";
import {Button} from 'react-bootstrap';
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Login y CRUD</h1>
          <p>Una aplicacion simple de logueo y crud de usuarios</p>
          <p>
            <Button variant="primary" href="users"> Haga click aqui </Button>
          </p>
        </div>
      </div>
    );
  }
}