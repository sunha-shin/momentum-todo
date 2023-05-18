import React, {useState} from 'react';
import styled, {keyframes} from "styled-components";
import cn from "classnames";
import {ThreeDots} from "../../../shared/Icons";
import Popup from "../Popup";
import {useSelector} from "react-redux";

const MainFocusNext = ({setNext}) => {

    const {mainTodo} = useSelector((state) => state?.mainTodo)

    const [check, setChecked] = useState(false);
    const [popup, setPopup] = useState(false);
    const [hover, setHover] = useState(false);

    const handleCheck = () => {
        setChecked(!check)
    }

    const handlePopup = () => {
        setPopup(!popup)
    }

    return (
        <Container>
            <Today>today</Today>
            <Todo
                onMouseEnter={() => {setHover(false)}}
                onMouseLeave={() => {setHover(true)}}>
                <CheckBox className={cn({hovering: (hover && !popup)})}>
                    {
                        check ? <span className="material-symbols-outlined"
                                      onClick={handleCheck}>check_box</span>
                            : <span className="material-symbols-outlined"
                                    onClick={handleCheck}>check_box_outline_blank</span>
                    }
                </CheckBox>
                <Content className={cn({line: check})}>
                    {mainTodo}
                </Content>
                <Icon
                    onClick={handlePopup}
                    className={cn({hovering: (hover && !popup)})}>
                    <ThreeDots/>
                </Icon>
                {
                    popup &&
                    <Popup
                        setNext={setNext}
                        setPopup={setPopup}
                    />
                }
            </Todo>
        </Container>
    );
};

const Fade = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  animation: ${Fade} 2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 0.5em;
`

const Today = styled.div`
  font-size: 21px;
  line-height: 120%;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
`

const Todo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 36px;
  position: relative;
`

const CheckBox = styled.div`
  outline: none;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  margin-right: 0.5rem;
  visibility: visible;

  > span {
    overflow: hidden;
  }

  &.hovering {
    visibility: hidden;
  }
`

const Content = styled.div`
  margin-right: 0.5rem;

  &.line {
    text-decoration: line-through;
  }
`

const Icon = styled.button`
  position: relative;
  cursor: pointer;
  background: transparent;
  padding: 3.5px 6px;
  border: none;
  visibility: visible;

  &.hovering {
    visibility: hidden;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: rgba(255, 255, 255, .2);
    padding: 3.5px 6px;
    border-radius: 50%;
  }
`

export default MainFocusNext;