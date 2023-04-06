import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";

const Input2 = ({ arr2, setArr2 }) => {
  const [myArray, setMyArray] = useState([]);
  const [textFieldValue, setTextFieldValue] = useState("");

  const handleAddButtonClick = () => {
    if (textFieldValue.trim() !== "") {
      if (!arr2.includes(textFieldValue)) {
        setMyArray([...myArray, textFieldValue]);
        setArr2((prev) => [...prev, textFieldValue]);
      } else {
        alert("text already entered");
      }
      setTextFieldValue("");
    }
  };

  return (
    <Box
      style={{
        position: "absolute",
        margin: "50px",
        padding: "30px",
        display: "flex",
        flex: "1",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", flex: "1", flexDirection: "row" }}>
        <TextField
          id="list"
          value={textFieldValue}
          onChange={(e) => setTextFieldValue(e.target.value)}
        />
        <Button
          style={{ color: "red" }}
          color="primary"
          onClick={handleAddButtonClick}
        >
          +
        </Button>
      </div>

      <div
        style={{
          marginTop: "20px",
          height: "260px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflowY: "auto",
        }}
      >
        <ul>
          {myArray.map((item, index) => (
            <li
              key={index}
              style={{ listStyleType: "none", fontSize: "1.3rem" }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Box>
  );
};

export default Input2;
