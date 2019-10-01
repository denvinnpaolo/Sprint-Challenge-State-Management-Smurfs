import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";

import { fetchVillage } from "../actions";

import Smurf from "./Smurf"


const SmurfVillage = props => {

  useEffect(() => {
    props.fetchVillage();
  }, [props.fetchVillage]);

    return (
      <>
        <div className="App">
          <div className="smurfContainer">
            {props.smurfs.map(smurf=>(
                <Smurf key={smurf.id} smurf={smurf} />
            ))}
          </div>
        </div>
      </>
    );

}

const mapStateToProps = state => {
  return {
    smurfs : state.smurfs
  }
}
const mapDispatchToProps = { fetchVillage }

export default connect(mapStateToProps, mapDispatchToProps)(SmurfVillage);
