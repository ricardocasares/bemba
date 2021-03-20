import { FC } from "react";
import { Card } from "@/components/Card";
import { AutoGrid } from "@/components/AutoGrid";
import { Placeholder } from "@/components/Placeholder";
import { usePlayer } from "@/lib/hooks/usePlayer";
import { useFavorites } from '@/lib/hooks/useFavorites';
import { Station, StationSearchInput } from "@/graphql";
import { useStations, useStationsByUUID } from '@/graphql/hooks';

export type CardList = {
  list: Station[];
};

export const CardList: FC<CardList> = ({ list }) => {
  const { load } = usePlayer();
  const { add, remove, isFaved } = useFavorites();

  return (
    <AutoGrid gridGap={["var(--sz4)"]}>
      {list.map((item) => (
        <Card
          key={[item.url, item.stationuuid].join()}
          hash={item.stationuuid}
          title={item.name}
          subtitle={item.country}
          onPlay={() => load(item)}
          onFaved={() => add(item.stationuuid)}
          onUnFaved={() => remove(item.stationuuid)}
          isFaved={isFaved(item.stationuuid)}
        />
      ))}
    </AutoGrid>
  );
};

export const StationCardList: FC<StationSearchInput> = (props) => {
  const { data, error } = useStations(props, { name: true, url: true, country: true, stationuuid: true });

  if (!data) return <Placeholder />;
  if (error) return <p>Error</p>;

  return <CardList list={data.stations} />;
};

export type StationCardFavs = { uuids: string[]; };

export const StationCardFavs: FC<StationCardFavs> = ({ uuids }) => {
  const { data, error } = useStationsByUUID(uuids, { name: true, stationuuid: true });

  if (!data && !error) return <Placeholder />;
  if (error) return <p>Error</p>;

  return <CardList list={data.stationsByUUID} />;
};