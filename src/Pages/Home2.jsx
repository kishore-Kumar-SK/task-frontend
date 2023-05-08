import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addValue } from "../Redux/Features/inputSlice";
import { Button, TextField } from "@mui/material";
import { CheckBox } from "@mui/icons-material";

const Home2 = () => {
  const data = useSelector((state) => state.input.data);
  const [holding1, setHolding1] = useState("");
  const [holding2, setHolding2] = useState("");
  const [oriData, setOridata] = useState({});

  const dispatch = useDispatch();
  useEffect(() => {
    setOridata({
      message: holding1,
      type: 1,
      check: false,
    });
  }, [holding1]);
  useEffect(() => {
    setOridata({
      message: holding2,
      type: 2,
      check: false,
    });
  }, [holding2]);
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
          <TextField
            style={{ width: "100%", flex: "1" }}
            id="list"
            value={holding1}
            onChange={(e) => setHolding1(e.target.value)}
          />
          <Button
            style={{ color: "#fff", marginLeft: "8px", flex: "1" }}
            variant="contained"
            onClick={() => {
              dispatch(addValue({ message: oriData }));
              setHolding1("");
            }}
          >
            <h2>+</h2>
          </Button>
        </div>
        <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
          <TextField
            style={{ width: "100%", flex: "1" }}
            id="list"
            value={holding2}
            onChange={(e) => setHolding2(e.target.value)}
          />
          <Button
            style={{ color: "#fff", marginLeft: "8px", flex: "1" }}
            variant="contained"
            onClick={() => {
              dispatch(addValue({ message: oriData }));
              setHolding2("");
            }}
          >
            <h2>+</h2>
          </Button>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flex: 1 }}>
          <ul>
            {data.map((item, index) =>
              item.type === 1 ? (
                <li
                  key={index}
                  style={{ listStyleType: "none", fontSize: "1.3rem" }}
                >
                  <input
                    type="checkbox"
                    class="checkbox-round"
                    style={{ borderStyle: "outline" }}
                  />{" "}
                  {item.message}{" "}
                </li>
              ) : (
                <></>
              )
            )}
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <ul>
            {data.map((item, index) =>
              item.type === 2 ? (
                <li
                  key={index}
                  style={{ listStyleType: "none", fontSize: "1.3rem" }}
                >
                  {" "}
                  {item.message}{" "}
                </li>
              ) : (
                <></>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home2;
