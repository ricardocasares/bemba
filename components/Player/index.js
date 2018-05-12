import React, { PureComponent } from "react";
import styled from "styled-components";
// store
import { connect } from "react-redux";
import * as actions from "../../store/player/actions";
// components
import Play from "../Button/Play";
import Pause from "../Button/Pause";
import Station from "../Station";

export class Player extends PureComponent {
  play = () => this.audio.play();
  pause = () => this.audio.pause();

  componentDidMount() {
    let player = this.audio;
    let { play, pause, ready, hide } = this.props;

    player.addEventListener("loadstart", () => {
      // do something here
    });

    player.addEventListener("canplay", () => {
      player.play();
    });

    player.addEventListener("error", err => {
      hide();
    });

    player.addEventListener("playing", () => play({ playing: true }));
    player.addEventListener("pause", () => pause({ playing: false }));
  }

  render() {
    let { className, station, loading } = this.props;

    return (
      <div className={className}>
        <Station {...station} />
        <Pause onClick={this.pause} />
        <Play filled onClick={this.play} />
        <audio
          autoPlay={false}
          ref={e => {
            this.audio = e;
          }}
          src={station.url}
        />
      </div>
    );
  }
}

let hide = ({ hidden }) => (hidden ? "none" : "flex");
let mapProps = ({ player }) => ({ ...player });
export default connect(mapProps, { ...actions })(styled(Player)`
  display: ${hide};
  padding: 15px;
  background: #333;

  > div {
    flex: 1 1 auto;
  }
`);
