import { useContext } from "react";
import { Play, Pause, Square } from "@geist-ui/react-icons";
import { LineSkeleton } from "@/components/Skeleton";
import { PlayerContext } from "@/lib/context/player";
import { Container, Controls, Title, Button } from "./style";

export const Player = () => {
  const {
    station,
    play,
    pause,
    stop,
    error,
    paused,
    playing,
    stopped,
    loading,
  } = useContext(PlayerContext);

  // if (!station) return null;

  const showPlay = playing && !error;
  const showPause = paused && !error;
  const showStation = playing && !error;

  return (
    <Container>
      {error && <Title>Error</Title>}
      {loading && <LineSkeleton />}
      {showStation && <Title>{station.name}</Title>}
      <Controls>
        {showPlay && (
          <Button onClick={() => pause()}>
            <Pause />
          </Button>
        )}
        {showPause && (
          <Button onClick={() => play(station)}>
            <Play />
          </Button>
        )}

        <Button onClick={() => stop()}>
          <Square />
        </Button>
      </Controls>
    </Container>
  );
};
