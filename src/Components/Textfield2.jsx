import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import CancelIcon from "@mui/icons-material/Cancel";

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
  let setter2;
  function isAlphabetsOnly(str) {
    if (/^[a-zA-Z]+$/.test(str)) {
      setter2 = true;
    } else {
      setter2 = false;
    }
    return setter2;
  }

  function removeItem(itemIndex) {
    const newMyArray = [...myArray];
    const newArr2 = [...arr2];
    newMyArray.splice(itemIndex, 1);
    newArr2.splice(itemIndex, 1);
    setMyArray(newMyArray);
    setArr2(newArr2);
  }

  return (
    <Box
      style={{
        position: "absolute",
        margin: "50px",
        padding: "30px",
        display: "flex",
        flex: "1",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", flex: "1", flexDirection: "row" }}>
        <TextField
          style={{ width: "100%" }}
          id="list"
          value={textFieldValue}
          onChange={(e) => setTextFieldValue(e.target.value)}
        />
        <Button
          style={{ color: "#fff", marginLeft: "8px" }}
          variant="contained"
          onClick={handleAddButtonClick}
        >
          <h2>+</h2>
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
            <div
              style={{
                width: "301px",
                borderRadius: "5rem 5rem 5rem 5rem",
                margin: "10px",
                padding: "5px",
                backgroundColor: isAlphabetsOnly(item) ? "#00ff80" : "#ff4d4d",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button
                style={{
                  height: "3rem",
                  width: "3rem",
                  borderRadius: "60%",
                }}
                onClick={() => removeItem(index)}
              >
                <CancelIcon />
              </Button>
              <li
                key={index}
                style={{ listStyleType: "none", fontSize: "1.3rem" }}
              >
                {item}
              </li>
              <Button
                style={{
                  height: "3rem",
                  width: "3rem",
                  borderRadius: "50%",
                }}
              >
                <ArrowCircleLeftIcon />
              </Button>
            </div>
          ))}
        </ul>
      </div>
    </Box>
  );
};

export default Input2;
