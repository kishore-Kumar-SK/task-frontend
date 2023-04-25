import { Grid } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Button from "@mui/material/Button";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState from "material-ui-popup-state";
import { bindTrigger } from "material-ui-popup-state";
import { bindMenu } from "material-ui-popup-state";
import { useEffect } from "react";
import Pokicall from "../Api/PokiApi";

const Admin1 = () => {
  const [poki, setPoki] = useState([]);
  const [details, setDetails] = useState([]);
  const dummy = [];
  useEffect(() => {
    const listgen = () => {
      Pokicall.listgen()
        .then((res) => {
          setPoki(res?.data?.results);
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    };
    const pokemonDetails = (url) => {
      Pokicall.pokemonDetails(url)
        .then((res) => {
          dummy.push({
            level: res?.data?.base_experience,
            name: res?.data?.forms[0]?.name,
            link: res?.data?.sprites?.other?.home?.front_default,
          });
          setDetails(dummy);
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    };
    listgen();
    poki.forEach((value) => {
      if (details.length < 20) {
        pokemonDetails(value.url);
      }
    });
  }, [poki.length]);

  const order = JSON.parse(JSON.stringify(details));
  console.log("order", details);

  function orderbyNoasc(order) {
    const sorted = Array.from(order).sort((a, b) =>
      a.level > b.level ? 1 : -1
    );
    setDetails(sorted);
  }
  function orderbyNodes(order) {
    const sorted = Array.from(order).sort((a, b) =>
      a.level < b.level ? 1 : -1
    );
    setDetails(sorted);
  }

  function orderbyNameasc(order) {
    const sorted = Array.from(order).sort((a, b) => (a.name > b.name ? 1 : -1));
    setDetails(sorted);
  }
  function orderbyNamedes(order) {
    const sorted = Array.from(order).sort((a, b) => (a.name < b.name ? 1 : -1));
    setDetails(sorted);
  }
  return (
    <div style={{ overflowY: "auto", height: "100vh" }}>
      <Box sx={{ display: "flex", justifyContent: "center", padding: "30px" }}>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <Button variant="contained" {...bindTrigger(popupState)}>
                Level
              </Button>
              <Menu {...bindMenu(popupState)}>
                <MenuItem
                  onClick={() => {
                    orderbyNoasc(details);
                    popupState.close();
                  }}
                >
                  Ascending
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    orderbyNodes(details);
                    popupState.close();
                  }}
                >
                  Descending
                </MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <Button
                variant="contained"
                {...bindTrigger(popupState)}
                sx={{ marginLeft: "20px" }}
              >
                NAME
              </Button>
              <Menu {...bindMenu(popupState)}>
                <MenuItem
                  onClick={() => {
                    orderbyNameasc(details);
                    popupState.close();
                  }}
                >
                  Ascending
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    orderbyNamedes(details);
                    popupState.close();
                  }}
                >
                  Descending
                </MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </Box>
      <Grid container spacing={3}>
        {details.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3} minHeight="25%">
            <div align="center">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item?.link}
                    alt="img1"
                  />
                  <CardContent align="left">
                    <Stack>
                      <Typography gutterBottom variant="h5" component="div">
                        Level:{item?.level}
                      </Typography>
                      <Typography gutterBottom variant="h3" component="div">
                        {item?.name}
                      </Typography>
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Admin1;
