import { Play, Pause, Square, AlertCircle } from "@geist-ui/react-icons";
import { LineSkeleton } from "@/components/Skeleton";
import { Container, Controls, Title, ErrorNotification, Button } from "./style";
import { usePlayer } from "@/lib/hooks/usePlayer";
import { useTranslation } from "@/lib/hooks/useTranslation";

export const Player = () => {
  const { t } = useTranslation();
  const { station, play, pause, stop, error, playing, loading } = usePlayer();

  if (!station) return null;

  if (error) {
    return (
      <ErrorNotification>
        <AlertCircle /> <p>{t.player.error}</p>
      </ErrorNotification>
    );
  }

  return (
    <Container>
      {loading && <LineSkeleton />}
      {!loading && <Title>{station.name}</Title>}
      <Controls>
        {playing && (
          <Button onClick={() => pause()}>
            <Pause />
          </Button>
        )}
        {!playing && (
          <Button onClick={() => play()}>
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
