import React, { useState } from "react";
import Input from "./Textfield1";
import Input2 from "./Textfield2";
import Compare from "./Compare";
import Animation from "./Animation";
import { Button } from "@mui/material";

function App() {
  const [arr1, setArr1] = useState([]);
  const [arr2, setArr2] = useState([]);
  const [arr4, setArr4] = useState([]);
  const [signal, setSignal] = useState({ sigType: 0, message: "" });
  const [state, setState] = useState(false);
  const [state2, setState2] = useState(true);
  const [value, setValue] = useState(0);

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
      <div style={{ flex: "1", background: "#fff", borderStyle: "dotted" }}>
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
              background: "#fff",
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
              background: "#fff",
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
              background: "#fff",
              borderStyle: "dotted",
            }}
          >
            <Button
              variant="contained"
              style={{ width: "100px", marginBottom: "50px" }}
              onClick={() => {
                setState((prev) => !prev);
              }}
            >
              Compare
            </Button>
            <div style={{ height: "100%", width: "100%" }}>
              {state ? (
                <Compare
                  arr1={arr1}
                  arr2={arr2}
                  arr4={arr4}
                  setState={setState}
                  setArr4={setArr4}
                  setValue={setValue}
                  setState2={setState2}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
      {console.log(arr1, arr2)}
      {console.log(arr4)}
      {console.log(value)}
      <div style={{ flex: "1", background: "white", borderStyle: "dotted" }}>
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
export default App;
