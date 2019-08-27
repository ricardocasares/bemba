import React from 'react';
import { Box } from '@/components/Box';
import { Suggestions } from '@/components/Suggestions';
import { NextPage } from 'next';
import { prepare } from '@/features/home/store';

const Index: NextPage = () => {
  return (
    <Box scroll fullh padding="15px">
      <Suggestions />
    </Box>
  );
};

Index.getInitialProps = async ctx => {
  if (ctx.req) {
    await ctx.store.dispatch(
      prepare(ctx.req.headers['x-forwarded-for'] as string)
    );
  }

  if (!ctx.req) {
    await ctx.store.dispatch(prepare());
  }

  return {};
};

export default Index;
