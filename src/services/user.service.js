import http from "../http-common";

class UserServiceClass {
  constructor() {}

  getUser(options) {
    return http.get("/api/auth", options);
  }

  getUserByEmail(form) {
    return http.post(`/api/auth/email`, form);
  }

  getUserByPhoneNumber(form) {
    return http.post(`/api/auth/phone`, form);
  }

  createUser(userProfile) {
    return http.post("/api/create-account", userProfile);
  }

  updateProfile(id, newProfile, options) {
    return http.put(`api/users/${id}`, newProfile, options);
  }

  deleteUser(id, options) {
    return http.delete(`/api/users/${id}`, options);
  }
}

export default new UserServiceClass();
