import React, { FC, Fragment } from "react";
import { Swiper } from "@/components/Swiper";
import { GradientBox } from "@/components/GradientBox";
import { Suggestions, Station } from "@/models/state";

import { Display } from "../Player/Display/Display";

export type SuggestionsBox = {
  suggestions: Suggestions;
  load: (station: Station) => void;
};

export const SuggestionsBox: FC<SuggestionsBox> = ({ load, suggestions }) => {
  return (
    <Fragment>
      {Object.entries(suggestions).map(([label, stations]) => (
        <Swiper key={label} title={`${label} stations`}>
          {Object.entries(stations).map(([id, station]) => (
            <GradientBox key={id} onClick={() => load(station)}>
              <Display {...station} />
            </GradientBox>
          ))}
        </Swiper>
      ))}
    </Fragment>
  );
};
