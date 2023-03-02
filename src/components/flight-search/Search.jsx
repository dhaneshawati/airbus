import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import FlightSearch from "./FlightSearch";

const Search = () => {
  const travelData = useSelector((state) => state.travelInfo);
  // const { start, end, jDate, rDate, trip, people, travelClass } = travelData;

  useEffect(() => {
    console.log(travelData);
  }, []);
  return (
    <div className="search">
      <div className="top">
        <Navbar />
      </div>
      <FlightSearch travelData={travelData} />
    </div>
  );
};

export default Search;
