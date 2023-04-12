import axios from "axios";

export default axios.create({
  // baseURL: "https://api-hotelbooking.onrender.com",
  baseURL: "http://localhost:3002",
  headers: {
    "Content-Type": "application/json",
  },
});
