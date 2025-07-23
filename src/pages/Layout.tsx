import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Box paddingX={5} marginTop={{base: '80px', md: '100px'}}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
