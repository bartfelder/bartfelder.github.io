import Typography from "@mui/material/Typography";

const ValueText = ({ children }) => (
  <Typography align="left" gutterBottom variant="body2" component="div">
    {children}
  </Typography>
);

export default ValueText;