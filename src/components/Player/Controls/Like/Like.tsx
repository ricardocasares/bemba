import React, { FC } from "react";
import { load } from "@/store/station";
import { LikeIcon, Button } from "../styles";

export type Like = {
  load: typeof load;
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
