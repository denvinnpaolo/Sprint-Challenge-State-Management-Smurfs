import axios from "axios";

export const FETCH_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";

export const POST_START = "POST_SMURF_START";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAILURE = "POST_SMURF_FAILURE";

export const fetchVillage = () => dispatch =>{
        dispatch({ type: FETCH_START })
            axios
                .get('http://localhost:3333/smurfs/')
                .then(res =>{dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data})})
                .catch(error =>{ dispatch({ type: FETCH_SMURF_FAILURE, payload: error})})
};

export const addSmurf = smurf => dispatch => {
    console.log(smurf)
        dispatch({ type: POST_START });
            axios
                .post("http://localhost:3333/smurfs", smurf)
                .then(res => {console.log(res);
                    dispatch({ type: POST_SMURF_SUCCESS, payload:res})
                })
                .catch(error =>{dispatch({ type: POST_SMURF_FAILURE, payload: error})
                })
};