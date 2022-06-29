import styled, { css } from "styled-components"
import { Text } from "../UI/Text/index"

interface SortButtonProps {
  label: string;
  onClick: () => void;
  active: boolean;
}

interface ButtonContainerProps {
  active: boolean;
}

const ButtonContainer = styled.button<ButtonContainerProps>`
  ${({ active }) => css`
    background-color: ${active ? 'var(--gray-white)' : 'var(--secondary)'};
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 50px;
    border: 1px solid ${active ? 'var(--secondary)' : 'var(--gray-white)'};
  `}
`

export default function SortButton(props: SortButtonProps) {
  return (
    <ButtonContainer active={props.active} onClick={props.onClick}>
      <Text textTransform="capitalize" color={props.active ? "var(--secondary)" : "var(--gray-white)"}>
        { props.label }
      </Text>
    </ButtonContainer>
  )
}
