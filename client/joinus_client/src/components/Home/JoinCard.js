import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function JoinCard(props) {
  const { title, image, alt, description } = props;
  return (
    <Card
      style={{
        border: "none",
        boxShadow: "none",
        backgroundColor: "transparent",
      }}
      sx={{ maxWidth: 300 }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={alt}
        style={{ height: 200, width: 200 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
