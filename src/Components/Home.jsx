import React, { useState } from "react";
import Input from "./Textfield1";
import Input2 from "./Textfield2";
import Compare from "./Compare";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const [arr1, setArr1] = useState([]);
  const [arr2, setArr2] = useState([]);
  const [arr4, setArr4] = useState([]);
  const [signal, setSignal] = useState({ sigType: 0, message: "" });
  const [state, setState] = useState(false);
  const [value, setValue] = useState(0);
  const [theme, setTheme] = useState(false);
  const navigate = useNavigate();

  const data = {
    arr1: arr1,
    arr2: arr2,
    arr4: arr4,
    value: value,
    state: state,
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          flex: "1",
          background: theme ? "#fff" : "#5A5A5A",
          borderStyle: "dotted",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
          }}
        >
          <div
            style={{
              flex: "4",
              background: theme ? "#fff" : "#5A5A5A",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              borderStyle: "dotted",
            }}
          >
            <Input
              arr1={arr1}
              setArr1={setArr1}
              arr2={arr2}
              setArr2={setArr2}
              signal={signal}
              setSignal={setSignal}
            />
          </div>
          <div
            style={{
              flex: "4",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              background: theme ? "#fff" : "#5A5A5A",
              borderStyle: "dotted",
            }}
          >
            <Input2
              arr1={arr1}
              setArr1={setArr1}
              arr2={arr2}
              setArr2={setArr2}
              signal={signal}
              setSignal={setSignal}
            />
          </div>
          <div
            style={{
              flex: "4",
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column-reverse",
              alignItems: "center",
              background: theme ? "#fff" : "#5A5A5A",
              borderStyle: "dotted",
            }}
          >
            <div styles={{ display: "flex" }}>
              <Button
                variant="contained"
                style={{ width: "100px", marginBottom: "50px", rowGap: "10px" }}
                onClick={() => {
                  setState((prev) => !prev);
                }}
              >
                Compare
              </Button>
              <Button
                variant="contained"
                style={{
                  width: "100px",
                  marginBottom: "50px",
                  marginLeft: "20px",
                }}
                onClick={() => {
                  navigate("/pages", { state: { data } });
                }}
              >
                check
              </Button>
              <Button
                variant="contained"
                style={{
                  width: "100px",
                  marginBottom: "50px",
                  marginLeft: "20px",
                }}
                onClick={() => {
                  setTheme((prev) => !prev);
                }}
              >
                Theme
              </Button>
            </div>

            <div style={{ height: "100%", width: "100%" }}>
              {state ? (
                <Compare
                  arr1={arr1}
                  arr2={arr2}
                  arr4={arr4}
                  setState={setState}
                  setArr4={setArr4}
                  setValue={setValue}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* {console.log(arr1, arr2)}
      {console.log(arr4)}
      {console.log(value)} */}
      <div
        style={{
          flex: "1",
          background: theme ? "#fff" : "#5A5A5A",
          borderStyle: "dotted",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div styles={{ flex: 1 }}>
            {arr4.length > 0 && state ? (
              <h1 styles={{ fontSize: "5rem" }}>MATCH FOUND.....!</h1>
            ) : (
              <></>
            )}
          </div>
          <div styles={{ flex: 1 }}>
            {value < arr4.length && arr4.length && state > 0 ? (
              <h2>item added</h2>
            ) : arr4.length > 0 && value > arr4.length ? (
              <h2>item removed</h2>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
