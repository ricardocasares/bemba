import React, { PureComponent } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { get } from "../store/station/actions";
import { load } from "../store/player/actions";
import { add, remove } from "../store/library/actions";

import Seo from "../components/Seo";
import Subtitle from "../components/Text/Subtitle";
import Content from "../components/Content/index";
import StationItem from "../components/Station/index";
import Swiper from "../components/Swiper";
import CardLink from "../components/Card";
import Add from "../components/Button/Add";
import Play from "../components/Button/Play";
import Remove from "../components/Button/Remove";

interface StationProps {
  add?: Function;
  remove?: Function;
  load?: Function;
  station: any;
  library: any;
}

const Toolbar = styled.div`
  display: flex;

  div:first-child {
    flex: 1;
  }
`;

class Station extends PureComponent<StationProps> {
  static async getInitialProps({ store, query }) {
    await store.dispatch(get(query.id));
    return {};
  }

  render() {
    const { load, add, remove, station, library } = this.props;
    const { language } = station;
    const tags = station.tags.split(",").filter(x => x);
    const location = [station.country, station.state].filter(x => x);
    const [country, state] = location;

    return (
      <Content>
        <Seo
          title={[station.name, location.join(", "), "Radio Bemba"].join(" - ")}
          description={[station.name, location.join(", "), tags.join(" ")].join(
            " "
          )}
        />
        <Toolbar>
          <StationItem {...station} />
          <Play onClick={() => load(station)} />
          {library[station.id] ? (
            <Remove onClick={() => remove(station.id)} />
          ) : (
            <Add onClick={() => add(station)} />
          )}
        </Toolbar>
        <Subtitle>Find similar radios</Subtitle>
        <Swiper>
          {tags.map(tag => (
            <CardLink
              key={tag}
              href={`/stations?filter=tags&name=${tag}`}
              as={`/tags/${tag}`}
            >
              {tag}
            </CardLink>
          ))}
          {language ? (
            <CardLink
              href={`/stations?filter=language&name=${language}`}
              as={`/language/${language}`}
            >
              {language}
            </CardLink>
          ) : null}
          {country ? (
            <CardLink
              href={`/stations?filter=country&name=${country}`}
              as={`/country/${country}`}
            >
              {country}
            </CardLink>
          ) : null}
          {state ? (
            <CardLink
              href={`/stations?filter=state&name=${state}`}
              as={`/state/${state}`}
            >
              {state}
            </CardLink>
          ) : null}
        </Swiper>
      </Content>
    );
  }
}

const mapProps = ({ station, library }) => ({
  station: station.station,
  library: library.stations
});

export default connect<StationProps>(mapProps, { add, remove, load })(Station);
