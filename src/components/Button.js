import styled from "styled-components";

const ButtonStyles = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  margin: 5px 20px;
  font-size: 30px;
  padding: 20px;
  height: 1.5rem;
  width: 1.5rem;
`;

export default function Button(props) {
  return (
    <ButtonStyles onClick={props.handleClick}>{props.children}</ButtonStyles>
  );
}
