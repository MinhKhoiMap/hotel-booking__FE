import { CREATE_USER, RETRIEVE_USER } from "./types";
import UserService from "../../services/user.service";

export const getUser = (token) => async (dispatch) => {
  try {
    const response = await UserService.getUser({
      headers: { authorization: token },
    });

    // console.log(response, "res ở action");

    dispatch({
      type: RETRIEVE_USER,
      payload: response.data,
    });

    return response.data;
  } catch (err) {
    // console.log(err);
    throw err;
  }
};

export const getUserByEmail = (email) => async (dispatch) => {
  try {
    const response = await UserService.getUserByEmail(email);

    // console.log(response, "resss cc");

    dispatch({
      type: RETRIEVE_USER,
      payload: response.data,
    });

    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getUserByPhoneNumber = (phoneNumber) => async (dispatch) => {
  try {
    const response = await UserService.getUserByPhoneNumber(phoneNumber);

    dispatch({
      type: RETRIEVE_USER,
      payload: response.data,
    });

    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const createUser = (user) => async (dispatch) => {
  try {
    const response = await UserService.createUser(user);
    console.log(response, "response day");
    console.log(user, "user day");
    localStorage.setItem("userToken", response.data.userToken);
    dispatch({
      type: CREATE_USER,
      payload: user,
    });
  } catch (err) {
    console.log("hiển thị lỗi ở action", err);
    throw err;
  }
};
