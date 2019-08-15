import React, { FC } from "react";
import { Title, Subtitle } from "@/components/Player/Display/styles";
import { EllipsisVertical } from "react-bytesize-icons";
import { Station } from "@/models/state";
import { ListItem, StationButton, StationLink } from "./styles";

const item = {
  show: { y: 0, opacity: 1 },
  hide: { y: 5, opacity: 0 }
};

export const Item: FC<Station> = ({ id, url, name, state, country, tags }) => (
  <ListItem variants={item}>
    <StationButton>
      <Title title={tags.join(", ").concat(url)}>{name}</Title>
      <Subtitle>
        {[state, country].filter(Boolean).join(", ") || "International"}
      </Subtitle>
    </StationButton>
    <StationLink href={`/radio/${id}/${name}`}>
      <EllipsisVertical strokeWidth="1px" color="#555" />
    </StationLink>
  </ListItem>
);
