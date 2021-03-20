import { FC } from 'react';
import { AutoGrid } from '@/components/AutoGrid';
import { CardSkeleton } from '@/components/Skeleton';

export type Placeholder = { count?: number; };

export const Placeholder: FC<Placeholder> = ({ count = 10 }) => (
  <AutoGrid gridGap={[20]}>
    {Array(count).fill(null).map((i) => <CardSkeleton key={`${i}-skeleton`} />)}
  </AutoGrid>
);