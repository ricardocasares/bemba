import React, { FC } from "react";
import { Stations } from "@/models/state";
import { Title } from "../Results/styles";
import { Results } from "../Results/Results";

export type History = {
  history: Record<string, Stations>;
};

export const History: FC<History> = ({ history }) => (
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
        />
      ))}
  </div>
);
