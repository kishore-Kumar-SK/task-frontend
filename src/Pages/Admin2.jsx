import { Dialog, DialogContent, Grid } from "@mui/material";
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
  const [ability1, setAbility1] = useState([]);
  const [ability2, setAbility2] = useState([]);
  const [ind, setInd] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClickOpen = (item, index) => {
    setInd(index);
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    listgen();
  }, []);
  useEffect(() => {
    if (poki.length > 0) {
      const promises = poki.slice(0, 20).map((value) => {
        return Pokicall.pokemonDetails(value.url);
      });

      const promAwait = async () => {
        await Promise.all(promises)
          .then((res) => {
            setDetails(res);
          })
          .catch((error) => {
            console.error("Error: ", error);
          });
      };
      promAwait();
    }
  }, [poki]);

  useEffect(() => {
    const promises1 = details.map((value) => {
      return Pokicall.pokemonDetails(value?.data?.abilities[0]?.ability?.url);
    });
    const promises2 = details.map((value) => {
      return Pokicall.pokemonDetails(value?.data?.abilities[1]?.ability?.url);
    });
    const abilityAwait = async () => {
      await Promise.all([promises1, promises2])
        .then((res) => {
          setAbility1(res[0]);
          setAbility2(res[1]);
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    };
    abilityAwait();
  }, [details]);

  console.log("order", ability1);
  function orderbyNoasc(order) {
    const sorted = Array.from(order).sort((a, b) =>
      a.data?.base_experience > b.data?.base_experience ? 1 : -1
    );
    setDetails(sorted);
  }
  function orderbyNodes(order) {
    const sorted = Array.from(order).sort((a, b) =>
      a.data?.base_experience < b.data?.base_experience ? 1 : -1
    );
    setDetails(sorted);
  }

  function orderbyNameasc(order) {
    const sorted = Array.from(order).sort((a, b) =>
      a.data?.forms[0]?.name > b.data?.forms[0]?.name ? 1 : -1
    );
    setDetails(sorted);
  }
  function orderbyNamedes(order) {
    const sorted = Array.from(order).sort((a, b) =>
      a.data?.forms[0]?.name < b.data?.forms[0]?.name ? 1 : -1
    );
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
                <CardActionArea onClick={() => handleClickOpen(item, index)}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item?.data?.sprites?.other?.home?.front_default}
                    alt="img1"
                  />
                  <CardContent align="left">
                    <Stack>
                      <Typography gutterBottom variant="h5" component="div">
                        Level:{item?.data?.base_experience}
                      </Typography>
                      <Typography gutterBottom variant="h3" component="div">
                        {item?.data?.forms[0]?.name}
                      </Typography>
                    </Stack>
                  </CardContent>
                </CardActionArea>
                <Dialog open={open} onClose={handleClose}>
                  <DialogContent
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <div align="center">
                      <Typography variant="h2">
                        {selectedItem?.data?.forms[0]?.name}
                      </Typography>
                      <img
                        src={
                          selectedItem?.data?.sprites?.other?.home
                            ?.front_default
                        }
                        alt="ability"
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography variant="h4">
                          {selectedItem?.data?.abilities[0]?.ability?.name}
                        </Typography>
                        {/* <Typography variant="h2">
                          {
                            ability1[ind]?.data
                              ?.effect_entries[1]?.effect
                          }
                        </Typography> */}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Typography variant="h4">
                          {selectedItem?.data?.abilities[1]?.ability?.name}
                        </Typography>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </Card>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Admin1;
