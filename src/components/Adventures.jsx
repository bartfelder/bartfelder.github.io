import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const Adventures = () => {
  const adventures = useSelector((state) => state.adventures);

  return (
    <Card sx={{ height: "100%" }} elevation={4}>
      <CardHeader title="Adventures" sx={{ pb: 0 }} />
      <CardContent>
        {adventures.map((adventure) => (
          <div key={adventure.id}>
            <Divider />
            <Typography variant="body1" sx={{ fontWeight: 700 }}>
              {adventure.title.toUpperCase()}
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: 'justify', pb: 1}}
              gutterBottom
            >
              {adventure.description}
            </Typography>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Adventures;
