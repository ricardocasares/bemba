import React, { PureComponent } from "react";
import styled from "styled-components";

import Title from "../components/Text/Title";
import Subtitle from "../components/Text/Subtitle";
import Swiper from "../components/Swiper";
import CardLink from "../components/Card";
import Content from "../components/Content";

export default class Index extends PureComponent {
  render() {
    return (
      <Content>
        <Title>Explore</Title>
        <Subtitle>Recommended for you</Subtitle>
        <Swiper>
          <CardLink
            href="/stations?filter=tags&name=rock"
            as="/stations/tags/rock"
          >
            Rock
          </CardLink>
          <CardLink
            href="/stations?filter=tags&name=Dubstep"
            as="/stations/tags/Dubstep"
          >
            Dubstep
          </CardLink>
          <CardLink
            href="/stations?filter=tags&name=News"
            as="/stations/tags/News"
          >
            News
          </CardLink>
          <CardLink
            href="/stations?filter=tags&name=Technology"
            as="/stations/tags/Technology"
          >
            Technology
          </CardLink>
        </Swiper>

        <Subtitle>Top Cities</Subtitle>
        <Swiper>
          <CardLink
            href="/stations?filter=state&name=Istanbul"
            as="/stations/state/Istanbul"
          >
            Istanbul
          </CardLink>
          <CardLink
            href="/stations?filter=state&name=Krakow"
            as="/stations/state/Krakow"
          >
            Kraków
          </CardLink>
          <CardLink
            href="/stations?filter=state&name=Kiev"
            as="/stations/state/Kiev"
          >
            Kiev
          </CardLink>
          <CardLink
            href="/stations?filter=state&name=Saint-Petersburg"
            as="/stations/state/Saint-Petersburg"
          >
            Saint-Petersburg
          </CardLink>

          <CardLink
            href="/stations?filter=state&name=Minsk"
            as="/stations/state/Minsk"
          >
            Minsk
          </CardLink>
          <CardLink
            href="/stations?filter=state&name=Buenos Aires"
            as="/stations/state/Buenos Aires"
          >
            Buenos Aires
          </CardLink>
          <CardLink
            href="/stations?filter=state&name=Amsterdam"
            as="/stations/state/Amsterdam"
          >
            Amsterdam
          </CardLink>
        </Swiper>

        <Subtitle>Most listened languages</Subtitle>
        <Swiper>
          <CardLink
            href="/stations?filter=language&name=Spanish"
            as="/stations/language/Spanish"
          >
            Español
          </CardLink>
          <CardLink
            href="/stations?filter=language&name=Turkish"
            as="/stations/language/Turkish"
          >
            Türk
          </CardLink>
          <CardLink
            href="/stations?filter=language&name=English"
            as="/stations/language/English"
          >
            English
          </CardLink>
          <CardLink
            href="/stations?filter=language&name=Russian"
            as="/stations/language/Russian"
          >
            Pусский
          </CardLink>
          <CardLink
            href="/stations?filter=language&name=Polish"
            as="/stations/language/Polski"
          >
            Polski
          </CardLink>
        </Swiper>
      </Content>
    );
  }
}
