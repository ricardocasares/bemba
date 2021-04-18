import { FC } from 'react';
import { AutoGrid } from '@/components/AutoGrid';
import { CardSkeleton } from '@/components/Skeleton';

export type Placeholder = { count?: number; };

export const Placeholder: FC<Placeholder> = ({ count = 10 }) => (
  <AutoGrid>
    {Array(count).fill(null).map((_, i) => <CardSkeleton key={`skeleton-${i}`} />)}
  </AutoGrid>
);