import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Route,Routes } from "react-router-dom";
import Createpage from "./Pages/Createpage.jsx";
import Homepage from "./Pages/Homepages.jsx";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/ui/Navbar.jsx";
function App() {
  

  return (
    <Box minH={"100vh"} bg={useColorModeValue("grey.300","gery.900")}>  
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Createpage />} />
      </Routes>
    </Box>
  );
}

export default App;
