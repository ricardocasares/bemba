import React from "react";
import dynamic from "next/dynamic";
import { Layout } from "@/components/Layout";
import { Box } from "@/components/Box";
import { Suggestions } from "@/components/Suggestions";
import { Bar } from "@/components/Bar";
import { NextPage } from "next";
import { prepare } from "@/store/suggestions";

const Player = dynamic(
  // @ts-ignore
  () => import("@/components/Player").then(({ Player }) => Player),
  { ssr: false }
);

const Index: NextPage = () => {
  return (
    <Layout>
      <Box scroll fullh padding="15px">
        <Suggestions />
      </Box>
      <Player />
      <Bar />
    </Layout>
  );
};

Index.getInitialProps = async ctx => {
  await ctx.store.dispatch(prepare());

  return {};
};

export default Index;
