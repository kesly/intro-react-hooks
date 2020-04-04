import React, {useState} from 'react';
import './App.css';
import Client from "./Client";
import ClientForm from "./ClientForm";
import Counter from "./Counter";

const App = () => {


    const [clients, setClients] = useState([
        {id: 1, nom: "Lior Chamla"},
        {id: 2, nom: "Magali Pernin"},
        {id: 3, nom: "Joseph Durand"},
        ]);


    const handleDelete = id => {
        const updatedClients = [...clients];
        const index = updatedClients.findIndex(client => client.id === id);

        updatedClients.splice(index, 1);

        setClients(updatedClients);
    };

    const handleAdd = client => {
        const updatedClient = [...clients];
        updatedClient.push(client);

        setClients(updatedClient);
    };

    const title = "Liste des clients";

    return (
        <div>
            <h1>{title}</h1>
            <Counter/>
            <ul>
                {clients.map(client => (
                    <Client
                        key={client.id}
                        details={client}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
            <ClientForm onClientAdd={handleAdd}/>
        </div>
    );

};

export default App;
