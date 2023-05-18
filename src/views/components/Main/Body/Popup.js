import React, {useState} from 'react';
import styled from "styled-components";
import {ClearIcon, EditIcon} from "../../shared/Icons";
import ClickAwayListener from 'react-click-away-listener';
import {useDispatch} from "react-redux";
import {saveMainTodo} from "../../../../redux/slice/mainTodoSlice";

const Popup = ({setNext, setPopup}) => {

    const dispatch = useDispatch();
    const [todo, setTodo] = useState({mainTodo: ''});

    const handleEdit = () => {
        setNext(false)
    }

    const handleClear = () => {
        setNext(false)
        setTodo({...todo, mainTodo: ''});
        dispatch(saveMainTodo(todo));
    }

    const handleClickAway = () => {
        setPopup(false)
    };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Container>
                <List>
                    <Menu onClick={handleEdit}>
                        <EditIcon/>
                        <span>Edit</span>
                    </Menu>
                    <Menu onClick={handleClear}>
                        <ClearIcon/>
                        <span>Clear</span>
                    </Menu>
                </List>
            </Container>
        </ClickAwayListener>
    )
};

const Container = styled.div`

`

const List = styled.ul`
  position: absolute;
  padding: 6px 0;
  background: #FFFFFF;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  top: 0;
  left: 105%;
`

const Menu = styled.div`
  display: flex;
  justify-content: start;
  cursor: pointer;

  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  color: #212121;
  padding: 6px 15px;

  &:hover {
    background-color: lightgray;
  }

  svg {
    margin-right: 8px;
    width: 12px;
    fill: gray;
  }

`;

export default Popup;