import { FC } from "react";
import { PlayCircle } from "@geist-ui/react-icons";
import { Container, Cover, Button, Title, Subtitle, Body } from "./style";

const DEFAULT_SUBTITLE = "Global";

export type Card = {
  image: string;
  title: string;
  subtitle: string;
  onClick: (ev: React.MouseEvent) => void;
};

export const Card: FC<Card> = ({ image, title, subtitle, onClick }) => (
  <Container>
    <Cover hash={[image, title, subtitle].join("-")}>
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
