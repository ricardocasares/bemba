import React from 'react';
import { NextPage } from 'next';
import { Box } from '@/components/Box';
import { Search } from '@/components/Search';
import { Results } from '@/components/Search/Results';
import { History } from '@/components/Search/History';

const SearchPage: NextPage = () => {
  return (
    <Box fullh>
      <Search />
      <Box scroll fullh padding="60px 15px">
        <Results />
        <History />
      </Box>
    </Box>
  );
};

export default SearchPage;
