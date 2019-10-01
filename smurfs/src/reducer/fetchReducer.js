import { FETCH_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE } from "../actions";

const initialState = {
    smurfs:[],
    isFetching: true,
    error:""
};

const fetchReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case FETCH_START:
            return{
                ...state,
                isFetching:true
            }
        case FETCH_SMURF_SUCCESS:
            return{
                ...state,
                smurfs: action.payload,
                isFetching:false,
                error:""
            };
        case FETCH_SMURF_FAILURE:
            return{
                ...state
            }
        default:
            return state;
    }
};

export default fetchReducer;