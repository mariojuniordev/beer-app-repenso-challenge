import styled, { css } from 'styled-components';
import { DimensionsProps, processDimensions } from '../@types/dimensions';
import { MarginProps, processMargin } from '../@types/margin';
import { PaddingProps, processPadding } from '../@types/padding';

interface ButtonProps {
  backgroundColor?: string;
  flexDirection?: string;
  border?: string;
  alignSelf?: string;
}

export const Button = styled.button<PaddingProps & MarginProps & DimensionsProps & ButtonProps>`
  ${({ backgroundColor, flexDirection, border, alignSelf }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: ${alignSelf};
    flex-direction: ${flexDirection};
    border: ${border ?? 'none'};
    background-color: ${backgroundColor};
    ${(props) => processDimensions(props as DimensionsProps)}
    ${(props) => processPadding(props as PaddingProps)}
    ${(props) => processMargin(props as MarginProps)}
  `}
`
