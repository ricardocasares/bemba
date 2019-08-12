import React, { FC } from "react";
import { LikeIcon, Button } from "../styles";
import { Station } from "@/store/state";

export type Like = {
  load: (station: Station) => void;
  request: (filter: string, value: string) => void;
};

export const Like: FC<Like> = ({ request }) => {
  return (
    <Button
      onClick={() => {
        request("country", "Argentina");
      }}
    >
      <LikeIcon height={25} />
    </Button>
  );
};
