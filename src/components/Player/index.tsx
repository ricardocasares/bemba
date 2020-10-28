import { useContext } from "react";
import { Play, Pause, Square } from "@geist-ui/react-icons";
import { PlayerContext } from "@/lib/context/player";
import { Container, Controls, Title, Button } from "./style";

export const Player = () => {
  const { station, play, pause, stop, paused, playing } = useContext(
    PlayerContext
  );

  if (!station) return null;

  return (
    <Container>
      <Title>{station.name}</Title>
      <Controls>
        {playing && (
          <Button onClick={() => pause()}>
            <Pause />
          </Button>
        )}
        {paused && (
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
