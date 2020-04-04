import React, { Component } from "react";

class ClientForm extends Component {
    state = {
        newClient: ""
    };

    handleChange = event => {
        this.setState({ newClient: event.currentTarget.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        const id = new Date().getTime();
        const nom = this.state.newClient;

        if(nom !== ""){
            this.props.onClientAdd({ id, nom });
            this.setState({ newClient: "" });
        }

    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    value={this.state.newClient}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Ajouter un client"
                />
                <button>Confirmer</button>
            </form>
        );
    }
}

export default ClientForm;
