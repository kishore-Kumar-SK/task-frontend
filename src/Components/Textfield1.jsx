import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";

// function addItems(value) {
//   array[i] = document.getElementById("items").value;
//   i++;
// let text = document.getElementById("items").value
//   return <List item={array[i]} />;
//   console.log(value);
//   array.push(value);
//   document.getElementById("items").value = "";
// }

// function List({ arr }) {
//   console.log(arr);
//   return (
//     <ul>
//       {arr.map((item) => (
//         <li>{item}</li>
//       ))}
//     </ul>
//   );
// }

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

export default Input;
