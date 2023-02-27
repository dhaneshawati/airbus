import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { plane-departure } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Booking from "./components/booking/Booking";
import Confirm from "./components/confirmation/Confirm";
import Search from "./components/flight-search/Search";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import SignUp from "./components/signup/SignUp.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/search"
        element={<ProtectedRoutes>{<Search />}</ProtectedRoutes>}
      />
      <Route path="/booking" element={<Booking />} />
      <Route path="/checkout" element={<Confirm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
