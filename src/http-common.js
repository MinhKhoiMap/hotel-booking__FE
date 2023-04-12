import axios from "axios";

export default axios.create({
  // baseURL: "https://api-hotelbooking.onrender.com",
  baseURL: "https://api-hotelbooking.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});
