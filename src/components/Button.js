import styled from "styled-components";

const ButtonStyles = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 0.2rem;
  font-size: 50px;
  height: 3rem;
  width: 3rem;
  border: 2px solid #404040;
  color: #d9d9d9;
  background-color: #1a1a1a;
  ${(props) =>
    props.size === "large" &&
    `
    padding: 0.5rem;
    height: 5rem;
    width: 5rem;
  `}
`;

export default function Button(props) {
  return (
    <ButtonStyles size={props.size} props onClick={props.handleClick}>
      {props.children}
    </ButtonStyles>
  );
}
