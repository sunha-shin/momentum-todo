import styled from 'styled-components';
import React, {useEffect} from 'react';
import {SettingIcon} from '../../../shared/Icons/index';

const Location = ({city, country}) => {
    useEffect(() => {
    }, []);

    return (
        <Container>
            <ContentBox>
                <SettingIcon/>
                <span>{city}, {country}</span>
            </ContentBox>
        </Container>);
};

const Container = styled.div`
  width: 250px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 999;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer; 
  gap: 8px;

  svg {
    opacity: 0.5;

    &:hover {
      opacity: 1;
      fill: white;
    }
  }
`;

export default Location;