import React, { useEffect, useState } from "react";
import { useAuth } from "../../firebase";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import FlightJSON from "../../Assets/flights.json";
import Pagination from "../Pagination";
const jsonResponse = [...FlightJSON];

const Home = () => {
  const currentUser = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [flightsPerPage, setFlightsPerPage] = useState(6);

  // Get current flights
  const indexOfLastFlight = currentPage * flightsPerPage;
  const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
  const currentFlightjson = jsonResponse.slice(
    indexOfFirstFlight,
    indexOfLastFlight
  );

  // Change Page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {
    if (currentUser && currentUser.photoURL) {
      console.log(currentUser.photoURL);
      console.log(currentUser);
    }
  }, [currentUser]);

  return (
    <div className="home">
      <Navbar />
      <Header />
      <Footer flightArray={currentFlightjson} />
      <Pagination
        flightsPerPage={flightsPerPage}
        totalFlights={jsonResponse.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Home;
