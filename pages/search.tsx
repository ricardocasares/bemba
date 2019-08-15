import React from "react";
import { NextPage } from "next";
import { Layout } from "@/components/Layout";
import { Content } from "@/components/Content";
import { Search } from "@/components/Search";
import { Bar } from "@/components/Bar";

const SearchPage: NextPage = () => {
  return (
    <Layout>
      <Search />
      <Content pt="xxl" pl="l" pr="l">
        <h3>Recent searches</h3>
      </Content>
      <Bar />
    </Layout>
  );
};

export default SearchPage;
