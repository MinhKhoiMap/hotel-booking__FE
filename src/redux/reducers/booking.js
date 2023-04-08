const initialState = {};

function bookingReducer(room = initialState, action) {
  // console.log(action.payload, "pay room", room);
  return action.type === "SET_BOOKING" ? action.payload : room;
}

export default bookingReducer;
