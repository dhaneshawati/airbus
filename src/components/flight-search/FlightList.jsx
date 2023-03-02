import React from "react";
import FlightItem from "./FlightItem";
import "./FlightList.css";

const FlightList = (props) => {
  const { flightList, bookNow } = props;
  console.log(flightList);
  if (flightList?.length > 0) {
    console.log(flightList);
    return (
      <div className="flightlist">
        {flightList?.map((val, index) => (
          <FlightItem key={index} flightData={val} bookNow={bookNow} />
        ))}
        {/* <FlightItem />
        <FlightItem />
        <FlightItem />
        <FlightItem /> */}
      </div>
    );
  } else return <div className="flightList">No data found</div>;
};

export default FlightList;
