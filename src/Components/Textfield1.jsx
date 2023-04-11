import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import CancelIcon from "@mui/icons-material/Cancel";

const Input = ({ arr1, setArr1 }) => {
  const [myArray, setMyArray] = useState([]);
  const [textFieldValue, setTextFieldValue] = useState("");

  const handleAddButtonClick = () => {
    if (textFieldValue.trim() !== "") {
      if (!arr1.includes(textFieldValue)) {
        setMyArray([...myArray, textFieldValue]);
        setArr1((prev) => [...prev, textFieldValue]);
      } else {
        alert("text already entered");
      }
      setTextFieldValue("");
    }
  };

  let setter1;
  function isAlphabetsOnly(str) {
    if (/^[a-zA-Z]+$/.test(str)) {
      setter1 = true;
    } else {
      setter1 = false;
    }
    return setter1;
  }

  function removeItem(itemIndex) {
    const newMyArray = [...myArray];
    const newArr1 = [...arr1];
    newMyArray.splice(itemIndex, 1);
    newArr1.splice(itemIndex, 1);
    setMyArray(newMyArray);
    setArr1(newArr1);
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
          width: "100%",
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
                  borderRadius: "50%",
                }}
              >
                <ArrowCircleRightIcon />
              </Button>
              <li
                key={index}
                style={{
                  color: "black",
                  listStyleType: "none",
                  fontSize: "1.3rem",
                }}
              >
                {item}
              </li>
              <Button
                style={{
                  height: "3rem",
                  width: "3rem",
                  fontSize: "2rem",
                  borderRadius: "50%",
                }}
                onClick={() => removeItem(index)}
              >
                <CancelIcon />
              </Button>
            </div>
          ))}
        </ul>
      </div>
    </Box>
  );
};

export default Input;
