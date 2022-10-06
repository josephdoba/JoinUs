import * as React from "react";
import Stack from "@mui/material/Stack";
import "./howToJoin.scss";
import signup from "../../images/signup.png";
import idea from "../../images/Idea.png";
import chat from "../../images/chat.png";
import meet from "../../images/meet.png";

import { Container, Typography } from "@mui/material";
import JoinCard from "./JoinCard";

const instructions = [
  {
    id: 1,
    image: signup,
    alt: "how to join",
    title: "Join Us!",
    description: "Create an account and see what others around are doing!",
  },
  {
    id: 2,
    image: idea,
    alt: "create",
    title: "Create",
    description:
      "Think of something fun to do and make an event or join someone in theirs",
  },
  {
    id: 3,
    image: chat,
    alt: "Chat",
    title: "Chat",
    description:
      "Chat with others to make sure you get along and confirm your plans.",
  },
  {
    id: 4,
    image: meet,
    alt: "Meet",
    title: "Meet",
    description: "Head out and do something new with a new friend.",
  },
];

export default function HowToJoin(props) {
  const joinInstructions = instructions.map((card) => {
    return (
      <JoinCard
        key={card.id}
        image={card.image}
        alt={card.alt}
        title={card.title}
        description={card.description}
      />
    );
  });

  return (
    <Container>
      <Typography
        component="div"
        variant="h3"
        gutterBottom
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 1,
          m: 1,
          bgcolor: "inherit",
          borderRadius: 1,
        }}
      >
        How To Join US!
      </Typography>
      <Stack direction="row" spacing={2}>
        {joinInstructions}
      </Stack>
    </Container>
  );
}
