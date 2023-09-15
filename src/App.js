import Login from "../src/pages/Login";
import { ThemeProvider, createTheme } from "@mui/material";
import { purple } from '@mui/material/colors';

function App() {
const theme=createTheme({
  palette:{
    primary:{
      main:purple[500]
    },
    secondary:{
      main:"#7367F0"
    }
  }
})


  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}

export default App;
