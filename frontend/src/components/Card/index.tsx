import { FC, memo } from "react";
import PlayCircle from "@geist-ui/react-icons/playCircle";
import { Box } from "@/components/Box";
import { HeartToggle } from "@/components/Toggles";
import { Cover, Button, Title, Subtitle, Body } from "./style";
import { truncate } from "@/css/utils";

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
    <Box data-test-card={hash}>
      <Cover hash={hash}>
        <Button onClick={onPlay} aria-label={`Play ${title}`}>
          <PlayCircle size={64} />
        </Button>
      </Cover>
      <Body>
        <div style={{ display: "grid", gridGap: '5px' }}>
          <Title className={truncate.className}>{title}</Title>
          <Subtitle className={truncate.className}>{subtitle || DEFAULT_SUBTITLE}</Subtitle>
        </div>
        <Button
          aria-label={`Add ${title} to favorites`}
          onClick={!isFaved ? onFaved : onUnFaved}
          data-test-card-fave-button={hash}
        >
          <HeartToggle active={isFaved} />
        </Button>
      </Body>
    </Box>
  )
);
