import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Header from "./components/Header";
import SheetContent from "./components/SheetContent";

function App() {
  return (
    <Container maxWidth="xl">
      <Grid container gap={1}>
        <Grid xs={12}>
          <Header />
        </Grid>
        <Grid xs={12}>
          <SheetContent />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
