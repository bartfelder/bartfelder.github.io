import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import LogoPic from "../assets/logo.png";

const Logo = () => (
  <Card sx={{ maxWidth: 200}}>
    <CardMedia
      component="img"
      alt="Employers & Employees"
      image={LogoPic}
    />
  </Card>
);

export default Logo;
