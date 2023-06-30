/** @format */
import { ThemeProvider } from "@mui/material";
// import httpRequest from "./services/apiService/httpRequest";
import themes from "./themes";
import Routing from "./router/Routing";

function App() {
  return (
    <ThemeProvider theme={themes(0)}>
      <Routing />
    </ThemeProvider>
  );
}

export default App;
