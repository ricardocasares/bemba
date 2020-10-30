import { FC } from "react";
import { PlayCircle } from "@geist-ui/react-icons";
import { HeartToggle } from "@/components/Toggles";
import { Container, Cover, Button, Title, Subtitle, Body } from "./style";

const DEFAULT_SUBTITLE = "Global";

export type Card = {
  hash: string;
  title: string;
  subtitle: string;
  isFaved: boolean;
  onPlay: (ev: React.MouseEvent) => void;
  onFaved: (ev: React.MouseEvent) => void;
  onUnFaved: (ev: React.MouseEvent) => void;
};

export const Card: FC<Card> = ({
  hash,
  title,
  subtitle,
  onPlay,
  onFaved,
  onUnFaved,
  isFaved,
}) => (
  <Container>
    <Cover hash={hash || Date.now().toString()}>
      <Button onClick={onPlay}>
        <PlayCircle size={64} />
      </Button>
    </Cover>
    <Body>
      <div style={{ display: "grid" }}>
        <Title>{title}</Title>
        <Subtitle>{subtitle || DEFAULT_SUBTITLE}</Subtitle>
      </div>
      <Button onClick={!isFaved ? onFaved : onUnFaved}>
        <HeartToggle active={isFaved} />
      </Button>
    </Body>
  </Container>
);
