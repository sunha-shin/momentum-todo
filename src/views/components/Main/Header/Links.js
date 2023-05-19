import React, {useState} from 'react';
import styled from "styled-components";
import {GoogleIcon, SearchIcon} from "../../shared/Icons";

const Links = () => {

    const [value, setValue] = useState('')

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            window.open(`https://www.google.com/search?q=${value}`)
            setValue('')
        }
    }

    return (
        <Container>
            <span>Links</span>

            <InputBox>
                <Icon>
                    <SearchIcon/>
                </Icon>
                <Input
                    type={"text"}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    value={value}
                    />
                <Google>
                    <GoogleIcon/>
                </Google>
            </InputBox>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  gap: 12px;
  cursor: pointer;
`;

const InputBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 6px;
  border-bottom: solid 1px white;
  height: 28px;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }

  svg {
    fill: white;
  }
`;

const Icon = styled.div`
  left: 0;

  svg {
    fill: white !important;
    size: 16px;
  }
`;

const Google = styled.div`
  right: 0;
`;


const Input = styled.input`
  font-size: 16px;
  background: transparent;
  border-style: none;
  color: white;
  padding: 0;
  outline: none;
`;

export default Links;