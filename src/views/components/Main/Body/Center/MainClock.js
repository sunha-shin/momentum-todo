import React, {useState, useRef, useEffect} from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";

const padNumber = (num, length) => {
    return String(num).padStart(length, '0');
    // change number to String object
    // pad ''0 until the resulting string reaches the given length
};

const MainClock = () => {

    const {name} = useSelector((state) => state?.userData)

    let now = new Date();
    const [hour, setHour] = useState(padNumber(now.getHours(), 2));
    const [min, setMin] = useState(padNumber(now.getMinutes(), 2));
    const [sec, setSec] = useState(padNumber(now.getSeconds(), 2));
    const interval = useRef(null);

    useEffect(() => {
        interval.current = setInterval(() => { // for real dom
            now = new Date();
            setHour(padNumber(now.getHours(), 2));
            setMin(padNumber(now.getMinutes(), 2));
            setSec(padNumber(now.getSeconds(), 2));
        }, 1000);
        return () => clearInterval(interval.current); // memory leak
    }, []);

    return (
        <Container>
            <ClockBox>
                {hour}:{min}:{sec}
            </ClockBox>
            <Mantra>Hello, {name}</Mantra>
        </Container>
    );
};

const Container = styled.div`
  color: #FFF;
  margin-bottom: 1.5em;
`;

const ClockBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 136px;
`;

const Mantra = styled.div`
  font-size: 3.375rem;
  text-align: center;
`;

export default MainClock;