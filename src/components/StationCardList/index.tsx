import { FC } from "react";
import { graphql } from "@gqless/react";
import { query, Station, StationSearchInput } from "@/lib/graphql/gqless";
import { NoSSR } from "@/components/NoSSR";
import { Card } from "@/components/Card";
import { AutoGrid } from "@/components/AutoGrid";
import { CardSkeleton } from "@/components/Skeleton";
import { usePlayer } from "@/lib/hooks/usePlayer";
import { useFavorites } from "@/lib/hooks/useFavorites";

const Placeholder = () => (
  <AutoGrid gridGap={[20]}>
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
  </AutoGrid>
);

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

const withLoader = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => (props) => (
  <NoSSR fallback={<Placeholder />}>
    <Component {...(props as P)} />
  </NoSSR>
);

export const StationCardList: FC<StationSearchInput> = withLoader(
  graphql(({ ...search }) => (
    <CardList
      list={query.stations({ search }).map((s) => ({
        ...s,
        url: s.url,
        name: s.name,
        country: s.country,
        stationuuid: s.stationuuid,
      }))}
    />
  ))
);

export const StationCardFavs: FC<{ uuids: string[] }> = withLoader(
  graphql(({ children: _, ...props }) => (
    <CardList
      list={query.stationsByUUID(props).map((s) => ({
        ...s,
        url: s.url,
        name: s.name,
        country: s.country,
        stationuuid: s.stationuuid,
      }))}
    />
  ))
);
