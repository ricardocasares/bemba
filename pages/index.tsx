import React from "react";
import { Layout } from "@/components/Layout";
import { Search } from "@/components/Search";
import { Content } from "@/components/Content";
import { Swiper } from "@/components/Swiper";
import { GradientBox } from "@/components/GradientBox";
import { Bar } from "@/components/Bar";
import { ConnectedLike } from "@/components/Player/Controls/Like";
import { ConnectedPlayer } from "@/components/Player";

function Index() {
  return (
    <Layout>
      <Search />
      <Content>
        <Swiper title="Suggested for you">
          <GradientBox>
            <h3>FM 103.5 Mega</h3>
            <h4>Buenos Aires, Argentina</h4>
            <ConnectedLike />
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
      </Content>
      <ConnectedPlayer />
      <Bar />
    </Layout>
  );
}

export default Index;
