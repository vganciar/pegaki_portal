import React, { Component } from "react";
import PontosService from "../services/pontos.service";

import AuthService from "../services/auth.service";

export default class Pontos extends Component {
    constructor(props) {
        super(props);

        this.retrievePoints = this.retrievePoints.bind(this);
        this.refreshList = this.refreshList.bind(this);

        this.state = {
            cep: "",
            points: [],
            currentUser: AuthService.getCurrentUser()            
        }
        
        //this.onChangeTitle = this.onChangeTitle.bind(this);
        //this.onChangeDescription = this.onChangeDescription.bind(this);
        //this.saveTutorial = this.saveTutorial.bind(this);
        //this.newTutorial = this.newTutorial.bind(this);

        // this.state = {
        //     id: null,
        //     title: "",
        //     description: "", 
        //     published: false,

        //     submitted: false
        // };
    }

    componentDidMount() {
        this.retrievePoints();
    }

    retrievePoints() {
        PontosService.get(this.state.cep)
        .then(response => {
            this.setState({
                points: response.data.results
            });
        
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    refreshList() {
        this.retrievePoints();
    }

    render() {
        const { currentUser } = this.state;

        return(
            <div className="container">
                <header className="jumbotron">
                    <h3>
                        <strong>{currentUser.username}</strong> Pontos
                    </h3>
                </header>
            </div>
        );    
    }
}