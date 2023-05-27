import React from "react";
import Erdogan from "../assets/erdogan-profile.jpeg";
import Kilicdaroglu from "../assets/kilicdaroglu-profile.jpeg";

export default function Profile(props) {
  const image = props.name === "RECEP TAYYİP ERDOĞAN" ? Erdogan : Kilicdaroglu;
  return (
    <div
      style={{
        display: "block",
        width: "200px",
        height: "200px",
        overflow: "hidden",
        marginLeft: "10px",
        marginRight: "10px",
      }}
    >
      <img
        src={image}
        style={{
          width: "100%",
        }}
      />
    </div>
  );
}
