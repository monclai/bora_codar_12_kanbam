import React from 'react'
import styled from 'styled-components'
import Nav from '../src/menu/nav';
import Body from '../src/application/body';

const StyledHomeScreen = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    min-height: 100vh;
    :first-child{
        min-width: 11.5rem;
    }
`;

export default function HomeScreen() {
  return (
    <StyledHomeScreen>
        <Nav/>
        <Body/>
    </StyledHomeScreen>
  )
}
