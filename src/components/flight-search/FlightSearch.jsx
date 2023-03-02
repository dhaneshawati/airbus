import React, { useState, useEffect } from "react";
import "./FlightSearch.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
// import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import { validateSearch } from "../../services/globalServices";
import {
  fetchDataJson,
  fetchFlights,
  fetchFlightFailure,
} from "../../redux/actions/fetchCreator";
import { bookDetails } from "../../redux/actions/actionCreator";
// import actions from "../../constants/actions";
// import FlightListOneWay from "../../components/flight-list-grid/flight-list-one-way";

import CityJSON from "../../Assets/cities.json";
import FlightList from "./FlightList";

const cities = [...CityJSON];

// const useStyles = makeStyles(() => ({
//   filterContainer: {
//     marginBottom: 25,
//   },
// }));

const FlightSearch = (props) => {
  const travelData = useSelector((state) => state.travelInfo);

  const start = travelData.startPoint;
  const end = travelData.endPoint;
  const jDate = travelData.journeyDate;
  const rDate = travelData.returnDate;
  const trip = travelData.tripType;

  const [source, setSource] = useState(start);
  const [dest, setDest] = useState(end);
  const [deptDate, setDeptDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [selectTrip, setSelectTrip] = useState(trip);
  const [searchDone, setSearchDone] = useState(false);
  const [inputSource, setInputSource] = useState(start);
  const [inputDest, setInputDest] = useState(end);
  const [cityError, setCityError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const flightList = useSelector((state) => state.flightInfo.fdata);

  // const classes = useStyles();

  // On Page Load
  useEffect(() => {
    // Reset Flight List
    console.log(start, end, jDate);
    // dispatch(fetchFlights());
  }, []);
  // function getSource() {
  //   return start;
  // }
  const handleSource = (newVal) => {
    setSource(newVal);
  };

  const handleDestination = (newVal) => {
    setDest(newVal);
  };

  const handleDeparture = (e) => {
    setDeptDate(e.target.value);
  };

  const handleSelectTrip = (e) => {
    setSelectTrip(e.target.value);
  };

  const handleReturn = (e) => {
    setReturnDate(e.target.value);
  };

  const handleSearchFlight = () => {
    const payload = {};

    payload.source = source?.name ? source.name : start;
    payload.destination = dest?.name ? dest.name : end;
    payload.deptDate = deptDate ? deptDate : jDate;
    payload.returnDate = returnDate;
    payload.tripType = selectTrip;
    console.log("payload", payload);
    console.log("source", source);
    if (
      payload?.source?.toLowerCase() === payload?.destination?.toLowerCase()
    ) {
      setCityError(true);
      setSearchDone(false);
      return;
    }
    setCityError(false);

    // Reset Flight List
    dispatch(fetchDataJson(payload));

    setSearchDone(true);

    // const errorMsg = error.Message;
    // // or try vatch in handleSearch async function
    // console.log(errorMsg);
    // dispatch(fetchFlightFailure(errorMsg));
  };

  const handleBookNow = (bookingVal) => {
    dispatch(bookDetails(bookingVal));
    navigate("/booking");
  };

  return (
    <div className="flightsearch">
      {/* {console.log(jDate.toLocaleDateString("en-GB"))} */}
      <Grid container spacing={4} className="flightsearch">
        <Grid item xs={12} md={12} className=" m-4">
          <RadioGroup row onChange={handleSelectTrip} value={selectTrip}>
            <FormControlLabel
              value="one"
              control={<Radio color="primary" />}
              label="One Way"
              name="trip"
            />
            <FormControlLabel
              value="both"
              control={<Radio color="primary" />}
              label="Round Trip"
              name="trip"
            />
          </RadioGroup>
        </Grid>
        <Grid item xs={12} md={6}>
          <span className="label">Source City:</span>
          <Autocomplete
            value={source}
            inputValue={inputSource}
            onChange={(event, newValue) => {
              handleSource(newValue);
            }}
            onInputChange={(event, newInputValue) => {
              setInputSource(newInputValue);
            }}
            options={cities}
            getOptionLabel={(option) => (option.name ? option.name : "")}
            isOptionEqualToValue={(option, value) =>
              option.name === value.value
            }
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                // label="Source City"
                variant="outlined"
                value={start}
                placeholder={start}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <span className="label">Destination City:</span>
          <Autocomplete
            value={dest}
            inputValue={inputDest}
            onChange={(event, newValue) => {
              handleDestination(newValue);
            }}
            onInputChange={(event, newInputValue) => {
              setInputDest(newInputValue);
            }}
            // defaultValue={{ title: "destin" }}
            options={cities}
            getOptionLabel={(option) => (option.name ? option.name : "")}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                // label="Destination City"
                variant="outlined"
                value={end}
                placeholder={end}
                // defaultValue={{ title: "destin" }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Journey Date"
            type="date"
            value={deptDate}
            onChange={handleDeparture}
            variant="outlined"
            // placeholder={jDate.toLocaleDateString("en-GB")}
            style={{ width: 300 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        {selectTrip?.toUpperCase() === "BOTH" && (
          <Grid item xs={12} md={6}>
            <TextField
              label="Return Date"
              type="date"
              value={returnDate}
              onChange={handleReturn}
              variant="outlined"
              style={{ width: 300 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearchFlight}
            disabled={validateSearch(
              source,
              dest,
              deptDate,
              returnDate,
              selectTrip
            )}
          >
            {`Search Flight`}
          </Button>
        </Grid>
        <Grid item xs={12}>
          {cityError && (
            <Typography
              variant="body1"
              color="error"
            >{`Source and Destination City can not be same`}</Typography>
          )}
          {searchDone && (
            <FlightList flightList={flightList} bookNow={handleBookNow} />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default FlightSearch;
