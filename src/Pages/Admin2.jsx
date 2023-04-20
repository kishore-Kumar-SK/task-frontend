import { Grid } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Button from "@mui/material/Button";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Img1 from "../Assets/img1.jpg";
import Img2 from "../Assets/img2.jpg";
import Img3 from "../Assets/img3.jpg";
import Img4 from "../Assets/img4.jpg";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState from "material-ui-popup-state";
import { bindTrigger } from "material-ui-popup-state";
import { bindMenu } from "material-ui-popup-state";

const Admin1 = () => {
  const [snum, setSnum] = useState([
    { sno: 1, name: "dog", img: Img1 },
    { sno: 2, name: "apple", img: Img2 },
    { sno: 3, name: "cat", img: Img3 },
    { sno: 9, name: "ball", img: Img4 },
    { sno: 5, name: "egg", img: Img1 },
    { sno: 6, name: "fan", img: Img2 },
    { sno: 7, name: "game", img: Img3 },
    { sno: 8, name: "hen", img: Img4 },
    { sno: 4, name: "item9", img: Img3 },
    { sno: 10, name: "jack", img: Img2 },
    { sno: 11, name: "kishore", img: Img1 },
  ]);
  const order = JSON.parse(JSON.stringify(snum));

  function orderbyNoasc(order) {
    setSnum(order.sort((a, b) => (a.sno > b.sno ? 1 : -1)));
  }
  function orderbyNodes(order) {
    setSnum(order.sort((a, b) => (a.sno < b.sno ? 1 : -1)));
  }

  function orderbyNameasc(order) {
    setSnum(order.sort((a, b) => (a.name > b.name ? 1 : -1)));
  }
  function orderbyNamedes(order) {
    setSnum(order.sort((a, b) => (a.name < b.name ? 1 : -1)));
  }
  return (
    <div style={{ overflowY: "auto", height: "100vh" }}>
      <Box sx={{ display: "flex", justifyContent: "center", padding: "30px" }}>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <Button variant="contained" {...bindTrigger(popupState)}>
                S.NO
              </Button>
              <Menu {...bindMenu(popupState)}>
                <MenuItem
                  onClick={() => {
                    orderbyNoasc(order);
                    popupState.close();
                  }}
                >
                  Ascending
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    orderbyNodes(order);
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
                    orderbyNameasc(order);
                    popupState.close();
                  }}
                >
                  Ascending
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    orderbyNamedes(order);
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
        {snum.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} minHeight="25%">
            <div align="center">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.img}
                    alt="img1"
                  />
                  <CardContent align="left">
                    <Stack>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.sno}.
                      </Typography>
                      <Typography gutterBottom variant="h3" component="div">
                        {item.name}
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
