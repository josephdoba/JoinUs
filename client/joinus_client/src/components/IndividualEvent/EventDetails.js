import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";

export default function EventDetails(props) {
  // const Card = styled("Card")(({ theme }) => ({
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   margin: 2,
  // }));
  const { description, image, name } = props;
  return (
    <Box flex={"50%"}>
      <Card
        sx={{
          maxWidth: "75%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: 2,
        }}
      >
        <CardHeader style={{ textAlign: "center" }} />
        <Box
          component="img"
          sx={{
            height: 333,
            width: 450,
            maxHeight: { xs: 233, md: "100%" },
            maxWidth: { xs: 350, md: "100%" },
          }}
          alt={name}
          src={image}
        />
        <CardContent>
          <Typography variant="h6" m={2}>
            Details
          </Typography>

          <Typography variant="body2" color="text.secondary" m={3}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
