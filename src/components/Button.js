import styled from "styled-components";

const ButtonStyles = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 50px;
  height: 3rem;
  width: 3rem;
  /* border: none; */
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
    <ButtonStyles size={props.size} onClick={props.handleClick}>
      {props.children}
    </ButtonStyles>
  );
}
