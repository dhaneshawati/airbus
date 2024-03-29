import React, { useState } from "react";
import "./Header.css";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlaneArrival,
  faPlaneDeparture,
  faTaxi,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import CityJSON from "../../Assets/cities.json";
import "react-datepicker/dist/react-datepicker.css";
import { setTravelInfo } from "../../redux/actions/actionCreator";

function Header() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [openOptions, setOpenOptions] = useState(false);
  const [person, setPerson] = useState(1);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [trip, setTrip] = useState("one");
  const [classType, setClassType] = useState("Economy");
  const [clicked, setClicked] = useState(false);
  const [isFlightSection, setIsFlightSection] = useState(true);

  const cities = [...CityJSON];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handlePerson(operation) {
    if (operation === "i") {
      setPerson((prev) => prev + 1);
    }
    if (operation === "d" && person > 1) {
      setPerson((prev) => prev - 1);
    }
  }

  function handleSourceAutoSuggest(searchTerm) {
    setSource(searchTerm);
  }

  function handleDestinationAutoSuggest(val) {
    setDestination(val);
  }
  function handleClick(e) {
    console.log(e.currentTarget);
    console.log(e.target);
    const activeElement = document.getElementsByClassName("active")[0];
    console.log(activeElement);
    console.log("Element id " + activeElement.id);
    activeElement.classList.remove("active");
    e.currentTarget.classList.add("active");

    if (e.currentTarget.id === "flights") {
      setIsFlightSection(true);
    } else {
      setIsFlightSection(false);
    }
  }
  function handleSearch() {
    const info = {
      source,
      destination,
      deptDate: selectedDate,
      returnDate: null,
      tripType: trip,
      people: person,
      classType,
    };
    // Dispatch
    dispatch(setTravelInfo(info));

    // setSource("");
    // setDestination("");
    // setSelectedDate("");

    navigate("/search");
  }

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div
            className="headerListItem active"
            id="flights"
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faPlaneDeparture} />
            <span>Flights</span>
          </div>
          <div className="headerListItem" onClick={handleClick}>
            <FontAwesomeIcon icon={faBed} />
            <span>stays</span>
          </div>
          <div className="headerListItem" onClick={handleClick}>
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem" onClick={handleClick}>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
          <div className="headerListItem" onClick={handleClick}>
            <FontAwesomeIcon icon={faUtensils} />
            <span>Food</span>
          </div>
        </div>
        {isFlightSection ? (
          <div className="sectionText">
            <h1 className=" text-3xl font-bold headerTitle">
              Book your flight tickets with complete security
            </h1>
            <p className="headerDescription">
              Get security as well as cashback. Get rewarded for your travels
              each time!
            </p>
          </div>
        ) : (
          <div className="sectionText">
            <h1 className=" text-3xl font-bold headerTitle">Comming Soon...</h1>
            <p className="headerDescription">
              Stay tuned for launch of upcoming fetures and more rewards.
            </p>
          </div>
        )}

        <div className="headerSearch">
          <div className="dropdown_container">
            <div className="headerSearchItem searchField">
              <FontAwesomeIcon icon={faPlaneDeparture} className="headerIcon" />
              <input
                type="text"
                placeholder="Enter source place"
                className="headerSearchInput"
                onChange={(e) => setSource(e.target.value)}
                value={source}
              />
            </div>
            <div className="dropdown">
              {cities
                .filter((item) => {
                  const searchTerm = source.toLowerCase();
                  const cityName = item.name.toLowerCase();

                  return (
                    searchTerm &&
                    cityName.includes(searchTerm) &&
                    cityName !== searchTerm
                  );
                })
                .map((item) => (
                  <div
                    onClick={() => handleSourceAutoSuggest(item.name)}
                    className="dropdown-row"
                    key={item.id}
                  >
                    {item.name}
                  </div>
                ))}
            </div>
          </div>

          <div className="dropdown_container">
            <div className="headerSearchItem searchField">
              <FontAwesomeIcon icon={faPlaneArrival} className="headerIcon" />
              <input
                type="text"
                placeholder="Enter destination place"
                className="headerSearchInput"
                onChange={(e) => setDestination(e.target.value)}
                value={destination}
              />
            </div>
            <div className="dropdown">
              {cities
                .filter((item) => {
                  const searchTerm = destination.toLowerCase();
                  const cityName = item.name.toLowerCase();

                  return (
                    searchTerm &&
                    cityName.includes(searchTerm) &&
                    cityName !== searchTerm
                  );
                })
                .map((item) => (
                  <div
                    onClick={() => handleDestinationAutoSuggest(item.name)}
                    className="dropdown-row"
                    key={item.id}
                  >
                    {item.name}
                  </div>
                ))}
            </div>
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span className="headerSearchText">Journey date</span>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              className="date"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className="headerSearchText"
            >{`${person} person`}</span>
            {openOptions && (
              <div className="options">
                <div className="optionItem">
                  <span className="optionText">Person</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handlePerson("d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{person}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handlePerson("i")}
                  >
                    +
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn" onClick={() => handleSearch()}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
