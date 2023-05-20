import { Outlet } from "react-router-dom";
import { Grid, GridItem, Center, Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../App.css";

export default function RootLayout() {
  return (
    <Grid
      className="layout"
      templateColumns="repeat(6,1fr)"
      templateRows="100vh"
      gap="0"
    >
      <GridItem className="sidebar" colSpan={{ base: 2, xl: 1 }}>
        <Sidebar />
      </GridItem>

      <GridItem as={Box} colSpan={{ base: 4, xl: 6 }} pl="300px">
        <Navbar />
        <Box pt="50px">
          <Outlet />
        </Box>
      </GridItem>
    </Grid>
  );
}
