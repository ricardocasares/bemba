import React from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { Layout } from "@/components/Layout";
import { Box } from "@/components/Box";
import { Search } from "@/components/Search";
import { Bar } from "@/components/Bar";
import { Results } from "@/components/Search/Results";
import { History } from "@/components/Search/History";

const Player = dynamic(
  // @ts-ignore
  () => import("@/components/Player").then(({ Player }) => Player),
  { ssr: false }
);

const SearchPage: NextPage = () => {
  return (
    <Layout>
      <Search />
      <Box scroll fullh padding="60px 15px">
        <Results />
        <History />
      </Box>
      <Player />
      <Bar />
    </Layout>
  );
};

export default SearchPage;
