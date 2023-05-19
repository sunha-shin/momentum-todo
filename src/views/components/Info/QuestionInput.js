import React from 'react';
import styled from "styled-components";

const QuestionInput = ({question, type, name, value, onChange, onKeyDown}) => {

    return (
        <div>
            <Question>{question}</Question>
            <Input
                type={type}
                name={name}
                value={value}                
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </div>
    );
};

const Question = styled.div`
  font-size: 48px;
  padding: 0 0 15px;
  font-weight: 400;
  color: #FFF;
  text-align: center;
`;
const Input = styled.input`
  display: block;
  height: 100%;
  width: 100%;
  border: none;
  border-bottom: 3px solid #FFF;
  background: none;
  outline: none;
  font-size: ${(props) => props.fontSize || "48px"};
  text-align: center;
  padding: 0;
  color: #FFF;
`;

export default QuestionInput;