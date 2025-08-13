import styled from 'styled-components';

export const SInput = styled.input`
  width: 100%;
  height: fit-content;
  box-sizing: border-box;
  padding: ${(props) => props.theme.spacing(1.25)} ${(props) => props.theme.spacing(2)};
  font-size: ${(props) => props.theme.spacing(1.25)} ${(props) => props.theme.spacing(2)};
  border: ${(props) => props.theme.rounded(0.5)} solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.rounded(2)};
  transition: box-shadow 0.3s;
  outline: none;

  &:focus {
    box-shadow: 0 0 ${(props) => props.theme.spacing(1)} ${(props) => props.theme.spacing(0.5)}
      rgba(77, 166, 255, 0.4);
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.text};
    opacity: 0.3;
    font-style: italic;
  }
`;

export const SInputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: ${(props) => props.theme.spacing(1.5)};
`;

export const SLabel = styled.label`
  font-size: ${(props) => props.theme.spacing(1.25)} ${(props) => props.theme.spacing(2)}
  color: ${(props) => props.theme.colors.text};
  pointer-events: none;
  transition: all 0.3s;
`;

export const SSpan = styled.span`
  position: absolute;
  top: 100%;
  left: 0;
  font-size: ${(props) => props.theme.spacing(1.5)};
  color: ${(props) => props.theme.colors.secondary};
`;
