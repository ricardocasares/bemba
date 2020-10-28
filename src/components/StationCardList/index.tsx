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
    const { load } = useContext(PlayerContext);

    return (
      <AutoGrid gridGap={["var(--sz4)"]}>
        {query.stations({ search }).map((station) => (
          <Card
            key={[station.stationuuid, station.url].join("-")}
            title={station.name}
            subtitle={station.country}
            onClick={() => load(station)}
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
