import React, {useState} from 'react';
import MainFocus from "./MainFocus";
import MainFocusNext from "./MainFocusNext";
import styled, {keyframes} from "styled-components";

const MainTodo = () => {

    const [next, setNext] = useState(false);

    if (!next) {
        return <Section><MainFocus setNext={setNext}/></Section>
    } else {
        return <Section><MainFocusNext next={next} setNext={setNext}/></Section>
    }
};

const Fade = keyframes`
  100% {
    opacity: 1;
  }
  0% {
    opacity: 0;
  }`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 400;
  line-height: normal;
  animation: ${Fade} 2s;
`;

export default MainTodo;