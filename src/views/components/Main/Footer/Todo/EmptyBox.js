import React from 'react';
import styled, {keyframes} from "styled-components";

const EmptyBox = ({onClickBtn, selected}) => {

    const text = selected === "Done" ? "No completed todos yet" : "Add a todo to get started"
    const subText = selected === "Done" ? "Get started in Today" : "Switch to Done"

    return (
        <Container>
            <Text>{text}</Text>
            <SubText>{subText}</SubText>
            <Button onClick={onClickBtn}>
                New Todo
            </Button>
        </Container>
    );
};

const Fade = keyframes`
  100% {
    opacity: 1;
  }
  0% {
    opacity: 0;
  }
`;

const Container = styled.section`
  animation: ${Fade} 1s;
  padding: 60px 21px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Text = styled.div`
  color: #212121;
  margin-bottom: 6px;
  color: gray;
`

const SubText = styled.div`
  font-size: 12px;
  margin-bottom: 16px;
  color: darkgray;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`

const Button = styled.button`
  border-radius: 50px;
  background-color: #274B62;
  padding: 7px 28px;
  font-size: 12px;
  color: white;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #2e5974;
  }
`

export default EmptyBox;