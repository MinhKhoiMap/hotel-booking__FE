export const setIn4Booking = (in4) => (dispatch) => {
  // console.log(in4, "howr howr");
  dispatch({ type: "SET_BOOKING", payload: in4 });
};
