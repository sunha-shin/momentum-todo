import React from 'react';
import styled from "styled-components";
import ClickAwayListener from "react-click-away-listener";

const ListPopup = ({todoList, setSelectedPopup}) => {

    const handleClickAway = () => {
        setSelectedPopup(false);
    };

    const setCategory = (category) => {
        setSelectedPopup(false);
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Container>
                {
                    Object?.keys(todoList).map((category) => {
                        return (
                            <Option
                                key={category}
                                onClick={setCategory({category})}
                            >
                                <span>{category}</span>
                                <span> {todoList[category].length}</span>
                            </Option>
                        )
                    })
                }
            </Container>
        </ClickAwayListener>
    );
};

const Container = styled.div`
  position: absolute;
  top: 35px;
  padding: 6px 0;
  border-radius: 5px;
  font-size: .9375rem;
  width: 95%;

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

export default ListPopup;