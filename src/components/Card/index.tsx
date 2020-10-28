import { FC } from "react";
import { PlayCircle } from "@geist-ui/react-icons";
import { Container, Cover, Button, Title, Subtitle, Body } from "./style";

const DEFAULT_SUBTITLE = "Global";

export type Card = {
  hash: string;
  title: string;
  subtitle: string;
  onClick: (ev: React.MouseEvent) => void;
};

export const Card: FC<Card> = ({ hash, title, subtitle, onClick }) => (
  <Container>
    <Cover hash={hash || Date.now().toString()}>
      <Button onClick={onClick}>
        <PlayCircle size={64} />
      </Button>
    </Cover>
    <Body>
      <Title>{title}</Title>
      <Subtitle>{subtitle || DEFAULT_SUBTITLE}</Subtitle>
    </Body>
  </Container>
);
