import { FC, memo } from "react";
import { PlayCircle } from "@geist-ui/react-icons";
import { HeartToggle } from "@/components/Toggles";
import { Container, Cover, Button, Title, Subtitle, Body } from "./style";

const DEFAULT_SUBTITLE = "Global";

export interface Card {
  hash: string;
  title: string;
  subtitle: string;
  isFaved: boolean;
  onPlay: (ev: React.MouseEvent) => void;
  onFaved: (ev: React.MouseEvent) => void;
  onUnFaved: (ev: React.MouseEvent) => void;
}

export const Card: FC<Card> = memo(
  ({ hash, title, subtitle, onPlay, onFaved, onUnFaved, isFaved }) => (
    <Container data-test-card={hash}>
      <Cover hash={hash}>
        <Button onClick={onPlay} aria-label={`Play ${title}`}>
          <PlayCircle size={64} />
        </Button>
      </Cover>
      <Body>
        <div style={{ display: "grid" }}>
          <Title>{title}</Title>
          <Subtitle>{subtitle || DEFAULT_SUBTITLE}</Subtitle>
        </div>
        <Button
          aria-label={`Add ${title} to favorites`}
          onClick={!isFaved ? onFaved : onUnFaved}
          data-test-card-fave-button={hash}
        >
          <HeartToggle active={isFaved} />
        </Button>
      </Body>
    </Container>
  )
);
