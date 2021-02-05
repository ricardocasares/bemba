import { system } from 'styled-system'

export interface StackSpacingProps {
  stackSpacing?: number | number[] | string | string[]
}

export const stackSpacing = system({
  stackSpacing: {
    property: 'marginTop'
  }
})

export interface ItemPaddingProps {
  itemPadding?: number | number[] | string | string[]
}

export const itemPadding = system({
  itemPadding: {
    property: 'padding'
  }
})

export interface StackBorderProps {
  stackBorder?: number | number[] | string | string[]
}

export const stackBorder = system({
  stackBorder: {
    property: 'borderTop'
  }
})
