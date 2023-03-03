import React from "react";
import { useSelector } from "react-redux";
import Form from "./Form.jsx";
import "./Booking.css";
import Navbar from "../Navbar/Navbar.jsx";

const Booking = () => {
  // const bookData = useSelector((state) => state.bookingInfo.result);
  // const travelData = useSelector((state) => state.travelInfo);
  // const userMail = useSelector((state) => state.userInfo.user.email);

  return (
    <div className="bookInfo">
      <Navbar />
      <Form />
      {/* <div className="info">{console.log(bookData, travelData, userMail)}</div> */}
    </div>
  );
};

export default Booking;
