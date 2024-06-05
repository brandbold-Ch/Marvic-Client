
import { Box } from '@mui/material';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./assets/styles/Navbar.css";

const App = () => {
  return (
    <>
          <Box component="main" sx={{ p: 1}}>
            <Navbar/>
            <Main/>
          </Box>

        
    </>
  );
};

export default App;

