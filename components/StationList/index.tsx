import React, { Fragment } from "react";
import styled from "styled-components";
import slug from "slug";

import Link from "../Link";
import Add from "../Button/Add";
import Remove from "../Button/Remove";
import Bookmark from "../Icons/EllipsisVertical";
import Station from "../Station/index";

let StationButton = styled.button`
  text-decoration: none;
  margin: 10px 0;
  color: currentColor;
  text-align: left;
  display: block;
  background: transparent;
  border: none;
  padding: 0;
  flex: 1;
  min-width: 0;
`;

let Item = styled.div`
  display: flex;
  align-items: center;
`;

export default ({ stations = [], library = [], load, add, remove }) => (
  <Fragment>
    {Object.keys(stations).map(id => (
      <Item key={id}>
        <StationButton onClick={() => load(stations[id])}>
          <Station {...stations[id]} />
        </StationButton>
        {library[id] ? (
          <Remove onClick={() => remove(id)} />
        ) : (
          <Add onClick={() => add(stations[id])} />
        )}

        <Link
          href={`/station?id=${id}`}
          as={`/radio/${id}/${slug(stations[id].name)}`}
        >
          <Bookmark color={"white"} />
        </Link>
      </Item>
    ))}
  </Fragment>
);
