import React from "react";

export default function Smurf({ smurf }){
    return(
        <div>
            <p>{`name: ${smurf.name}`}</p>
            <p>{`age: ${smurf.age}`}</p>
            <p>{`height: ${smurf.height}`}</p>
        </div>
    )
}