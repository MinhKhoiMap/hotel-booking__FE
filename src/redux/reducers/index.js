import { combineReducers } from "redux";
import userReducer from "./user";
import bookingReducer from "./booking";

export default combineReducers({
  user: userReducer,
  booking: bookingReducer,
});
