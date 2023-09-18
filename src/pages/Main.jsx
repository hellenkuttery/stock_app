import * as React from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";
import SideBar from "./../components/SideBar";
import Navbar from "../components/Navbar";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  border: "1px solid",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  padding: theme.spacing(1),
  borderRadius: "4px",
  textAlign: "center",
}));

export default function Main() {
  return (
    <Box>
      <Grid container>
        <Grid xs={3} md={3}>
          <SideBar />
        </Grid>
        <Grid xs={9} md={9}>
          <Navbar />
        </Grid>
      </Grid>
    </Box>
  );
}
