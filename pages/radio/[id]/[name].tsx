import { NextPage } from 'next';
import { Box } from '@/components/Box';
import { Station } from '@/components/Station';
import { request } from '@/store/station';

export const StationPage: NextPage = () => (
  <Box>
    <Station />
  </Box>
);

StationPage.getInitialProps = async ctx => {
  const id = ctx.query.id as string;
  ctx.store.dispatch(request(id));
  return {};
};

export default StationPage;
