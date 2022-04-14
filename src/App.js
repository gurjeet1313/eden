import Home from "./pages/home";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import GlobalStyle from "./theme/globalStyles";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
