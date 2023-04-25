import React, { useEffect, useState } from "react";
import Input1 from "../Components/Input1";
import Input2 from "../Components/Input2";
import Compare from "../Components/Compare";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";

function Home() {
  const [arr1, setArr1] = useState([]);
  const [arr2, setArr2] = useState([]);
  const [arr4, setArr4] = useState([]);
  const [signal, setSignal] = useState({ sigType: 0, message: "" });
  const [state, setState] = useState(false);
  const [value, setValue] = useState(0);
  const [theme, setTheme] = useState(true);

  const navigate = useNavigate();

  const data = {
    arr1: arr1,
    arr2: arr2,
    arr4: arr4,
    value: value,
    state: state,
  };

  return (
    <UserContext.Provider
      value={{
        arr1,
        arr2,
        setArr1,
        setArr2,
        signal,
        setSignal,
        arr4,
        state,
        value,
        setArr4,
        setState,
        setValue,
      }}
    >
      <div
        style={{
          display: "flex",
          backgroundColor: theme ? "#fff" : "#5A5A5A",
          flexDirection: "column",
          height: "100vh",
          width: "100%",
          overflow: "auto",
        }}
      >
        <Grid container spacing={0.5} sx={{ border: 1 }}>
          <Grid container item xs={12} sx={{ border: 1 }}>
            <Grid item xs={12} sm={6} md={4} sx={{ border: 1 }}>
              <Input1 />
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ border: 1 }}>
              <Input2 />
            </Grid>
            <Grid
              container
              xs={12}
              sm={12}
              md={4}
              direction="column-reverse"
              alignItems="center"
              sx={{ border: 1 }}
            >
              <Grid container justifyContent="center">
                <Grid item>
                  <Button
                    variant="contained"
                    style={{
                      width: "100px",
                      marginBottom: "50px",
                      marginLeft: "20px",
                    }}
                    onClick={() => {
                      setState((prev) => !prev);
                    }}
                  >
                    Compare
                  </Button>
                </Grid>
                <Grid item>
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
                </Grid>
                <Grid item>
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
                </Grid>
              </Grid>
              <Grid item>{state ? <Compare /> : <></>}</Grid>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
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
          </Grid>
        </Grid>
      </div>
    </UserContext.Provider>
  );
}
export default Home;
