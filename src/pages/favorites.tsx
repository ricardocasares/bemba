import { NextSeo } from 'next-seo'
import { Box } from '@/components/Box'
import { Heading } from '@/components/Typography'
import { StationCardFavs } from '@/components/StationCardList'
import { useFavorites } from '@/lib/hooks/useFavorites'
import { useTranslation } from '@/lib/hooks/useTranslation'

export const Search = () => {
  const { t } = useTranslation()
  const { favs } = useFavorites()

  return (
    <Box p={['var(--sz3)']}>
      <NextSeo description='Your favorite radios around the world' />
      <Heading as='h3'>{t.favorites.title}</Heading>
      <StationCardFavs uuids={favs} />
    </Box>
  )
}

export default Search
