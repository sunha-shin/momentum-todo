import React, {useEffect, useState} from 'react';
import styled, {keyframes} from "styled-components";
import {fetchWeather} from "../../redux/slice/weatherSlice";
import {useDispatch, useSelector} from "react-redux";
import Quotes from "../components/Main/Footer/Quotes/Quotes";
import Todo from "../components/Main/Body/Todo";
import Links from "../components/Main/Header/Links";
import Weather from "../components/Main/Header/Weather";
import MainClock from "../components/Main/Body/Center/MainClock";
import Location from "../components/Main/Footer/Location/Location";
import MainTodo from "../components/Main/Body/Center/MainTodo";

const MainContainer = () => {

    const dispatch = useDispatch();
    const weatherData = useSelector(state => state?.weatherData);
    const [weatherPopup, setWeatherPopup] = useState(false);

    const handleWeatherPopup = () => {
        setWeatherPopup(true)
    }

    useEffect(() => {
        dispatch(fetchWeather());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            <Header>
                <Links/>
                {
                    weatherPopup &&
                    <Weather setWeatherPopup={setWeatherPopup}/>
                }
                <WeatherSection onClick={handleWeatherPopup}>
                    <Temp>{Math.round(weatherData?.weather?.main?.temp)}°</Temp>
                    <div>{weatherData?.weather?.name}</div>
                </WeatherSection>
            </Header>
            <Body>
                <MainClock/>
                <MainTodo/>
            </Body>
            <Footer>
                <Location city={weatherData?.weather?.name} country={weatherData?.weather?.sys?.country}/>
                <Quotes/>
                <Todo/>
            </Footer>
        </Container>
    );
};

const Fade = keyframes`
  100% {
    opacity: 1;
  }
  0% {
    opacity: 0;
  }`;

const Container = styled.div`
  animation: ${Fade} 2s;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #FFF;
  padding: 20px;
  background-color: rgba(0, 0, 0.8, 0.3);
`;


const WeatherSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`

const Temp = styled.span`
  font-size: 25px;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export default MainContainer;