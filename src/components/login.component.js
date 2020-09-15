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

export default class Login extends Component {
    constructor(props) {
        super(props);
        
        //this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false,
            message: ""
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    login() {
        let data = {
            username: this.state.username,
            password: this.state.password
        };

        AuthService.login(data.username, data.password)
        .then(response => {
            
        })
        .catch( e => {
            console.log(e);
        })
    }
}