import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import AuthService from "../services/auth.service";

const required = value => {
    if (!value) {
        return (
            <div className= "alert alert-danger" role="alert">
                Campo obrigatório
            </div> 
        );
    }
}

export default class Register extends Component {
    constructor(props) {
        super(props);
        
        //this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            email: "",
            password: ""
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    saveUser() {
        let  data = {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
        };
    
        AuthService.register(data.username, data.email, data.password)
        .then(response => {
            this.setState({
                id: response.data.id,
                username: response.data.username,
                email: response.data.email,
    
                submitted: true
            });
            
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    newUser() {
        this.setState({
            id: null,
            username: "",
            email: "",
            password: "",

            submitted: false
        });
    }

    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>Usuário cadastro com sucesso!</h4>
                        {/* <button className="btn btn-success" onClick={this.newTutorial}>
                            Add
                        </button> */}
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                required
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                                name="username"
                            />
                        </div>
    
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                required
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                name="email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="text"
                                className="form-control"
                                id="password"
                                required
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                name="password"
                            />
                        </div>
    
                        <button onClick={this.saveUser} className="btn btn-success">
                            Cadastrar
                        </button>
                    </div>
                )}
            </div>
        );
    }
}