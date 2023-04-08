import {
  RETRIEVE_USER,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../actions/types";

const initialState = {};

function userReducer(user = initialState, action) {
  const { type, payload } = action;
  // console.log("Đây là user ở reducer", user);
  switch (type) {
    case RETRIEVE_USER:
      return payload;
    case CREATE_USER:
      return payload;
    case UPDATE_USER:
      return payload;
    case DELETE_USER:
      return initialState;
    default:
      return user;
  }
}

export default userReducer;
