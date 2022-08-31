import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Unstable_Grid2";
import ProfilePic from "../assets/me.jpg";
import PropertyText from "./TextTypes/PropertyText";
import ValueText from "./TextTypes/ValueText";

const Header = () => {
  return (
    <Card>
      <Grid container>
        <Grid xs={5} md={4} sx={{ alignSelf: "center" }} >
          <CardHeader
            avatar={
              <Avatar
                alt="Profile picture"
                src={ProfilePic}
                sx={{ width: 100, height: 100 }}
              />
            }
            title="Csaba Bartfai"
            subheader="Frontend Software Engineer"
          />
        </Grid>
        <Grid xs={3} md={2}>
          <CardContent>
            <PropertyText>Race:</PropertyText>
            <PropertyText>Class:</PropertyText>
            <PropertyText>Level:</PropertyText>
            <PropertyText>Background:</PropertyText>
            <PropertyText>Religion:</PropertyText>
          </CardContent>
        </Grid>
        <Grid xs={4} md={6}>
          <CardContent>
            <ValueText>Human</ValueText>
            <ValueText>Code Mage</ValueText>
            <ValueText>31</ValueText>
            <ValueText>Scientist</ValueText>
            <ValueText>Clean Code Fanatic</ValueText>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Header;
