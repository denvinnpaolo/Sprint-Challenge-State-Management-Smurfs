import { POST_START, POST_SMURF_SUCCESS, POST_SMURF_FAILURE } from "../actions";

const initialState = {
    smurfs:[],
    isFetching: true,
    error:""
};

const fetchReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case POST_START:
            return{
                ...state,
                isFetching:true
            }
        case POST_SMURF_SUCCESS:
            return{
                ...state,
                smurfs: action.payload,
                isFetching:false,
                error:""
            };
        case POST_SMURF_FAILURE:
            return{
                ...state,
                isFetching:false,
                error:""
            }
        default:
            return state;
    }
};

export default fetchReducer;