import React, {useState} from "react";

const ClientForm = ({onClientAdd}) => {

    const [newClient, setNewClient] = useState("");

    const handleChange = event => {
        setNewClient(event.currentTarget.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        const id = new Date().getTime();

        const nom = newClient;
        if (nom !== "") {
            onClientAdd({id, nom});
            setNewClient("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={newClient}
                onChange={handleChange}
                type="text"
                placeholder="Ajouter un client"
            />
            <button>Confirmer</button>
        </form>
    );

};

export default ClientForm;
