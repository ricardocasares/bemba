import React from "react";
import { pure } from "recompose";
import styled from "styled-components";

import Play from "../Button/Play";
import Pause from "../Button/Pause";

import Station from "../StationList/Station";
import { PureComponent } from "react";

export class Player extends PureComponent {
  play = () => {
    this.audio.play();
  };
  pause = () => this.audio.pause();

  componentDidMount() {
    let player = this.audio;

    player.addEventListener("play", console.log);
    player.addEventListener("playing", console.log);
    player.addEventListener("pause", console.log);
  }

  render() {
    let { className } = this.props;

    return (
      <div className={className}>
        <Station
          name="FM Pop & Rock"
          state="Buenos Aires"
          country="Argentina"
        />
        <Pause onClick={this.pause} />
        <Play filled onClick={this.play} />
        <audio
          autoPlay={true}
          ref={e => {
            this.audio = e;
          }}
          src={"http://streaming.radionomy.com/2ROCK"}
        />
      </div>
    );
  }
}

export default styled(Player)`
  display: flex;
  padding: 15px;
  background: #333;

  > div {
    flex: 1 1 auto;
  }
`;
