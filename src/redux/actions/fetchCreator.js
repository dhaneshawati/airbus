import FlightJSON from "../../Assets/flights.json";
import { filterBySourceDest } from "../../services/globalServices";

export const GET_FLIGHT_LIST = "GET_FLIGHT_LIST";
export const GET_FLIGHT_LIST_SUCCESS = "GET_FLIGHT_LIST_SUCCESS";
export const GET_FLIGHT_LIST_ERROR = "GET_FLIGHT_LIST_ERROR";
export const RESET_FLIGHT_LIST = "RESET_FLIGHT_LIST";

export const fetchFlights = () => {
  return {
    type: RESET_FLIGHT_LIST,
  };
};
export const fetchFlightSuccess = (response) => {
  return {
    type: GET_FLIGHT_LIST_SUCCESS,
    payload: response,
  };
};
export const fetchFlightFailure = (message) => {
  return {
    type: GET_FLIGHT_LIST_ERROR,
    payload: message,
  };
};

export const fetchDataJson = (travelData) => {
  return (dispatch) => {
    dispatch(fetchFlights());
    const jsonResponse = [...FlightJSON];
    const response = filterBySourceDest(travelData, jsonResponse);
    dispatch(fetchFlightSuccess(response));
  };
};
