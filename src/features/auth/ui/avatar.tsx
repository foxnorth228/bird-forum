import Icon from '@shared/assets/profile.svg?react';
import { Link } from 'react-router';
import styled from 'styled-components';

export const Avatar = () => {
  return (
    <Link to="/profile">
      <SIcon />
    </Link>
  );
};

const SIcon = styled(Icon)`
  width: ${(props) => props.theme.spacing(4)};
  height: ${(props) => props.theme.spacing(4)};
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.background};
  border: ${(props) => props.theme.rounded(1)} solid ${(props) => props.theme.colors.primary};
  border-radius: 50%;
`;
