import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export const BaseAuthForm = ({
  children,
  ...props
}: PropsWithChildren & { [_: string]: unknown }) => {
  return <SForm {...props}>{children}</SForm>;
};

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.spacing(1)};

  width: 100%;
  max-width: 400px;
  height: fit-content;

  padding: ${(props) => props.theme.spacing(2)};
  border: ${(props) => props.theme.rounded(0.5)} solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.background};
`;
export const STitle = styled.h2`
  font-size: ${(props) => props.theme.spacing(1.75)} ${(props) => props.theme.spacing(2.5)};
  color: ${(props) => props.theme.colors.text};
  margin: 0;
`;

export const SError = styled.p`
  font-size: ${(props) => props.theme.spacing(1.25)} ${(props) => props.theme.spacing(2)};
  color: ${(props) => props.theme.colors.secondary};
  margin: 0;
`;
