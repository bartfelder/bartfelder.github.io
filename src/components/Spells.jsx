import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const Spells = () => {
  const spells = useSelector((state) => state.spells);

  return (
    <Card sx={{ height: "100%" }}>
      <CardHeader title="Spells" sx={{ paddingBottom: 0 }} />
      <CardContent>
        {spells.map((spell) => (
          <div key={spell.id}>
            <Divider sx={{ marginBottom: 1 }} />
            {spell.icon}
            <Typography variant="body2" sx={{ fontWeight: 700 , paddingBottom: 1}}>
              {spell.title}
            </Typography>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Spells;
