import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { get } from "../store/station/actions";
import { add, remove } from "../store/library/actions";

import Seo from "../components/Seo";
import Title from "../components/Text/Title";
import Subtitle from "../components/Text/Subtitle";
import Content from "../components/Content";

interface StationProps {
  add?: Function;
  remove?: Function;
  station: any;
  library: any;
}

class Station extends PureComponent<StationProps> {
  static async getInitialProps({ store, query }) {
    await store.dispatch(get(query.id));
    return {};
  }

  render() {
    const { station } = this.props;
    return (
      <Content>
        <Seo
          title={[station.name, "Radio Bemba"].join(" - ")}
          description={[
            station.name,
            ...[station.country, station.state].filter(x => x),
            station.tags.split(",").join(" ")
          ].join(" ")}
        />
        <Title>{station.name}</Title>
        <Subtitle>
          {[station.country, station.state].filter(x => x).join(", ")}
        </Subtitle>
      </Content>
    );
  }
}

const mapProps = ({ station, library }) => ({
  station: station.station,
  library: library.stations
});

export default connect<StationProps>(mapProps, { add, remove })(Station);
