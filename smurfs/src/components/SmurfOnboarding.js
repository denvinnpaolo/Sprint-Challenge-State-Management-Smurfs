import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

const SmurfOnboarding = ({ addSmurf }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");

  const handleSubmit = event => {
      console.log(event)
    addSmurf({
      id: Date.now(),
      name,
      age,
      height
    });
    setName("");
    setAge("");
    setHeight("");
  };

  return (
    <div>
        <h3>Add Smurf</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={name} onChange={event => setName(event.target.value)} placeholder="Name" />
        <input type="number" name="age" value={age} onChange={event => setAge(event.target.value)} placeholder="Age" />
        <input type="text" name="height" value={height} onChange={event => setHeight(event.target.value)} placeholder="Height" />
        <button>Add to SmurfTown</button>
      </form>
    </div>
  );
};

const mapDispatchToProps=  { addSmurf }

export default connect(null, mapDispatchToProps)(SmurfOnboarding)