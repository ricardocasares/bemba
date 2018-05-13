import React, { PureComponent } from "react";
import styled from "styled-components";
import nprogress from "nprogress";
import debounce from "debounce-fn";
// store
import { connect } from "react-redux";
import * as actions from "../../store/player/actions";
import {
  hideNotification,
  showErrorNotification
} from "../../store/app/actions";
// components
import Play from "../Button/Play";
import Pause from "../Button/Pause";
import Station from "../Station";

const ERROR_MESSAGE = "Sorry we were not able to play this radio.";

export class Player extends PureComponent {
  play = () => this.audio.play();
  pause = () => this.audio.pause();

  componentDidMount() {
    let player = this.audio;
    let {
      play,
      pause,
      ready,
      hide,
      hideNotification,
      showErrorNotification
    } = this.props;

    player.addEventListener("loadstart", () => {
      nprogress.start();
      hideNotification();
    });

    player.addEventListener("canplay", () => {
      player.play().then(() => nprogress.done());
    });

    player.addEventListener("error", err => {
      nprogress.done();
      showErrorNotification({
        message: ERROR_MESSAGE
      });
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
export default connect(mapProps, {
  ...actions,
  hideNotification,
  showErrorNotification
})(styled(Player)`
  display: ${hide};
  padding: 15px;
  background: #333;

  > div {
    flex: 1 1 auto;
  }
`);
