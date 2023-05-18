import React, {useState} from 'react';
import styled from "styled-components";
import {ThreeDots} from "../../../shared/Icons";
import cn from "classnames";

const ListBox = ({value = []}) => {

    const [checked, setChecked] = useState(true);
    const [strikeout, setStrikeout] = useState(false);

    const handleChange = () => {
        setStrikeout(!strikeout)
    };

    return (
        <Container>
            {
                value?.map(todo =>
                    <ul key={`todo-${todo.id}`}>
                        <Li
                            id={`todo-${todo.id}`}
                        >
                            <Todo>
                                <span>
                                    <Input
                                        type={"checkbox"}
                                        onChange={handleChange}
                                        value={checked}
                                    />
                                </span>
                                <Text className={cn({line: strikeout})}>
                                    {todo.name}
                                </Text>
                            </Todo>
                            <Icon id={todo.id}>
                                <ThreeDots/>
                            </Icon>

                        </Li>
                    </ul>
                )
            }
        </Container>
    );
};


const Container = styled.div`
  margin: 10px 0;
  height: 100%;
`;

const Li = styled.li`
  display: flex;
  justify-content: space-between;
`

const Todo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.9rem;
`

const Input = styled.input`
  cursor: pointer;
`

const Text = styled.div`
  &.line {
    text-decoration: line-through;
    color: gray;
  }
`

const Icon = styled.div`
  cursor: pointer;
  background: transparent;
  border: none;

  svg {
    fill: gray;
    width: 0.9rem;
  }
`

export default ListBox;