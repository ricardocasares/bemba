import React, { FC } from "react";
import { Stations } from "@/models/state";
import { Item } from "./Item";
import { List, Subtitle } from "./styles";

export type Results = {
  query: string;
  dirty: boolean;
  empty: boolean;
  loading: boolean;
  results: Stations;
};

export const Results: FC<Results> = ({
  query,
  dirty,
  empty,
  loading,
  results
}) => (
  <div>
    {loading && <Subtitle>Searching for {query} ...</Subtitle>}
    {!empty && !loading && dirty && <Subtitle>Results for {query}</Subtitle>}
    {empty && !loading && dirty && <Subtitle>No results for {query}</Subtitle>}
    <List>
      {Object.keys(results).map(station => (
        <Item key={station} {...results[station]} />
      ))}
    </List>
  </div>
);
