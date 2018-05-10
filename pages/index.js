import React, { Fragment } from "react";
import styled from "styled-components";
import Pad from "../components/Pad";
import CardLink from "../components/Card";
import Title from "../components/Text/Title";
import Subtitle from "../components/Text/Subtitle";
import Swiper from "../components/Swiper";
import Content from "../components/Content";
import Player from "../components/Player";
import Navigation from "../components/Navigation";
import Station from "../components/StationList/Station";

const SliderTitle = styled.h4`
  color: #ccc;
  padding: 0 15px;
  font-weight: 500;
`;

export default () => (
  <Fragment>
    <Content>
      <Pad>
        <Title>Explore</Title>
      </Pad>
      <SliderTitle>Recommended for you</SliderTitle>
      <Swiper>
        <CardLink
          href="/stations?filter=genre&name=Electro"
          as="/stations/genres/Electro"
        >
          Electro
        </CardLink>
        <CardLink
          href="/stations?filter=language&name=Russian"
          as="/stations/languages/Russian"
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
          as="/stations/languages/Polski"
        >
          Polski
        </CardLink>
      </Swiper>

      <SliderTitle>Countries</SliderTitle>
      <Swiper>
        <CardLink
          href="/stations?filter=country&name=Argentina"
          as="/stations/countries/Argentina"
        >
          Argentina
        </CardLink>
        <CardLink
          href="/stations?filter=country&name=Russia"
          as="/stations/countries/Russia"
        >
          Russia
        </CardLink>
        <CardLink
          href="/stations?filter=country&name=Poland"
          as="/stations/countries/Poland"
        >
          Poland
        </CardLink>
        <CardLink
          href="/stations?filter=country&name=Netherlands"
          as="/stations/countries/Netherlands"
        >
          Netherlands
        </CardLink>
      </Swiper>

      <SliderTitle>Languages</SliderTitle>
      <Swiper>
        <CardLink
          href="/stations?filter=language&name=Spanish"
          as="/stations/languages/Spanish"
        >
          Spanish
        </CardLink>
        <CardLink
          href="/stations?filter=language&name=English"
          as="/stations/languages/English"
        >
          English
        </CardLink>
        <CardLink
          href="/stations?filter=language&name=Russian"
          as="/stations/languages/Pусский"
        >
          Pусский
        </CardLink>
        <CardLink
          href="/stations?filter=language&name=Polish"
          as="/stations/languages/Polski"
        >
          Polski
        </CardLink>
      </Swiper>
    </Content>
    <Navigation />
  </Fragment>
);
