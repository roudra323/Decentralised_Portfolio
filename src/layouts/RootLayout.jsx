import { Outlet } from "react-router-dom";
import { Grid, GridItem, Center } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../App.css";

export default function RootLayout() {
  return (
    <Grid className="layout" templateColumns="repeat(6,1fr)">
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        minHeight={{ xl: "100vh" }}
        p={{ base: "20px", lg: "30px" }}
        borderRight="1px solid #E2E8F0"
      >
        <Sidebar />
      </GridItem>

      <GridItem
        as="main"
        colSpan={{ base: 6, lg: 4, xl: 5 }}
        p="10px"
        bg="transparent"
      >
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
