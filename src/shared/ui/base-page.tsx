import { Header } from '@features/header/ui/header';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export const BasePage = ({ children }: PropsWithChildren) => {
  return (
    <SBasePage>
      <Header />
      {children}
    </SBasePage>
  );
};

const SBasePage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
`;
