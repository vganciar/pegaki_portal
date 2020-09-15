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
        
        this.login = this.login.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: ""
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

        this.form.validateAll();

        AuthService.login(data.username, data.password)
        .then(response => {
            this.props.history.push("/pontos");
            window.location.reload();
        })
        .catch( e => {
            console.log(e);
        })
    }

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
                        onSubmit={this.login}
                        ref={c => {this.form = c;}}
                    >            
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="username"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                                validations={[required]}
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
                                validations={[required]}
                            />
                        </div>
      
                        <div className="form-group">
                            <button className="btn btn-primary btn-block">Login</button>
                        </div>
                    </Form>
                </div>
            </div>
        );        
    }
}