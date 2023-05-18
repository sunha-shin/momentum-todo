import React, {useState} from 'react';
import styled from "styled-components";
import {QUOTE} from "../../../../../constants";

const {quote, author} = QUOTE;

const Quotes = () => {

    const [moveBox, setMoveBox] = useState(false);

    return (
        <Container
            onMouseEnter={() => setMoveBox(true)}
            onMouseLeave={() => setMoveBox(false)}>
            <Sentences moveBox={moveBox}>{quote}</Sentences>
            <Author moveBox={moveBox}>{author}</Author>
        </Container>
    );
}

const Container = styled.div`
`;

const Sentences = styled.div`    
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s;
  opacity: ${(props) => (props) => (props.moveBox ? 0 : 1)};
    //top: ${(props) => (props.moveBox ? '-30px' : 0)};
  top: 0;
  left: 0;
  right: 0;
`;

const Author = styled.div` 
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s;
  opacity: ${(props) => props.moveBox ? 1 : 0};
    //top: ${(props) => (props.moveBox ? '-30px' : 0)};
  color: lightgray;
  top: 0;
  left: 0;
  right: 0;
`;

export default Quotes;