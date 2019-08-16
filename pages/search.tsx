import React from "react";
import { NextPage } from "next";
import { Layout } from "@/components/Layout";
import { Box } from "@/components/Box";
import { Search } from "@/components/Search";
import { Bar } from "@/components/Bar";
import { Results } from "@/components/Search/Results";
import { History } from "@/components/Search/History";

const SearchPage: NextPage = () => {
  return (
    <Layout>
      <Search />
      <Box scroll fullh padding="60px 15px">
        <Results />
        <History />
      </Box>
      <Bar />
    </Layout>
  );
};

export default SearchPage;
