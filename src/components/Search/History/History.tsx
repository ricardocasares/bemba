import React, { FC } from "react";
import { Stations, Station } from "@/models/state";
import { Title } from "../Results/styles";
import { Results } from "../Results/Results";

export type History = {
  load: (station: Station) => void;
  history: Record<string, Stations>;
};

export const History: FC<History> = ({ load, history }) => (
  <div>
    <Title>Recent searches</Title>
    {!!Object.keys(history).length &&
      Object.keys(history).map(query => (
        <Results
          dirty
          empty={false}
          loading={false}
          key={query}
          query={query}
          results={history[query]}
          load={load}
        />
      ))}
  </div>
);
