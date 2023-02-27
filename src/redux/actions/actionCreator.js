export const NEWLOGIN = "Login";
export const LOGOUT = "Logout";
export const TRAVELLER = "Traveller";

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

export { setUser, onSignOut };
