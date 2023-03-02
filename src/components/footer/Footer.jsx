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
      {/* <img
        src="https://media.istockphoto.com/id/1164049513/photo/airplane-taking-off-from-the-airport.jpg?s=612x612&w=0&k=20&c=nJm8C9OReeKktbMavXhP8O71cZ8AZx8RKiE-hK8TrWE="
        alt="plane-cover"
      /> */}
      {/* <span className="text">Hello</span> */}
      <div className="text">
        {flightArray.map((val, index) => (
          <FlightItem key={index} flightData={val} bookNow={bookNow} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
