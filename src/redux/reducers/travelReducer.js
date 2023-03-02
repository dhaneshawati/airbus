import { TRAVEL_DATA_USER } from "../actions/actionCreator";

const defaultState = {
  startPoint: "",
  endPoint: "",
  journeyDate: null,
  returnDate: null,
  tripType: "oneWay",
  persons: 1,
  class: "Economy",
};

const travelReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TRAVEL_DATA_USER:
      return {
        ...state,
        startPoint: action.payload.source,
        endPoint: action.payload.destination,
        journeyDate: action.payload.deptDate,
        returnDate: action.payload.returnDate,
        tripType: action.payload.selectTrip,
        persons: action.payload.people,
        class: action.payload.classType,
      };

    default:
      return state;
  }
};

export default travelReducer;
