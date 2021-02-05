import styled from '@emotion/styled'

export const SearchInput = styled.input`
  width: 100%;
  padding: var(--sz3);
  font-size: var(--sz4);
  border-radius: var(--sz1);
  margin-bottom: var(--sz4);
  color: var(--foreground);
  background: var(--background);
  border: 1px solid var(--accents-2);
  outline: none;
  transition: border-color 0.2s;

  :hover,
  :focus {
    border-color: var(--accents-3);
  }
`
