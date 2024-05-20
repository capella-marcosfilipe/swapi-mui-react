import "./App.css";
import { Container, Grid } from "@mui/material";
import FilmsContainer from "./components/FilmsContainer";

function App() {
  return (
    <div className="app">
      <Container>
        <Grid container spacing={1}>
          <FilmsContainer />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
