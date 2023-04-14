import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import CancelIcon from "@mui/icons-material/Cancel";

const Input2 = ({ arr2, setArr2, arr1, signal, setSignal }) => {
  const [myArray2, setMyArray] = useState([]);
  const [textFieldValue, setTextFieldValue] = useState("");

  useEffect(() => {
    function moves() {
      if (signal.sigType === 2) {
        if (!arr2.includes(signal.message)) {
          setMyArray([...myArray2, signal.message]);
          setArr2((prev) => [...prev, signal.message]);
        } else {
          alert("text already entered");
        }
      }
    }
    moves();
  }, [signal]);

  const handleAddButtonClick = () => {
    if (textFieldValue.trim() !== "") {
      if (!arr2.includes(textFieldValue)) {
        setMyArray([...myArray2, textFieldValue]);
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
    const newMyArray2 = [...myArray2];
    const newArr2 = [...arr2];
    newMyArray2.splice(itemIndex, 1);
    newArr2.splice(itemIndex, 1);
    setMyArray(newMyArray2);
    setArr2(newArr2);
  }

  function moveItem(itemIndex) {
    setSignal((prev) => ({
      ...prev,
      sigType: 1,
      message: myArray2[itemIndex],
    }));
    if (!arr1.includes(myArray2[itemIndex])) {
      removeItem(itemIndex);
    }
  }

  return (
    <div
      style={{
        position: "absolute",
        margin: "50px",
        padding: "30px",
        display: "flex",
        flex: "1",
        flexDirection: "column",
        justifyContent: "center",
        overflowY: "auto",
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
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflowY: "auto",
        }}
      >
        <ul>
          {myArray2.map((item, index) => (
            <div
              style={{
                width: "100%",
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
                onClick={() => moveItem(index)}
              >
                <ArrowCircleLeftIcon />
              </Button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Input2;
