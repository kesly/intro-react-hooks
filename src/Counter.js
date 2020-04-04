import React, {Component, useState} from "react";


const Counter = (props)=>{

    const [compteur, setCompteur] = useState(1);

    return (<div>
        {compteur} <button onClick={()=>setCompteur(compteur + 1)}> Incrementer</button>
    </div>);
};

export default Counter;
