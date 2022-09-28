import * as React from "react";
import Stack from "@mui/material/Stack";
import "./howToJoin.scss";
import signup from "../../images/signup.png";
import idea from "../../images/Idea.png";
import chat from "../../images/chat.png";
import meet from "../../images/meet.png";

import { Container } from "@mui/material";
import JoinCard from "./JoinCard";
import Header from "../Header";

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
        id={card.id}
        image={card.image}
        alt={card.alt}
        title={card.title}
        description={card.description}
      />
    );
  });

  return (
    <>
      <Container className="card-animation">
        <Header id="how-to-join-title" title="How to use JoinUs!" />
        <Stack direction="row" spacing={2}>
          {joinInstructions}
        </Stack>
      </Container>
    </>
  );
}
