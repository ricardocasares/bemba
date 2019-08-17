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
  console.log(JSON.stringify(suggestions, null, 2));
  return (
    <Fragment>
      {Object.entries(suggestions).map(([label, stations]) => (
        <Swiper key={label} title={`${label} stations`}>
          {Object.entries(stations).map(([id, station]) => (
            <GradientBox
              key={`${label}:${id}`}
              onClick={() => load(station)}
              whileTap={{ boxShadow: "0 0 0 2px #845ef7" }}
            >
              <Display {...station} />
            </GradientBox>
          ))}
        </Swiper>
      ))}
    </Fragment>
  );
};
