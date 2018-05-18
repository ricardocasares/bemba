import React, { PureComponent } from "react";
import styled from "styled-components";

import Seo from "../components/Seo";
import Title from "../components/Text/Title";
import Subtitle from "../components/Text/Subtitle";
import Swiper from "../components/Swiper";
import CardLink from "../components/Card";
import Content from "../components/Content";

export default class Index extends PureComponent {
  render() {
    return (
      <Content>
        <Seo />
        <Title>Explore</Title>
        <Subtitle>Trending</Subtitle>
        <Swiper>
          <CardLink href="/tags/Live sports">Live Sports</CardLink>
          <CardLink href="/tags/rock">Rock</CardLink>
          <CardLink href="/tags/podcast">Podcast</CardLink>
          <CardLink href="/tags/groove">Groove</CardLink>
          <CardLink href="/tags/Dubstep">Dubstep</CardLink>
          <CardLink href="/tags/News">News</CardLink>
          <CardLink href="/tags/Technology">Technology</CardLink>
        </Swiper>

        <Subtitle>Top Cities</Subtitle>
        <Swiper>
          <CardLink href="/state/Istanbul">Istanbul</CardLink>
          <CardLink href="/state/Krakow">Kraków</CardLink>
          <CardLink href="/state/Kiev">Kiev</CardLink>
          <CardLink href="/state/Saint-Petersburg">Saint-Petersburg</CardLink>

          <CardLink href="/state/Minsk">Minsk</CardLink>
          <CardLink href="/state/Buenos Aires">Buenos Aires</CardLink>
          <CardLink href="/state/Amsterdam">Amsterdam</CardLink>
        </Swiper>

        <Subtitle>Countries</Subtitle>
        <Swiper>
          <CardLink href="/country/Turkey">Turkey</CardLink>
          <CardLink href="/country/Poland">Poland</CardLink>
          <CardLink href="/country/Ukraine">Ukraine</CardLink>
          <CardLink href="/country/Russia">Russia</CardLink>

          <CardLink href="/country/Belarus">Belarus</CardLink>
          <CardLink href="/country/Argentina">Argentina</CardLink>
          <CardLink href="/country/Netherlands">Netherlands</CardLink>
        </Swiper>

        <Subtitle>Most listened languages</Subtitle>
        <Swiper>
          <CardLink href="/language/Spanish">Español</CardLink>
          <CardLink href="/language/Italian">Italiano</CardLink>
          <CardLink href="/language/Turkish">Türk</CardLink>
          <CardLink href="/language/English">English</CardLink>
          <CardLink href="/language/Russian">Pусский</CardLink>
          <CardLink href="/language/Ukrainian">Українська</CardLink>
          <CardLink href="/language/Polski">Polski</CardLink>
          <CardLink href="/language/Belarusian">беларускі</CardLink>
        </Swiper>
      </Content>
    );
  }
}
