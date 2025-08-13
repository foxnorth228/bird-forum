import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export const BaseAuthPage = ({ children }: PropsWithChildren) => {
  return <SContainer>{children}</SContainer>;
};

const SContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
