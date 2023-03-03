import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Form.css";
import { setPersonalDetails } from "../../redux/actions/actionCreator";

export default function Form() {
  const userMail = useSelector((state) => state.userInfo.user.email);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const personalInfo = {};
  const [nameErr, setNameErr] = React.useState(true);
  const [nameInput, setNameInput] = React.useState("");
  const [nameLabel, setNamelabel] = React.useState("Name");
  const [nameHelperText, setnameHelperText] = React.useState(
    "min 6 characters are required"
  );
  const [phoneErr, setPhoneErr] = React.useState(true);
  const [phoneInput, setPhoneInput] = React.useState("");
  const [phoneLabel, setPhonelabel] = React.useState("Phone no");
  const [phoneHelperText, setPhoneHelperText] = React.useState(
    "Mobile no must contain 10 digits"
  );
  const [emailErr, setEmailErr] = React.useState(false);
  const [emailInput, setEmailInput] = React.useState(userMail);
  const [emailLabel, setEmaillabel] = React.useState("Email");
  const [emailHelperText, setEmailHelperText] = React.useState("");
  const [addressInput, setAddressInput] = React.useState("India");

  function handleNameChange(e) {
    setNameInput(e.target.value);

    if (e.target.value.length >= 6) {
      setNameErr(false);
      // setlabel("");
      setnameHelperText("");
    } else {
      setNameErr(true);
    }
  }
  function handlePhoneChange(e) {
    const mobileInput = e.target.value;
    const validMobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

    setPhoneInput(mobileInput);
    if (mobileInput.match(validMobileRegex) && mobileInput.length !== 0) {
      setPhoneErr(false);
      // setlabel("");
      setPhoneHelperText("");
    } else {
      setPhoneErr(true);
      // setPhoneHelperText("");
    }
  }
  function handleEmailChange(e) {
    const mailInput = e.target.value || userMail;

    const validEmailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    setEmailInput(mailInput);
    if (mailInput.match(validEmailRegex) && mailInput.length !== 0) {
      setEmailErr(false);
      // setlabel("");
      setEmailHelperText("");
    } else {
      setEmailErr(true);
      setEmailHelperText("Use valid email format");
    }
  }
  function handleAddressChange(e) {
    setAddressInput(e.target.value);
  }

  function handleCheckOut(e) {
    personalInfo.name = nameInput;
    personalInfo.phoneNumber = phoneInput;
    personalInfo.emailId = emailInput;
    personalInfo.address = addressInput;

    //Dispatch details
    dispatch(setPersonalDetails(personalInfo));
    //navigate
    navigate("/checkout");
  }
  return (
    <div className="forms">
      <span className=" text-lg font-bold font-serif fillDetails">
        Please fill your details
      </span>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "300px", gap: "10px" },
        }}
        noValidate
        autoComplete="off"
        className="forms container"
      >
        <div className="name">
          <TextField
            error={nameErr}
            id="standard-error-helper-text"
            value={nameInput}
            label={nameLabel}
            defaultValue="Hello World"
            helperText={nameHelperText}
            variant="standard"
            onChange={handleNameChange}
          />
        </div>
        <div className="phone">
          <TextField
            error={phoneErr}
            id="standard-error-helper-text"
            value={phoneInput}
            label={phoneLabel}
            defaultValue="Hello World"
            helperText={phoneHelperText}
            variant="standard"
            onChange={handlePhoneChange}
          />
        </div>
        <div className="email">
          <TextField
            error={emailErr}
            id="standard-error-helper-text"
            value={emailInput}
            label={emailLabel}
            defaultValue={userMail}
            placeholder={userMail}
            helperText={emailHelperText}
            variant="standard"
            onChange={handleEmailChange}
          />
        </div>
        <div className="address">
          <TextField
            id="standard-error-helper-text"
            value={addressInput}
            label="Address"
            defaultValue="India"
            variant="standard"
            onChange={handleAddressChange}
          />
        </div>
        <div className="checkout_btn">
          <button
            className="w-[15rem] text-white my-2 bg-[#060606] rounded-md p-4 text-center flex items-center justify-center hover:bg-slate-600"
            onClick={handleCheckOut}
            disabled={nameErr || phoneErr || emailErr}
          >
            Checkout
          </button>
        </div>
      </Box>
    </div>
  );
}
