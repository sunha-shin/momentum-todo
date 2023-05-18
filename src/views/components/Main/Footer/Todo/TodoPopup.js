import React, {useEffect, useState, useRef} from 'react';
import styled, {keyframes} from "styled-components";
import ClickAwayListener from 'react-click-away-listener';
import {ArrowDown, ClearIcon, EditIcon} from "../../../shared/Icons";
import {CATEGORY_CONST} from "../../../../../constants";
import EmptyCategory from "./EmptyCategory";
import {customAlphabet} from "nanoid";
import {useDispatch} from "react-redux";
import {saveTodoList} from "../../../../../redux/slice/todoListSlice";
import cn from "classnames";

const {INBOX, DONE, TODAY} = CATEGORY_CONST;

const TodoPopup = ({setPopup}) => {

    const updateInputFocus = useRef(null);
    const dispatch = useDispatch();

    const [input, setInput] = useState("");
    const [idForUpdate, setIdForUpdate] = useState("");
    const [selected, setSelected] = useState(`${INBOX}`);
    const [selectedPopup, setSelectedPopup] = useState(false);
    const nanoid = customAlphabet("01234567899abcedf", 6);

    const [todoList, setTodoList] = useState({
        category: {
            [INBOX]: [],
            [DONE]: [],
            [TODAY]: []
        },
    })

    const switchToCategory = (category) => {
        setSelected(category)
    };

    const handleClickAway = () => {
        setPopup(false)
    };

    // create Todo
    const createTodo = (e) => {
        setInput(e.target.value);
        setIdForUpdate('');
    }

    const createTodoOnKeyDown = (e) => {
        if (e.key === "Enter" && input) {
            setTodoList({
                ...todoList,
                category: {
                    ...todoList.category,
                    [selected]: [...todoList.category[selected], {id: nanoid(), name: input}]
                }
            })
            setInput("")
            dispatch(saveTodoList(todoList));
        }
    }

    // Read todo
    const showTodo = (e) => {
        setTodoList({
            ...todoList, category: {
                ...todoList.category,
                [selected]: todoList.category[selected].map((cate) => {
                    if (cate.id === idForUpdate) {
                        return {
                            ...cate,
                            name: e.target.value
                        }
                    } else {
                        return {
                            ...cate,
                        }
                    }
                })
            }
        })
    }

    const findUpdateTodo = () => {
        const index = todoList.category[selected].findIndex((el) => el.id === idForUpdate);
        return <EditInput
            ref={updateInputFocus}
            name={'editInput'}
            value={todoList.category[selected][index].name}
            onChange={(e) => showTodo(e)}
            onKeyDown={(e) => {
                if (e.key === "Enter" && todoList.category[selected][index].name) {
                    updateInputFocus.current.blur();
                    dispatch(saveTodoList(todoList));
                }
            }}
        />
    }

    const deleteTodo = (id) => {
        setTodoList({
            ...todoList, category: {
                ...todoList.category,
                [selected]: todoList.category[selected].filter((el) => el.id !== id)
            }
        })
        dispatch(saveTodoList(todoList));
    }

    useEffect(() => {
        setSelectedPopup(false)
    }, [selected])

    useEffect(() => {
        updateInputFocus.current && updateInputFocus.current.focus();
    }, [idForUpdate]);

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Container>
                <Header onClick={() => setSelectedPopup(!selectedPopup)}>
                    <CategoryName>{selected}</CategoryName>
                    <ArrowDown/>
                </Header>
                {
                    selectedPopup &&
                    <Dropdown>
                        {
                            Object.values(CATEGORY_CONST).map((category) => {
                                if (selected === category) return null
                                return <Option
                                    key={category}
                                    onClick={() => setSelected(category)}>{category}
                                </Option>
                            })
                        }
                    </Dropdown>
                }
                <Body>
                    {
                        todoList?.category[selected]?.length > 0 ?
                            todoList.category[selected].map((todo, i) => {
                                return (
                                    <Todo key={i}>
                                        <List className={cn({done: selected === DONE})}>
                                            <input
                                                type="checkbox"
                                                style={{margin: `3px 6px 3px 0`}}
                                            />
                                            {
                                                todo.id === idForUpdate
                                                    ? findUpdateTodo()
                                                    : <TodoInput type="text" defaultValue={todo.name}/>
                                            }
                                        </List>
                                        <TodoButton>
                                            <EditIcon onClick={() => {
                                                setIdForUpdate(todo.id)
                                            }}/>
                                            <ClearIcon onClick={() => deleteTodo(todo.id)}/>
                                        </TodoButton>
                                    </Todo>
                                )
                            })
                            :
                            <EmptyCategory
                                switchTo={selected === `${INBOX}` ? `${TODAY}` : `${INBOX}`}
                                switchToCategory={switchToCategory}/>
                    }
                </Body>
                <Footer>
                    <Input
                        type="text"
                        name={"input"}
                        onChange={createTodo}
                        placeholder={'New Todo'}
                        value={input}
                        onKeyDown={createTodoOnKeyDown}
                    />
                </Footer>
            </Container>
        </ClickAwayListener>
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

const Container = styled.div`
  width: 320px;
  height: auto;
  position: fixed;
  right: 10px;
  bottom: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: white;
  border-radius: 5px;
  color: black;
  margin: 0 0 20px 0;
  padding: 20px;
  animation: ${Fade} 0.5s;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  cursor: pointer;

  svg {
    fill: gray;
    width: 11px;
    margin: 5px;
    cursor: pointer;

    &:hover {
      background-color: lightgray;
      border-radius: 50%;
    }
  }
`

const CategoryName = styled.header`
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
  white-space: nowrap;
`

const Dropdown = styled.div`
  position: absolute;
  margin-top: 30px;
  padding: 6px 0;
  border-radius: 5px;
  font-size: .9375rem;
  width: 85%;
  display: flex;
  flex-direction: column;

  background-color: hsl(0deg 0% 93%);
  box-shadow: 0 1px 8px rgb(0 0 0 / 25%);
  z-index: 100;
`

const Option = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  color: darkgray;

  &:hover {
    background-color: lightgray;
  }
`

const Todo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const List = styled.div`
  display: flex;
  align-items: center;

  &.done {
    input {
      text-decoration: line-through;
    }
  }
`

const TodoInput = styled.input`
  outline: none;
  border: none;
  color: transparent;
  text-shadow: 0 0 0 black;
`

const TodoButton = styled.div`
  display: flex;
  gap: 8px;

  svg {
    height: 12px;
    fill: darkgray;
    cursor: pointer;

    &:hover {
      fill: gray;
    }
  }
`

const Body = styled.section`
  margin: 10px 0;
`

const Footer = styled.div`
`

const Input = styled.input`
  outline: none;
  border: none;
  font-size: 1em;
  height: 1em;
  width: 100%;
  bottom: 20px;
`

const EditInput = styled.input`
  outline: none;
  border: none;
`

export default TodoPopup;