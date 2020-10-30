import { FC } from "react";
import { PlayCircle, Heart, HeartFill } from "@geist-ui/react-icons";
import { Container, Cover, Button, Title, Subtitle, Body } from "./style";

export const HeartToggle: FC<{ active: boolean }> = ({ active }) => {
  if (active) {
    return <HeartFill color="var(--highlight-magenta)" />;
  }

  return <Heart color="var(--accents-3)" />;
};

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
      {!isFaved && (
        <Button onClick={onFaved}>
          <HeartToggle active={false} />
        </Button>
      )}
      {isFaved && (
        <Button onClick={onUnFaved}>
          <HeartToggle active={true} />
        </Button>
      )}
    </Body>
  </Container>
);
