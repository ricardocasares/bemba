import { Play, Pause, Square, AlertCircle } from "@geist-ui/react-icons";
import { LineSkeleton } from "@/components/Skeleton";
import { Container, Controls, Title, ErrorNotification, Button } from "./style";
import { usePlayer } from "@/lib/hooks/usePlayer";
import { useTranslation } from "@/lib/hooks/useTranslation";

export const Player = () => {
  const { t } = useTranslation();
  const { station, play, pause, stop, error, playing, loading } = usePlayer();

  const closeNotification = () => stop();

  if (!station) return null;

  if (error) {
    return (
      <ErrorNotification onAnimationEnd={closeNotification}>
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
          <Button onClick={() => pause()} aria-label={`Pause ${station.name}`}>
            <Pause />
          </Button>
        )}
        {!playing && (
          <Button onClick={async () => await play()} aria-label={`Play ${station.name}`}>
            <Play />
          </Button>
        )}

        <Button onClick={() => stop()} aria-label={`Stop playing ${station.name}`}>
          <Square />
        </Button>
      </Controls>
    </Container>
  );
};
