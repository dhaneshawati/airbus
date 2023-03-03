import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Confirm.css";
import { useNavigate } from "react-router-dom";
import Flash from "../Flash";

const Confirm = () => {
  const Pdetails = useSelector((state) => state.userInfo.personalDetails);
  const bookData = useSelector((state) => state.bookingInfo.result);
  const travelData = useSelector((state) => state.travelInfo);
  const [flash, setFlash] = useState("Successful");
  const [flashFlag, setFlashFlag] = useState(false);
  const flightPrice = bookData ? bookData.price : "";
  const travellers = travelData ? travelData.persons : 1;
  const totalPrice = Number(flightPrice) * Number(travellers);
  const navigate = useNavigate();

  const showFlash = (message) => {
    setFlash(message);
  };

  const handlePayment = (e) => {
    setFlashFlag(true);
    showFlash(
      "Your payment is Successful! You are being redirected to home page..."
    );
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  return (
    <div className="confirm">
      {flashFlag && <Flash flashMsg={flash} />}
      <div className="summary_container">
        <div className="headtitle">
          <span className="headerText">Booking Summary</span>
          <p className="connfirmDetails">Confirm booking details</p>
        </div>
        <div className="overContain">
          <div className="details_Container">
            <div className="firstcol">
              <p>
                <span className="highText">Name: </span>
                <span>{Pdetails.name}</span>
              </p>
              <p>
                <span className="highText">Email id: </span>
                <span>{Pdetails.emailId}</span>
              </p>
              <p>
                <span className="highText">Flight number: </span>
                <span>{bookData.flightNumber}</span>
              </p>
              <p>
                <span className="highText">Source city: </span>
                <span>{travelData.startPoint}</span>
              </p>
              <p>
                <span className="highText">Departure time: </span>
                <span>{bookData.departTime}</span>
              </p>
              <p>
                <span className="highText">Journey Date: </span>
                <span>{travelData.journeyDate}</span>
              </p>
            </div>
            <div className="secondcol">
              <p>
                <span className="highText">Phone number: </span>
                <span>{Pdetails.phoneNumber}</span>
              </p>
              <p>
                <span className="highText">Airline: </span>
                <span>{bookData.airLine}</span>
              </p>
              <p>
                <span className="highText">Class Type: </span>
                <span>{travelData.class}</span>
              </p>
              <p>
                <span className="highText">Destination city: </span>
                <span>{travelData.endPoint}</span>
              </p>
              <p>
                <span className="highText">Arrival time: </span>
                <span>{bookData.arriveTime}</span>
              </p>
              <p>
                <span className="highText">Total travellers: </span>
                <span>{travelData.persons}</span>
              </p>
            </div>
          </div>

          <div className="total">
            <hr />
            <div className="fare">
              <p className="totalFare">Total Fare:</p>
              <p className="amount">{`₹ ${totalPrice}`}</p>
            </div>
          </div>
        </div>

        <div className="pay_btn">
          <button className="pay" onClick={handlePayment}>
            Confirm and Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
