import React from 'react';
import styled from 'styled-components';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background-color: #fff;
    border-bottom: 1px solid lightgrey;
    width: 100%;
    height: 120px;
    margin-top: 44px;
    padding-bottom: 15px;
    @media (min-width: 1280px) {
        width: 1280px;
    }
`;

const HeaderText = styled.h1`
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
`;

const Date = styled.span`
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-left: 25px;
    flex: 1;
`;

const Weather = styled.span`
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
    text-align: right;
    margin-right: 25px;
    flex: 1;
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <Date>MARCH 29, 2019</Date>
            <HeaderText>Lambda Times</HeaderText>
            <Weather>98°</Weather>
        </HeaderWrapper>
    )
}

export default Header