import React from "react";
import { NextPage } from "next";
import { Layout } from "@/components/Layout";
import { Content } from "@/components/Content";
import { Search } from "@/components/Search";
import { Bar } from "@/components/Bar";
import { Results } from "@/components/Search/Results";
import { History } from "@/components/Search/History";

const SearchPage: NextPage = () => {
  return (
    <Layout>
      <Search />
      <Content pt="xxl" pl="l" pr="l" pb="xxl">
        <Results />
        <History />
      </Content>
      <Bar />
    </Layout>
  );
};

export default SearchPage;
