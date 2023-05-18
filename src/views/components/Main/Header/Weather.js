import React from 'react';
import styled from "styled-components";
import ClickAwayListener from "react-click-away-listener";
import {useSelector} from "react-redux";
import IosLoader from "../../shared/IosLoader";

const Weather = ({setWeatherPopup}) => {

    const data = useSelector((state) => state?.weatherData?.weather);

    const icon = data?.weather[0]?.icon
    const iconImg = `http://openweathermap.org/img/w/${icon}.png`
    const temp = data?.main?.temp
    const roundedTemp = Math.round(temp)

    const handleClickAway = () => {
        setWeatherPopup(false)
    };

    if (!data) {
        return <IosLoader/>
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Container>
                <Header>
                    <City>{data?.name}</City>
                    <Status>{data?.weather[0]?.main}</Status>
                </Header>
                <Body>
                    <Icon>
                        <img src={iconImg} alt="" width="50px" height="50px"/>
                        <div>{roundedTemp}°</div>
                    </Icon>
                    <Detail>
                        <DetailText>Feels like <Span>{data?.main.feels_like}°</Span></DetailText>
                        <DetailText>Humidity <Span>{data?.main.humidity} %</Span></DetailText>
                        <DetailText>Wind <Span>{data?.wind.speed} km/h</Span></DetailText>
                    </Detail>
                </Body>
            </Container>
        </ClickAwayListener>
    );
};

const Container = styled.div`
  position: absolute;
  right: 20px;
  top: 80px;
  background-color: hsl(0deg 0% 93%);
  padding: 21px;
  border-radius: 5px;
  color: black
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const City = styled.div`
  font-size: 18px;
  color: black;
`

const Status = styled.div`
  color: gray;
  font-size: 14.5px;
`
const Body = styled.div`
  display: flex;
  justify-content: start;
`

const Icon = styled.div`
  margin-right: 30px;
  display: flex;
  font-size: 50px;
  align-items: center;
`

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const DetailText = styled.div`
  font-size: 12px;
  color: gray;
`

const Span = styled.span`
  color: black
`

export default Weather;