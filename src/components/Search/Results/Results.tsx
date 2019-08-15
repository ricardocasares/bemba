import React, { FC } from "react";
import { Stations } from "@/models/state";
import { Item } from "./Item";
import { List, Subtitle, animations } from "./styles";

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
        initial="hide"
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
          <Item key={station} {...results[station]} />
        ))}
      </List>
    )}
  </div>
);
