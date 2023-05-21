import { Outlet } from "react-router-dom";
import { Grid, GridItem, Box, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../App.css";

export default function RootLayout() {
  const sidebarColSpan = useBreakpointValue({ base: 0, md: 1, xl: 1 });
  const mainColSpan = useBreakpointValue({ base: 6, md: 6, xl: 6 });
  const paddingLeft = useBreakpointValue({
    base: "0",
    md: "260px",
    xl: "300px",
  });

  return (
    <Grid
      className="layout"
      templateColumns="repeat(6, 1fr)"
      templateRows="100vh"
      gap="0"
    >
      <GridItem className="sidebar" colSpan={sidebarColSpan}>
        <Sidebar />
      </GridItem>

      <GridItem as={Box} colSpan={mainColSpan} pl={paddingLeft}>
        <Navbar />
        <Box pt="50px">
          <Outlet />
        </Box>
      </GridItem>
    </Grid>
  );
}
