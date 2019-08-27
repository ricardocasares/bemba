import React, { FC } from 'react';
import Link from 'next/link';
import slug from 'slug';
import { EllipsisVertical } from 'react-bytesize-icons';
import { Station } from '@/models/state';
import { ListItem, StationButton, StationLink } from './styles';
import { Display } from '@/components/Display';

const item = {
  show: { y: 0, opacity: 1 },
  hide: { y: 5, opacity: 0 },
};

export type Item = {
  load: (station: Station) => void;
} & Station;

export const Item: FC<Item> = ({ id, load, ...station }) => (
  <ListItem variants={item}>
    <StationButton onClick={() => load({ id, ...station })}>
      <Display {...station} />
    </StationButton>
    <Link
      shallow
      href="/radio/[id]/[name]"
      as={`/radio/${id}/${slug(station.name)}`}
    >
      <StationLink>
        <EllipsisVertical strokeWidth="1px" color="#555" />
      </StationLink>
    </Link>
  </ListItem>
);
