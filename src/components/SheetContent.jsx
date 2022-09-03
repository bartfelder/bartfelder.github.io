import Adventures from "./Adventures";
import Skills from "./Skills";
import Spells from "./Spells";
import Traits from "./Traits";
import Grid from "@mui/material/Unstable_Grid2";

const SheetContent = () => (
  <Grid container spacing={1}>
    <Grid xs={6} md={3}>
      <Traits />
      <Skills />
    </Grid>
    <Grid xs={6} md={2}>
      <Spells />
    </Grid>
    <Grid xs={12} md={7}>
      <Adventures />
    </Grid>
  </Grid>
);

export default SheetContent;
