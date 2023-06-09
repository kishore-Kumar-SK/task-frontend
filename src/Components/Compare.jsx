import React, { useEffect, useContext } from "react";
import UserContext from "../Context/UserContext";

const Compare = () => {
  const arr3 = [];
  const { arr1, arr2, arr4, setState, setArr4, setValue } =
    useContext(UserContext);
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
    setValue(arr4.length);
    setArr4([...arr3]);
  }, [arr1.length, arr2.length]);

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
        height: "270px",
        padding: "10px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        overflowY: "auto",
      }}
    >
      <ul>
        {arr3.map((item, index) => (
          <div
            style={{
              borderRadius: "5rem 5rem 5rem 5rem",
              margin: "10px",
              padding: "15px",
              backgroundColor: isAlphabetsOnly(item) ? "#00ff80" : "#ff4d4d",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "2.5px 6px 1px 1px #888888",
              overflowY: "auto",
            }}
          >
            <li
              key={index}
              style={{
                listStyleType: "none",
                fontSize: "1.3rem",

                textAlign: "center",
              }}
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
