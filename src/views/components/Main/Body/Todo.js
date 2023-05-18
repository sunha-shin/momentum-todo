import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import TodoPopup from "../Footer/Todo/TodoPopup";

const Todo = () => {

    const [popup, setPopup] = useState(false);

    const handlePopup = (e) => {
        setPopup(!popup)
    }

    useEffect(() => {
    }, [popup]);

    return (
        <Container>
            {
                popup &&
                    <TodoPopup popup={popup} setPopup={setPopup}/>
            }
            <Title onClick={handlePopup}>Todo</Title>
        </Container>
    );
};

const Container = styled.div`
  width: 250px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 999;
`;

const Title = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, .85);

  &:hover {
    color: white;
  }
`;

export default Todo;