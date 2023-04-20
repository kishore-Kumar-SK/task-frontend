import { Grid } from "@mui/material";
import { Box } from "@mui/system";
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

const Admin1 = () => {
  const snum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <div style={{ overflowY: "auto", height: "100vh" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
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
          {" "}
          id{" "}
        </Button>
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
          {" "}
          name{" "}
        </Button>
      </Box>
      <Grid container>
        {snum.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} minHeight="25%">
            <div align="center">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={Img1}
                    alt="img1"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item}
                    </Typography>
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
