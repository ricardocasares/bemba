import React, { Fragment } from "react";
import styled from "styled-components";

import CardLink from "../components/Card";
import Title from "../components/Text/Title";
import Subtitle from "../components/Text/Subtitle";
import Swiper from "../components/Swiper";
import Content from "../components/Content";
import Player from "../components/Player";
import Navigation from "../components/Navigation";
import Station from "../components/StationList/Station";

export default () => (
  <Fragment>
    <Content>
      <Title>Explore</Title>
      <SliderTitle>Recommended for you</SliderTitle>
      <Swiper>
        <CardLink
          href="/stations?filter=tags&name=rock"
          as="/stations/tags/rock"
        >
          Electro
        </CardLink>
        <CardLink
          href="/stations?filter=language&name=Russian"
          as="/stations/language/Russian"
        >
          Russian
        </CardLink>
        <CardLink
          href="/stations?filter=tags&name=News"
          as="/stations/tags/News"
        >
          News
        </CardLink>
        <CardLink
          href="/stations?filter=language&name=Polish"
          as="/stations/language/Polski"
        >
          Polski
        </CardLink>
      </Swiper>

      <SliderTitle>Countries</SliderTitle>
      <Swiper>
        <CardLink
          href="/stations?filter=country&name=Argentina"
          as="/stations/country/Argentina"
        >
          Argentina
        </CardLink>
        <CardLink
          href="/stations?filter=country&name=Russia"
          as="/stations/country/Russia"
        >
          Russia
        </CardLink>
        <CardLink
          href="/stations?filter=country&name=Poland"
          as="/stations/country/Poland"
        >
          Poland
        </CardLink>
        <CardLink
          href="/stations?filter=country&name=Netherlands"
          as="/stations/country/Netherlands"
        >
          Netherlands
        </CardLink>
      </Swiper>

      <SliderTitle>Language</SliderTitle>
      <Swiper>
        <CardLink
          href="/stations?filter=language&name=Spanish"
          as="/stations/language/Spanish"
        >
          Spanish
        </CardLink>
        <CardLink
          href="/stations?filter=language&name=English"
          as="/stations/language/English"
        >
          English
        </CardLink>
        <CardLink
          href="/stations?filter=language&name=Russian"
          as="/stations/language/Pусский"
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
    <Navigation />
  </Fragment>
);

const SliderTitle = styled.h4`
  color: #ccc;
  font-weight: 500;
`;
