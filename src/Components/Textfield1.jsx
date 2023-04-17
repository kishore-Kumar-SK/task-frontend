import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import CancelIcon from "@mui/icons-material/Cancel";

const Input = ({ arr1, setArr1, arr2, signal, setSignal }) => {
  const [myArray1, setMyArray] = useState([]);
  const [textFieldValue, setTextFieldValue] = useState("");

  useEffect(() => {
    function moves() {
      if (signal.sigType === 1) {
        if (!arr1.includes(signal.message)) {
          setMyArray([...myArray1, signal.message]);
          setArr1((prev) => [...prev, signal.message]);
        } else {
          alert("text already entered");
        }
      }
    }
    moves();
  }, [signal]);

  const handleAddButtonClick = () => {
    if (textFieldValue.trim() !== "") {
      if (!arr1.includes(textFieldValue)) {
        setMyArray([...myArray1, textFieldValue]);
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
    const newMyArray1 = [...myArray1];
    const newArr1 = [...arr1];
    newMyArray1.splice(itemIndex, 1);
    newArr1.splice(itemIndex, 1);
    setMyArray(newMyArray1);
    setArr1(newArr1);
  }

  function moveItem(itemIndex) {
    // console.log(signal.sigType);
    setSignal((prev) => ({
      ...prev,
      sigType: 2,
      message: myArray1[itemIndex],
    }));
    if (!arr2.includes(myArray1[itemIndex])) {
      removeItem(itemIndex);
    }
  }
  return (
    <div
      style={{
        margin: "50px",
        // height: "100%",
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <TextField
          style={{ width: "100%", flex: "11" }}
          id="list"
          value={textFieldValue}
          onChange={(e) => setTextFieldValue(e.target.value)}
        />
        <Button
          style={{ color: "#fff", marginLeft: "8px", flex: "1" }}
          variant="contained"
          onClick={handleAddButtonClick}
        >
          <h2>+</h2>
        </Button>
      </div>

      <div
        style={{
          marginTop: "20px",
          height: "270px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          overflowY: "auto",
        }}
      >
        <ul>
          {myArray1.map((item, index) => (
            <div
              style={{
                borderRadius: "5rem 5rem 5rem 5rem",
                margin: "15px",
                // padding: "5px",
                backgroundColor: isAlphabetsOnly(item) ? "#00ff80" : "#ff4d4d",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "2.5px 6px 1px 1px #888888",
                overflowY: "auto",
              }}
            >
              <Button
                style={{
                  height: "3rem",
                  width: "3rem",
                  borderRadius: "50%",
                }}
                onClick={() => moveItem(index)}
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
    </div>
  );
};

export default Input;
