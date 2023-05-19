import React, {useState} from 'react'
import styled, {keyframes} from 'styled-components';
import {useNavigate} from "react-router-dom";
import MainButton from "../components/shared/MainButton";
import {useDispatch} from "react-redux";
import {saveUserInfo} from "../../redux/slice/userSlice";
import {USER_INFO} from "../../constants";
import QuestionInput from "../components/Info/QuestionInput";

const {NAME, EMAIL, PW} = USER_INFO;

const Info = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [info, setInfo] = useState({[NAME]: '', [EMAIL]: '', [PW]: ''});
    const [pageStatus, setPageStatus] = useState({
        namePage: false,
        emailPage: false,
        pwPage: false,
    });

    const onChange = (e) => {
        setInfo({...info, [e.target.name]: e.target.value});
    }

    const handlePageStatus = (page) => {
        setPageStatus({...pageStatus, [page]: true});
        dispatch(saveUserInfo(info));
    }

    const changeValue = (page) => {
        setPageStatus({...pageStatus, [page]: false});
    }

    const handleLogout = () => {
        changeValue('namePage')
        setInfo({...info, [NAME]: '', [EMAIL]: '', [PW]: ''})
    }

    const onKeyDown = (e) => {
        if (e.key === 'Enter' && e.target.value) {
            e.preventDefault();
            handlePageStatus(`${e.target.name}Page`);
        }
    };

    const onClick = (e) => {
        if (info[e.target.name]) {
            handlePageStatus(`${e.target.name}Page`);
        }
    }

    // useMemo
    if (Object.values(pageStatus).every((v) => v === true)) {
        dispatch(saveUserInfo(info));
        navigate('/main')
    }

    if (!pageStatus.namePage) {
        return <Container>
            <Section>
                <QuestionInput
                    question={"Hello, what's your name?"}
                    type={'text'}
                    name={'name'}
                    value={info.name}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
                <Buttons>
                    <MainButton
                        text={"Continue"}
                        type={"submit"}
                        name={'name'}
                        onClick={onClick}
                    />
                </Buttons>
            </Section>
        </Container>
    }

    if (!pageStatus.emailPage) {
        return <Container>
            <Section>
                <QuestionInput
                    question={`What's your email, ${info?.name}?`}
                    type={"email"}
                    name={'email'}
                    value={info.email}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
                <Buttons>
                    <MainButton
                        text={"Change name"}
                        onClick={() => changeValue('namePage')}/>
                    <MainButton
                        text={"Stay logged out"}
                        onClick={handleLogout}/>
                    <MainButton
                        text={"Continue"}
                        type={"submit"}
                        name={'email'}
                        onClick={onClick}/>
                </Buttons>
            </Section>
        </Container>
    }

    if (!pageStatus.pwPage) {
        return <Container>
            <Section>
                <QuestionInput
                    question={"What's your password?"}
                    type={"password"}
                    name={'pw'}
                    value={info.pw}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
                <Buttons>
                    <MainButton
                        text={"Change email"}
                        onClick={() => changeValue('emailPage')}/>
                    <MainButton
                        text={"Continue"}
                        type={"submit"}
                        name={'pw'}
                        onClick={onClick}/>
                </Buttons>
            </Section>
        </Container>
    }
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(0, 0, 0.8, 0.3);
`;

const Fade = keyframes`
  100% {
    opacity: 1;
  }
  0% {
    opacity: 0;
  }
`;

const Section = styled.section`
  animation: ${Fade} 2s;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 56px;
  gap: 18px;
`;

export default Info;