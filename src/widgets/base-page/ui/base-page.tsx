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
  width: 100vw;
  min-height: 100vh;
`;
