import styled from "styled-components";

export const Text = styled.p`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => (props.large ? "3.5rem" : "2rem")};
  font-weight: ${(props) => (props.bold ? "bold" : "regular")};
`;
