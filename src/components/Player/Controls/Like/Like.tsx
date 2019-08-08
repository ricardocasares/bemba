import React, { FC } from "react";
import { LikeIcon, Button } from "../styles";
import { Station } from "@/store/state";

export type Like = {
  load: (station: Station) => void;
};

export const Like: FC<Like> = ({ load }) => {
  return (
    <Button
      onClick={() =>
        load({
          name: "Radio Bemba",
          tags: [],
          country: "Argentina",
          state: "San Juan",
          url: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg"
        })
      }
    >
      <LikeIcon height={25} />
    </Button>
  );
};
