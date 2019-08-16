import React, { FC } from "react";
import { EllipsisVertical } from "react-bytesize-icons";
import { Station } from "@/models/state";
import { ListItem, StationButton, StationLink } from "./styles";
import { Display } from "@/components/Player/Display/Display";

const item = {
  show: { y: 0, opacity: 1 },
  hide: { y: 5, opacity: 0 }
};

export type Item = {
  load: (station: Station) => void;
} & Station;

export const Item: FC<Item> = ({ id, load, ...station }) => (
  <ListItem variants={item}>
    <StationButton onClick={() => load({ id, ...station })}>
      <Display {...station} />
    </StationButton>
    <StationLink href={`/radio/${id}/${name}`}>
      <EllipsisVertical strokeWidth="1px" color="#555" />
    </StationLink>
  </ListItem>
);
