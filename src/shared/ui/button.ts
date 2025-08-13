import styled from 'styled-components';

export const SButton = styled.button<{ $variant: string; $color: string; $secondColor: string }>`
  width: fit-content;
  height: fit-content;
  padding: ${(props) => props.theme.spacing(0.5)} ${(props) => props.theme.spacing(0.75)};
  border: ${(props) => props.theme.rounded(0.5)} solid ${(props) => props.$color};
  color: ${(props) => (props.$variant === 'outlined' ? props.$color : props.$secondColor)};
  background: ${(props) => (props.$variant === 'outlined' ? props.$secondColor : props.$color)};
  outline: none;
`;
