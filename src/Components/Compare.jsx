import React, { useEffect } from "react";
// import Animation from "./Animation";

const Compare = ({ arr1, arr2, setState }) => {
  //   console.log("flag is " + flag);
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
  }, [arr3.length]);

  return (
    <div>
      <ul>
        {arr3.map((item, index) => (
          <li key={index} style={{ listStyleType: "none", fontSize: "1.3rem" }}>
            {item}
          </li>
        ))}
      </ul>
      {/* {setState(true)} */}
    </div>
  );
};

export default Compare;
