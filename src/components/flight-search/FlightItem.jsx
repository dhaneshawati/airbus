import React from "react";
import "./FlightItem.css";
import { Avatar } from "@mui/material";

const FlightItem = (props) => {
  const { flightData, bookNow } = props;

  return (
    <div className="itemcontainer">
      {console.log(flightData)}
      <Avatar
        className="logo"
        src={flightData?.airlineLogo ? flightData.airlineLogo : ""}
        sx={{ width: 56, height: 56 }}
      />
      <div className="departure">
        <span className="time">
          {flightData?.deptTime ? flightData.deptTime : ""}
        </span>
        <span className="place">
          {flightData?.deptCity ? flightData.deptCity : ""}
        </span>
      </div>
      {flightData.deptTime}
      <div className="flight">
        <span className="name">{flightData?.airlineName}</span>
        <span className="number">{flightData?.flightNbr}</span>
        <span className="stops">{flightData?.noOfStops}</span>
      </div>
      <div className="arrival">
        <span className="time">{flightData?.arivalTime}</span>
        <span className="place">{flightData?.arivalCity}</span>
      </div>
      <div className="btn">
        <button className="price">{flightData?.price}</button>
      </div>
    </div>
  );
};

export default FlightItem;
