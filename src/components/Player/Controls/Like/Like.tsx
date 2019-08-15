import React, { FC } from "react";
import { LikeIcon, Button } from "../styles";
import { Station } from "@/models/state";

export type Like = {
  load: (station: Station) => void;
};

export const Like: FC<Like> = () => {
  return (
    <Button>
      <LikeIcon height={25} />
    </Button>
  );
};
