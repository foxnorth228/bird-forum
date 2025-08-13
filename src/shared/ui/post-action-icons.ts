import styled, { WebTarget } from 'styled-components';

export const SContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

export const SIcon = (Icon: WebTarget) => styled(Icon)<{ $color?: string }>`
  width: ${(props) => props.theme.spacing(2.5)};
  height: ${(props) => props.theme.spacing(2.5)};
  color: ${(props) => props.$color ?? props.theme.colors.text};
`;

export const SCount = styled.span<{ $color?: string }>`
  font-size: ${(props) => props.theme.spacing(2.5)};
  color: ${(props) => props.$color ?? props.theme.colors.text};
`;
