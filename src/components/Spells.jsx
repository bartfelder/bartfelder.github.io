import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";

const Spells = () => {
  const spells = useSelector((state) => state.spells);
  const MAX_STARS = 4;

  return (
    <Card sx={{ height: "100%" }}>
      <CardHeader title="Spells" sx={{ paddingBottom: 0 }} />
      <CardContent>
        {spells.map((spell) => (
          <div key={spell.id}>
            <Divider sx={{ marginBottom: 1 }} />
            {spell.icon}
            <Rating value={spell.level} max={MAX_STARS} readOnly />
            <Typography
              variant="body2"
              sx={{ fontWeight: 700, paddingBottom: 1 }}
            >
              {spell.title}
            </Typography>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Spells;
