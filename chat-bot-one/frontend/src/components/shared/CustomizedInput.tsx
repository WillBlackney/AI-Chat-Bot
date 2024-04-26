import { TextField } from "@mui/material";
import React from "react";

type Props = {
  name: string;
  type: string;
  label: string;
};

function CustomizedInput(props: Props) {
  return (
    <TextField
      margin="normal"      
      name={props.name}
      label={props.label}
      type={props.type}
      InputLabelProps={{ style: { color: "white" } }}
      
      inputProps={{
        style: {
          width: "400px",
          borderRadius: 10,
          fontSize: 20,
          color: "white",
        },
      }}
    />
  );
}

export default CustomizedInput;
