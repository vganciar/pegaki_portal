import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import { isEmail } from "validator";

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

const email = value => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                Email inválido.
            </div>
        );
    }
};
  
const vusername = value => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                Nome de usuário deve ter entre 3 e 20 caracteres.
            </div>
        );
    }
};

const vpassword = value => {
    if (value.length < 6) {
        return (
            <div className="alert alert-danger" role="alert">
                A senha deve ter pelo menos 6 caracteres.
            </div>
        );
    }
};

export default class Register extends Component {
    constructor(props) {
        super(props);
        
        this.register = this.register.bind(this);
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

    register() {
        let  data = {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
        };

        this.form.validateAll();
    
        AuthService.register(data.username, data.email, data.password)
        .then(response => {
            this.setState({
                id: response.data.id,
                username: response.data.username,
                email: response.data.email,
                successful: true
            });
            
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }    

    // newUser() {
    //     this.setState({
    //         id: null,
    //         username: "",
    //         email: "",
    //         password: "",
    //         successful: false
    //     });
    // }

    render() {
        return (
            <div className="col-md-12">
                <div className="card card-container">
                    <img
                        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                        alt="profile-img"
                        className="profile-img-card"
                    />

                    <Form
                        onSubmit={this.handleRegister}
                        ref={c => {
                            this.form = c;
                        }}
                    >
                    {!this.state.successful && (
                        <div>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}
                                    validations={[required, vusername]}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}
                                    validations={[required, email]}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                    validations={[required, vpassword]}
                                />
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary btn-block">Sign Up</button>
                            </div>
                        </div>
                    )}
                    </Form>
                </div>
            </div>
        );
    }    
}