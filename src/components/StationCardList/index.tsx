import { FC, useContext } from "react";
import { graphql } from "@gqless/react";
import { query, StationSearchInput } from "@/lib/graphql/gqless";
import { noSSR } from "@/components/NoSSR";
import { Card } from "@/components/Card";
import { AutoGrid } from "@/components/AutoGrid";
import { CardSkeleton } from "@/components/Skeleton";
import { PlayerContext } from "@/lib/context/player";

const Placeholder = () => (
  <AutoGrid gridGap={[20]}>
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
  </AutoGrid>
);

const Loader = noSSR(Placeholder);

export const GQLStations: FC<StationSearchInput> = graphql(
  ({ children: _, ...search }) => {
    const { play } = useContext(PlayerContext);

    return (
      <AutoGrid gridGap={[20]}>
        {query.stations({ search }).map((station) => (
          <Card
            key={[station.stationuuid, station.url].join("-")}
            title={station.name}
            subtitle={station.country}
            onClick={() => play(station)}
          />
        ))}
      </AutoGrid>
    );
  }
);

export const StationCardList: FC<StationSearchInput> = (props) => (
  <Loader>
    <GQLStations {...props} />
  </Loader>
);
