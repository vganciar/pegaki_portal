import React, { Component } from "react";
import { Switch, Route, Link } from 'react-router-dom';

import Login from "./components/login.component";

import logo from './logo.svg';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

//import { render } from "@testing-library/react";

class App extends Component {
    render() {
        return (
          <div>
              <nav className="navbar navbar-expand navbar-dark bg-dark">
                  <a href="/login" className="navbar-brand">
                    Pegaki
                  </a>
                  
                  <div className="navbar-nav mr-auto">
                      <li className="nav-item">
                          <Link to={"/pontos"} className="nav-link">
                              Pontos de coleta
                          </Link>    
                      </li>
                  </div>
              </nav>

              <div className="container mt-3">
                  <Switch>
                      <Route exact path={["/", "/pontos"]} component={Pontos} />
                  </Switch>
              </div>
          </div>

          // <div className="App">
          //   <header className="App-header">
          //     <img src={logo} className="App-logo" alt="logo" />
          //     <p>
          //       Edit <code>src/App.js</code> and save to reload.
          //     </p>
          //     <a
          //       className="App-link"
          //       href="https://reactjs.org"
          //       target="_blank"
          //       rel="noopener noreferrer"
          //     >
          //       Learn React
          //     </a>
          //   </header>
          // </div>
    );
  }  
}

export default App;
