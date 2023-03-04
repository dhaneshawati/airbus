import React from "react";
import "./Footer.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FlightItem from "../flight-search/FlightItem";
import { bookDetails } from "../../redux/actions/actionCreator";

const Footer = ({ flightArray }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const bookNow = (valueObj) => {
    dispatch(bookDetails(valueObj));
    navigate("/booking");
  };

  return (
    <div className="footer">
      <div className="text">
        {flightArray.map((val, index) => (
          <FlightItem key={index} flightData={val} bookNow={bookNow} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
