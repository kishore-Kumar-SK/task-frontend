import React, { useState } from "react";
import Input from "./Textfield1";
import Input2 from "./Textfield2";
import Compare from "./Compare";
import Animation from "./Animation";
import { Button } from "@mui/material";

function App() {
  const [arr1, setArr1] = useState([]);
  const [arr2, setArr2] = useState([]);
  const [state, setState] = useState(false);
  const [flag, setFlag] = useState(false);
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
      <div style={{ flex: "1", background: "purple" }}>
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
              background: "yellow",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Input arr1={arr1} setArr1={setArr1} />
          </div>
          <div
            style={{
              flex: "4",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              background: "blue",
            }}
          >
            <Input2 arr2={arr2} setArr2={setArr2} />
          </div>
          <div
            style={{
              flex: "4",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              background: "pink",
            }}
          >
            <Button
              onClick={() => {
                setFlag(true);
              }}
            >
              Compare
            </Button>
            {flag ? (
              <Compare
                arr1={arr1}
                arr2={arr2}
                setState={setState}
                setFlag={setFlag}
              />
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
      <div style={{ flex: "1", background: "red" }}>
        <div style={{ height: "100%", width: "100%" }}>
          <Animation state={state} setState={setState} />
        </div>
      </div>
    </div>
  );
}
export default App;
