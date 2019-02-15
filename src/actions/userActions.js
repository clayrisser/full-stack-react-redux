import * as types from "../constants/actionTypes";

// example of a thunk using the redux-thunk middleware
export function loadUserActions() {
  return function(dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonData) {
        //handle json data processing here
        return dispatch({
          type: types.LOAD_USERS,
          payload: jsonData
        });
      });
  };
}
