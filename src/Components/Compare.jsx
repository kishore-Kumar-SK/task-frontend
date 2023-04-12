import React, { useEffect } from "react";
// import Animation from "./Animation";

const Compare = ({ arr1, arr2, setState }) => {
  const arr3 = [];
  if (arr1.length >= arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          arr3.push(arr1[i]);
        }
      }
    }
  } else {
    for (let i = 0; i < arr2.length; i++) {
      for (let j = 0; j < arr1.length; j++) {
        if (arr2[i] === arr1[j]) {
          arr3.push(arr2[i]);
        }
      }
    }
  }

  useEffect(() => {
    setState((prev) => !prev);
  }, [arr1.length || arr2.length]);

  let setter1;
  function isAlphabetsOnly(str) {
    if (/^[a-zA-Z]+$/.test(str)) {
      setter1 = true;
    } else {
      setter1 = false;
    }
    return setter1;
  }

  return (
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
        {arr3.map((item, index) => (
          <div
            style={{
              width: "301px",
              borderRadius: "5rem 5rem 5rem 5rem",
              margin: "10px",
              padding: "5px",
              backgroundColor: isAlphabetsOnly(item) ? "#00ff80" : "#ff4d4d",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <li
              key={index}
              style={{ listStyleType: "none", fontSize: "1.3rem" }}
            >
              {item}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Compare;
