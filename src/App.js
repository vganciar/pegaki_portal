import React, { Component } from "react";
import { Switch, Route, Link } from 'react-router-dom';

import Login from "./components/login.component";
import Register from "./components/register.component";
import Pontos from "./components/pontos.component";

import AuthService from "./services/auth.service";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);

        this.state = {
            currentUser: ""          
        };
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();
  
        if (user) {
            this.setState({
                currentUser: user
            });
        }
    }

    logout() {
        AuthService.logout();
    }

    render() {
        const currentUser = this.state.currentUser;

        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <h5 className="nav-link">
                                <a href="https://pegaki.com.br/" className="nav-link">
                                    Pegaki
                                </a>
                            </h5>
                        </li>    
                    </div>    
                  
                    {currentUser ? (
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/pontos"} className="nav-link">
                                    Pontos
                                </Link>
                            </li>

                            <li className="nav-item">                                
                                <a href="/login" className="nav-link" onClick={this.logout}>
                                    Logout
                                </a>
                            </li>
                        </div>
                    ) : (
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/login"} className="nav-link">
                                    Login
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to={"/register"} className="nav-link">
                                    Sign Up
                                </Link>
                            </li>
                        </div>
                    )}
                </nav>
            
                <div className="container mt-3">
                    <Switch>                          
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/pontos" component={Pontos} />
                    </Switch>
                </div>
            </div>    
        );
    }  
}

export default App;
