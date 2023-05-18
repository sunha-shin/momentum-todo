import React from 'react';
import styled from "styled-components";

const EmptyCategory = ({switchTo, switchToCategory}) => {
    return (
        <Container>
            <div style={{color: "gray", marginBottom: "6px"}}>Add a todo get started</div>
            <Navigate onClick={() => switchToCategory(switchTo)}>Switch to {switchTo}</Navigate>
        </Container>
    );
};

const Container = styled.div`
  padding: 21px;
  text-align: center;
  font-size: 0.9rem;
`;

const Navigate = styled.div`
  color: darkgray;
  cursor: pointer;

  &:hover {
    color:gray;
  }
`;

export default EmptyCategory;
