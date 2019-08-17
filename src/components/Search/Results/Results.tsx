import React, { FC } from "react";
import { Stations, Station } from "@/models/state";
import { Item } from "./Item";
import { List, Subtitle, animations } from "./styles";

export type Results = {
  query: string;
  dirty: boolean;
  empty: boolean;
  loading: boolean;
  results: Stations;
  load: (station: Station) => void;
};

export const Results: FC<Results> = ({
  load,
  query,
  dirty,
  empty,
  loading,
  results,
}) => (
  <div>
    {loading && (
      <Subtitle
        key="searching"
        initial="hide"
        animate="show"
        variants={animations}
      >
        Searching for {query} ...
      </Subtitle>
    )}
    {!empty && !loading && dirty && (
      <Subtitle
        key="searching"
        initial={false}
        animate="show"
        variants={animations}
      >
        Results for {query}
      </Subtitle>
    )}

    {empty && !loading && dirty && (
      <Subtitle
        key="searching"
        initial="hide"
        animate="show"
        variants={animations}
      >
        No results for {query}
      </Subtitle>
    )}

    {!empty && (
      <List
        initial="hide"
        animate="show"
        variants={animations}
        transition={{ staggerChildren: 0.1 }}
      >
        {Object.keys(results).map(station => (
          <Item key={station} {...results[station]} load={load} />
        ))}
      </List>
    )}
  </div>
);
