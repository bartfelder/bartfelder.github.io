import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const Traits = () => {
  const traits = useSelector((state) => state.traits);

  return (
    <Card sx={{ marginBottom: '1rem'}}>
      <CardHeader sx={{ paddingBottom: 0 }} title="Traits" />
      <CardContent>
        {traits.map((trait) => (
          <div key={trait.id}>
            <Divider />
            <Typography variant="body1" sx={{ fontWeight: 700 }}>
              {trait.title.toUpperCase()}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontStyle: "italic" }}
              gutterBottom
            >
              {trait.description}
            </Typography>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Traits;
