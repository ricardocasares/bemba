import React, { FC } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { LikeIcon, Button } from "./styles";
import { load } from "@/store/player";

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

export const ConnectedLike = connect(
  null,
  dispatch => bindActionCreators({ load }, dispatch)
)(Like);
