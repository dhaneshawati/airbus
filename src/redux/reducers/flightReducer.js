import {
  GET_FLIGHT_LIST_ERROR,
  GET_FLIGHT_LIST_SUCCESS,
  RESET_FLIGHT_LIST,
} from "../actions/fetchCreator";

const initialState = {
  loading: true,
  fdata: null,
  error: null,
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_FLIGHT_LIST:
      return {
        ...state,
        loading: true,
        fdata: null,
        error: null,
      };
    case GET_FLIGHT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        fdata: action.payload,
        error: null,
      };
    case GET_FLIGHT_LIST_ERROR:
      return {
        ...state,
        loading: false,
        fdata: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default flightReducer;
