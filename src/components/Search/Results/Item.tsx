import React, { FC } from "react";
import { Title, Subtitle } from "@/components/Player/Display/styles";
import { ChevronRight } from "react-bytesize-icons";
import { Station } from "@/models/state";
import { ListItem, StationButton, StationLink } from "./styles";

export const Item: FC<Station> = ({ id, url, name, state, country, tags }) => (
  <ListItem>
    <StationButton>
      <Title title={tags.join(", ").concat(url)}>{name}</Title>
      <Subtitle>
        {[state, country].filter(Boolean).join(", ") || "International"}
      </Subtitle>
    </StationButton>
    <StationLink href={`/radio/${id}/${name}`}>
      <ChevronRight strokeWidth="1px" color="#555" />
    </StationLink>
  </ListItem>
);
