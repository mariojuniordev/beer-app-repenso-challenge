import styled, { css } from 'styled-components';
import { FontWeight, TextAlign, Variant } from '../@types/text';

export interface HeadingProps {
  color?: string;
  size?: string | number;
  fontWeight?: FontWeight
  textAlign?: TextAlign;
  lineHeight?: string | number;
  variant?: Variant;
  textTransform?: string;
}

export const Heading = styled('h1').attrs<HeadingProps>(({ variant }) => ({
  as: variant
}))<HeadingProps>`
  ${({ color, size, fontWeight, lineHeight, textAlign, textTransform }) => css`
    font-size: ${size};
    color: ${color};
    text-align: ${textAlign};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
    text-transform: ${textTransform};
  `}
`
