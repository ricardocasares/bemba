import React, { PureComponent } from "react";

import Seo from "../components/Seo";
import Title from "../components/Text/Title";
import Subtitle from "../components/Text/Subtitle";
import Swiper from "../components/Swiper";
import CardLink from "../components/Card";
import Content from "../components/Content/index";

export default class Index extends PureComponent {
  render() {
    return (
      <Content>
        <Seo />
        <Title>Explore</Title>
        <Subtitle>Trending</Subtitle>
        <Swiper>
          <CardLink
            href="/stations?filter=tag&name=Live sports"
            as="/tag/Live sports"
          >
            Live Sports
          </CardLink>
          <CardLink href="/stations?filter=tag&name=rock" as="/tag/rock">
            Rock
          </CardLink>
          <CardLink href="/stations?filter=tag&name=podcast" as="/tag/podcast">
            Podcast
          </CardLink>
          <CardLink href="/stations?filter=tag&name=groove" as="/tag/groove">
            Groove
          </CardLink>
          <CardLink href="/stations?filter=tag&name=Dubstep" as="/tag/Dubstep">
            Dubstep
          </CardLink>
          <CardLink href="/stations?filter=tag&name=News" as="/tag/News">
            News
          </CardLink>
          <CardLink
            href="/stations?filter=tag&name=Technology"
            as="/tag/Technology"
          >
            Technology
          </CardLink>
        </Swiper>

        <Subtitle>Top Cities</Subtitle>
        <Swiper>
          <CardLink
            href="/stations?filter=state&name=Istanbul"
            as="/state/Istanbul"
          >
            Istanbul
          </CardLink>
          <CardLink
            href="/stations?filter=state&name=Krakow"
            as="/state/Krakow"
          >
            Kraków
          </CardLink>
          <CardLink href="/stations?filter=state&name=Kiev" as="/state/Kiev">
            Kiev
          </CardLink>
          <CardLink
            href="/stations?filter=state&name=Saint-Petersburg"
            as="/state/Saint-Petersburg"
          >
            Saint-Petersburg
          </CardLink>

          <CardLink href="/stations?filter=state&name=Minsk" as="/state/Minsk">
            Minsk
          </CardLink>
          <CardLink
            href="/stations?filter=state&name=Buenos Aires"
            as="/state/Buenos Aires"
          >
            Buenos Aires
          </CardLink>
          <CardLink
            href="/stations?filter=state&name=Amsterdam"
            as="/state/Amsterdam"
          >
            Amsterdam
          </CardLink>
        </Swiper>

        <Subtitle>Countries</Subtitle>
        <Swiper>
          <CardLink
            href="/stations?filter=country&name=Turkey"
            as="/country/Turkey"
          >
            Turkey
          </CardLink>
          <CardLink
            href="/stations?filter=country&name=Poland"
            as="/country/Poland"
          >
            Poland
          </CardLink>
          <CardLink
            href="/stations?filter=country&name=Ukraine"
            as="/country/Ukraine"
          >
            Ukraine
          </CardLink>
          <CardLink
            href="/stations?filter=country&name=Russia"
            as="/country/Russia"
          >
            Russia
          </CardLink>

          <CardLink
            href="/stations?filter=country&name=Belarus"
            as="/country/Belarus"
          >
            Belarus
          </CardLink>
          <CardLink
            href="/stations?filter=country&name=Argentina"
            as="/country/Argentina"
          >
            Argentina
          </CardLink>
          <CardLink
            href="/stations?filter=country&name=Netherlands"
            as="/country/Netherlands"
          >
            Netherlands
          </CardLink>
        </Swiper>

        <Subtitle>Most listened languages</Subtitle>
        <Swiper>
          <CardLink
            href="/stations?filter=language&name=Spanish"
            as="/language/Spanish"
          >
            Español
          </CardLink>
          <CardLink
            href="/stations?filter=language&name=Italian"
            as="/language/Italian"
          >
            Italiano
          </CardLink>
          <CardLink
            href="/stations?filter=language&name=Turkish"
            as="/language/Turkish"
          >
            Türk
          </CardLink>
          <CardLink
            href="/stations?filter=language&name=English"
            as="/language/English"
          >
            English
          </CardLink>
          <CardLink
            href="/stations?filter=language&name=Russian"
            as="/language/Russian"
          >
            Pусский
          </CardLink>
          <CardLink
            href="/stations?filter=language&name=Ukrainian"
            as="/language/Ukrainian"
          >
            Українська
          </CardLink>
          <CardLink
            href="/stations?filter=language&name=Polish"
            as="/language/Polski"
          >
            Polski
          </CardLink>
          <CardLink
            href="/stations?filter=language&name=Belarusian"
            as="/language/Belarusian"
          >
            беларускі
          </CardLink>
        </Swiper>
      </Content>
    );
  }
}
