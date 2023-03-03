import React from "react";
import { useSelector } from "react-redux";

const Confirm = () => {
  const detail = useSelector((state) => state.userInfo.personalDetails);
  return (
    <div className="confirm">
      Order is Confirmed!!
      <div className="info">
        <h4>{detail.name}</h4>
        <h5>{detail.phoneNumber}</h5>
        <h5>{detail.emailId}</h5>
        <h5>{detail.address}</h5>
      </div>
    </div>
  );
};

export default Confirm;
