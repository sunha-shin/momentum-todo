import React, {useState} from 'react';
import styled, {keyframes} from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {saveMainTodo} from "../../../../../redux/slice/mainTodoSlice";

const MainFocus = ({setNext}) => {

        const dispatch = useDispatch();
        const [todo, setTodo] = useState({mainTodo: ''});
        const {mainTodo} = useSelector((state) => state?.mainTodo)

        const handleKeyDown = (e) => {
            if (e.key === 'Enter' && e.target.value) {
                e.preventDefault();
                setNext(true);
                dispatch(saveMainTodo(todo));
            }
        }


        const onChange = (e) => {
            setTodo({...todo, [e.target.name]: e.target.value})
        }

        return (
            <>
                <Label>What is your main focus today?</Label>
                <Input
                    type={"text"}
                    name={'mainTodo'}
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                    defaultValue={mainTodo}
                />
            </>
        );
    }
;

const Fade = keyframes`
  100% {
    opacity: 1;
  }
  0% {
    opacity: 0;
  }
`;

const Label = styled.div`
  font-size: 2em;
  animation: ${Fade} 2s;
`;

const Input = styled.input`
  display: block;
  border: none;
  border-bottom: 3px solid #FFF;
  background: none;
  outline: none;
  font-size: 2em;
  text-align: center;
  padding: 0;
  color: #FFF;
  animation: ${Fade} 2s;
`

export default MainFocus;