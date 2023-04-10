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
            <Input arr1={arr1} setArr1={setArr1} />
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
            <Input2 arr2={arr2} setArr2={setArr2} />
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
                setFlag((prev) => !prev);
              }}
            >
              Compare
            </Button>
            <div style={{ height: "100%", width: "100%" }}>
              <Compare arr1={arr1} arr2={arr2} />

              {/* {flag ? (
                <Compare arr1={flag ? arr1 : []} arr2={flag ? arr2 : []} />
              ) : (
                <></>
              )} */}
            </div>
          </div>
        </div>
      </div>
      <div style={{ flex: "1", background: "white", borderStyle: "dotted" }}>
        <div style={{ height: "100%", width: "100%" }}>
          <Animation state={flag} setState={setState} />
        </div>
      </div>
    </div>
  );
}
export default App;
