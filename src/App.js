import "./App.css";
import "antd/dist/reset.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Discovery from "./pages/Discovery/Discovery";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Accounts from "./pages/Accounts/Accounts";
import RoomDetails from "./pages/RoomDetails/RoomDetails";
import Booking from "./pages/Booking/Booking";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Discovery />} />
        <Route path="home-page" element={<HomePage />} />
        <Route path="accounts" element={<Accounts />}>
          <Route path="log-in" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
        <Route path="rooms/*" element={<RoomDetails />} />
        <Route path="booking/*" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
