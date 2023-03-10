export const NEWLOGIN = "Login";
export const LOGOUT = "Logout";
export const TRAVELLER_INFO = "TRAVELLER_INFO";
export const SET_BOOKING_DETAILS = "SET_BOOKING_DETAILS";
export const TRAVEL_DATA_USER = "TRAVEL_DATA_USER";

function setUser(userval) {
  return {
    type: NEWLOGIN,
    payload: userval,
  };
}
function onSignOut() {
  return {
    type: LOGOUT,
  };
}

function setTravelInfo(info) {
  return {
    type: TRAVEL_DATA_USER,
    payload: info,
  };
}

function bookDetails(val) {
  return {
    type: SET_BOOKING_DETAILS,
    payload: val,
  };
}

function setPersonalDetails(val) {
  return {
    type: TRAVELLER_INFO,
    payload: val,
  };
}
export { setUser, onSignOut, setTravelInfo, bookDetails, setPersonalDetails };
