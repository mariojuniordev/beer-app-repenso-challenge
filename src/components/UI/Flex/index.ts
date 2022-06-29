import { MarginProps, processMargin } from '../@types/margin';
import { PaddingProps, processPadding } from '../@types/padding';
import styled, { css } from 'styled-components';
import { FlexProps, processFlex } from '../@types/flex';
import { BorderProps, processBorder } from '../@types/border';
import { DimensionsProps, processDimensions } from '../@types/dimensions';

interface BackgroundColor {
  backgroundColor?: string;
}

export const Flex = styled.div<DimensionsProps & FlexProps & PaddingProps & MarginProps & BorderProps & BackgroundColor>`
  ${({ backgroundColor }) => css`
  display: flex;
  background-color: ${backgroundColor};
  ${(props) => processFlex(props as FlexProps)}
  ${(props) => processPadding(props as PaddingProps )}
  ${(props) => processMargin(props as MarginProps)}
  ${(props) => processBorder(props as BorderProps)}
  ${(props) => processDimensions(props as DimensionsProps)}
  `}
`
