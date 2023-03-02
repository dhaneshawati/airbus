import { SET_BOOKING_DETAILS } from "../actions/actionCreator";

const defaultState = {
  loading: true,
  result: null,
  error: null,
};

const bookingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_BOOKING_DETAILS:
      return {
        ...state,
        loading: false,
        result: action.payload,
      };

    default:
      return state;
  }
};

export default bookingReducer;
