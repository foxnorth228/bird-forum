import { useIsAuth } from '@entities/auth/model/use-auth';
import { Avatar } from '@features/auth/ui/avatar';
import Icon from '@shared/assets/bird-forum.svg?react';
import { SButton } from '@shared/ui/button';
import { useNavigate } from 'react-router';
import styled, { useTheme } from 'styled-components';

export const Header = () => {
  const theme = useTheme();
  const isAuth = useIsAuth();
  const navigate = useNavigate();

  return (
    <SContainer>
      <SIcon />
      <SAuthState>
        {isAuth ? (
          <Avatar />
        ) : (
          <SButton
            $variant="outlined"
            $color={theme.colors.primary}
            $secondColor={theme.colors.background}
            onClick={() => navigate('/login')}
          >
            Sign In
          </SButton>
        )}
      </SAuthState>
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
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.spacing(3)};
`;

const SAuthState = styled.div`
  display: block;
  height: 100%;
  width: fit-content;
  margin-left: auto;
`;
