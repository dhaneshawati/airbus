import { NEWLOGIN, LOGOUT, TRAVELLER_INFO } from "../actions/actionCreator";

const initialState = {
  user: null,
  personalDetails: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWLOGIN:
      return {
        ...state,
        user: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        user: null,
      };

    case TRAVELLER_INFO:
      return {
        ...state,
        personalDetails: action.payload,
      };

    default:
      return state;
  }
};
export default userReducer;
