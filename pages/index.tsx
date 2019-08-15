import React from "react";
import dynamic from "next/dynamic";
import { Layout } from "@/components/Layout";
import { Content } from "@/components/Content";
import { Swiper } from "@/components/Swiper";
import { GradientBox } from "@/components/GradientBox";
import { Bar } from "@/components/Bar";

const Player = dynamic(
  // @ts-ignore
  () => import("@/components/Player").then(({ Player }) => Player),
  { ssr: false }
);

function Index() {
  return (
    <Layout>
      <Content>
        <Swiper title="Suggested for you">
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
      </Content>
      <Player />
      <Bar />
    </Layout>
  );
}

export default Index;
