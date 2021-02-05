import styled from '@emotion/styled'
import { truncate } from '@/css/utils'
import { Gradient } from '@/components/Gradient'

export const Container = styled.div`
  border-radius: var(--sz1);
`

export interface Cover {
  hash: string
}

export const Cover = styled(Gradient)`
  display: grid;
  place-items: center;
  border-radius: var(--sz2) var(--sz2) 0 0;
`

export const Title = styled.h3`
  font-size: var(--sz4);
  font-weight: 500;
  margin: 0;
  margin-bottom: var(--sz1);
  color: var(--accents-7);
  ${truncate}
`

export const Subtitle = styled.h4`
  font-size: var(--sz3);
  font-weight: 300;
  text-transform: uppercase;
  color: var(--accents-4);
  margin: 0;
  ${truncate}
`

export const Body = styled.div`
  padding: var(--sz3);
  border: 1px solid var(--accents-2);
  border-top: 0;
  border-radius: 0 0 var(--sz2) var(--sz2);
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 10px;
  align-items: center;
`

export const Button = styled.button`
  color: var(--background);
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
`
