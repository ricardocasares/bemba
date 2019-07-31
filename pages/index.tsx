import React from "react";
import styled from "@emotion/styled";
import { Layout } from "../src/components/Layout";
import { Bar } from "../src/components/Bar";
import { Search } from "../src/components/Search";
import { Player } from "../src/components/Player";
import { Swiper } from "../src/components/Swiper";
import { GradientBox } from "../src/components/GradientBox";

const Content = styled.div`
  flex: 1;
  display: flex;
`;

const Container = styled.div`
  overflow: scroll;
  min-height: 100%;
  padding-top: 80px;
`;

function Index() {
  return (
    <Layout>
      <Search />
      <Content>
        <Container>
          <Swiper title="Made for you">
            <GradientBox>
              <h3>FM 103.5 Mega</h3>
              <h4>Buenos Aires, Argentina</h4>
            </GradientBox>
            <GradientBox>
              <h3>La Popu 101.2</h3>
              <h4>Buenos Aires, Argentina</h4>
            </GradientBox>
            <GradientBox>
              <h3>103.5 MegaFM</h3>
              <h4>Buenos Aires, Argentina</h4>
            </GradientBox>
          </Swiper>
          <Swiper title="Listened recently">
            <GradientBox>
              <h3>103.5 MegaFM</h3>
              <h4>Buenos Aires, Argentina</h4>
            </GradientBox>
            <GradientBox>
              <h3>103.5 MegaFM</h3>
              <h4>Buenos Aires, Argentina</h4>
            </GradientBox>
            <GradientBox>
              <h3>103.5 MegaFM</h3>
              <h4>Buenos Aires, Argentina</h4>
            </GradientBox>
          </Swiper>
          <Swiper title="Popular on Bemba">
            <GradientBox>
              <h3>FM 103.5 Mega</h3>
              <h4>Buenos Aires, Argentina</h4>
            </GradientBox>
            <GradientBox>
              <h3>La Popu 101.2</h3>
              <h4>Buenos Aires, Argentina</h4>
            </GradientBox>
            <GradientBox>
              <h3>103.5 MegaFM</h3>
              <h4>Buenos Aires, Argentina</h4>
            </GradientBox>
          </Swiper>
        </Container>
      </Content>
      <Player />
      <Bar />
    </Layout>
  );
}

export default Index;
