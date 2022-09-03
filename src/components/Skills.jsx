import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const Skills = () => {
  const skills = useSelector((state) => state.skills);

  return (
    <Card sx={{ height: "calc(50% - 1rem)" }} elevation={4} >
      <CardHeader sx={{ pb: 0 }} title="Skills" />
      <CardContent>
        {skills.map((skill) => (
          <div key={skill.id}>
            <Divider />
            <Typography variant="body1" sx={{ fontWeight: 700 }}>
              {skill.title.toUpperCase()}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontStyle: "italic" }}
              gutterBottom
            >
              {skill.description}
            </Typography>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Skills;
