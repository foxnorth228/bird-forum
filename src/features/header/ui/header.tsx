import Icon from '@shared/assets/bird-forum.svg?react';
import styled from 'styled-components';

console.log(Icon);
export const Header = () => {
  return (
    <SContainer>
      <SIcon />
    </SContainer>
  );
};

const SContainer = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  height: auto;
  padding: ${(props) => props.theme.spacing(1.5)} ${(props) => props.theme.spacing(1)};
  background: ${(props) => props.theme.colors.background};
  border-bottom: ${(props) => props.theme.spacing(0.125)} solid
    ${(props) => props.theme.colors.border};
`;
const SIcon = styled(Icon)`
  width: fit-content;
  height: ${(props) => props.theme.spacing(5)};
`;
