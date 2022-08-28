import Typography from "@mui/material/Typography";

const PropertyText = ({ children }) => (
  <Typography align="right" gutterBottom variant="body2" component="div" sx={{ fontWeight: "700" }}>
    {children}
  </Typography>
);

export default PropertyText;
