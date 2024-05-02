import React from "react";
import { Link } from "react-router-dom";

type Props = {
  to: string;
  bg: string;
  text: string;
  textColor: string;
  onClick?: () => Promise<void>;
};
const NavigationLink = (props: Props) => {
  return (
    <Link
    onClick={props.onClick}
      to={props.to}
      style={{
        background: props.bg,
        color: props.textColor,
        fontWeight: "600",
        textTransform: "uppercase",
        marginLeft: "10px",
        marginRight: "10px",
        padding: "8px 20px",
        borderRadius: "10px",
        textDecoration: "none",
        letterSpacing: "1px",
      }}
    >
      {props.text}
    </Link>
  );
};

export default NavigationLink;
