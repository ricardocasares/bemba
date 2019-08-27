import React, { FC, Fragment } from 'react';
import { Swiper } from '@/components/Swiper';
import { GradientBox } from '@/components/GradientBox';
import { Suggestions, Station } from '@/models/state';

import { Display } from '@/components/Display';

export type SuggestionsBox = {
  suggestions: Suggestions;
  load: (station: Station) => void;
};

export const SuggestionsBox: FC<SuggestionsBox> = ({ load, suggestions }) => {
  return (
    <Fragment>
      {Object.entries(suggestions).map(([label, { name, stations }]) => (
        <Swiper key={label} title={name}>
          {Object.entries(stations).map(([id, station]) => (
            <GradientBox key={`${label}:${id}`} onClick={() => load(station)}>
              <Display {...station} />
            </GradientBox>
          ))}
        </Swiper>
      ))}
    </Fragment>
  );
};
