import styled from "styled-components";

const ButtonStyles = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: none; */
  ${(props) =>
    props.type === "adjustment" &&
    `
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    font-size: 50px;
  `}
`;

export default function Button(props) {
  return (
    <ButtonStyles type={props.type} onClick={props.handleClick}>
      {props.children}
    </ButtonStyles>
  );
}
