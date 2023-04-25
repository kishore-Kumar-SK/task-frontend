import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LoginIcon from "@mui/icons-material/Login";
import Image1 from "../Assets/Login1.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const theme = createTheme();

export default function SignInSide() {
  const navigate = useNavigate();
  const loginValues = { Username: "", password: "" };
  const [formValues, setformValue] = useState(loginValues);
  const [formErrors, setformErrors] = useState({});
  const [flag, setFlag] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValue({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));
    setFlag(true);
    const username = formValues.Username;
    const password = formValues.password;
    const storedData = {
      admin1: { password: "password1" },
      admin2: { password: "password2" },
    };

    if (
      username in storedData &&
      storedData[username].password === password &&
      flag
    ) {
      if (password === "password1") {
        navigate("/home");
        setFlag(false);
      } else if (password === "password2") {
        navigate("/admin2");
        setFlag(false);
      }
    } else {
      setformErrors({ Username: "Invalid credentials" });
    }
  };

  // useEffect(() => {
  //   window.addEventListener("popstate", (e) => {
  //     window.history.go(1);
  //   });
  // }, []);

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.Username) {
      errors.Username = "Username is required !";
    }
    if (!values.password) {
      errors.password = "password is required !";
    }
    return errors;
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid item xs={12} sm={4} md={7}>
            <div
              style={{
                height: "100%",
                padding: "20px",
                backgroundImage: `url(${Image1})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(0,0,0,0)",
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "40px",
                  paddingTop: "158px",
                }}
              >
                <Typography component="h1" variant="h2" color="white">
                  New Street <span style={{ color: "#d5261a" }}>Tech</span>
                </Typography>
                <Typography
                  component="h1"
                  variant="h7"
                  color="white"
                  sx={{ fontWeight: "normal", fontSize: "1.5rem" }}
                >
                  Your Fast Track To Future
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar sx={{ m: 1, backgroundColor: "#32aca0" }}>
                <LoginIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{
                  mt: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "400px",
                }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="Username"
                  label="Username"
                  onChange={handleChange}
                  value={formValues.Username}
                  name="Username"
                  autoComplete="Username"
                  autoFocus
                />
                <Typography sx={{ color: "red" }}>
                  {formErrors.Username}
                </Typography>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  onChange={handleChange}
                  value={formValues.password}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Typography sx={{ color: "red" }}>
                  {formErrors.password}
                </Typography>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "#32aca0",
                  }}
                >
                  Sign In
                </Button>
              </Box>
              <Typography>
                NewStreet <span style={{ color: "#d5261a" }}>Tech</span>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
