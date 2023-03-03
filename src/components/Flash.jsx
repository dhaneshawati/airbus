import React from "react";
import Alert from "@mui/material/Alert";

const Flash = (props) => {
  return (
    props.flashMsg && (
      <Alert variant="filled" severity="success">
        {props.flashMsg}
      </Alert>
    )
  );
};

export default Flash;
