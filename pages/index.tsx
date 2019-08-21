import React from "react";
import { Layout } from "@/components/Layout";
import { Box } from "@/components/Box";
import { Suggestions } from "@/components/Suggestions";
import { Player } from "@/components/Player";
import { Bar } from "@/components/Bar";
import { NextPage } from "next";
import { prepare } from "@/store/suggestions";

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
  if (ctx.req) {
    await ctx.store.dispatch(
      prepare(ctx.req.headers["x-forwarded-for"] as string)
    );
  }

  if (!ctx.req) {
    await ctx.store.dispatch(prepare());
  }

  return {};
};

export default Index;
