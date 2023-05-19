import React from 'react';
import styled from "styled-components";

const MainButton = ({LeftIcon, rightIcon, text, onClick, name, type = undefined}) => {
    return (
        <Container
            onClick={onClick}
            type={type}
            name={name}
        >
            {LeftIcon}
            {text}
            {rightIcon}
        </Container>
    );
};

const Container = styled.button`
  border: 2px solid ${props => props.color ? props.color : "rgba(255,255,255,.7)"};
  border-radius: 50px;
  background: rgba(0, 0, 0, .15);
  box-shadow: 0 0 12px rgb(0 0 0 / 15%);
  color: #FFF;
  cursor: pointer;
  font-weight: 500;
  outline: 0;
  padding: 9px 23px;

  &:hover {
    background-color: transparent;
  }
`


export default MainButton;