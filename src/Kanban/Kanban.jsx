import React, { Children } from 'react'
import styled from 'styled-components'

const StyledKanban = styled.div`
    padding: 2.4rem;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    h2{
        font-size: 2rem;
        color: #403937;
        font-weight: 700;
        padding: 2.4rem 0;
    }
`;

export default function Kanban({ titulo, children }) {
    return (
        <StyledKanban>
            <h2>{titulo}</h2>
            {children}
        </StyledKanban>
    )
}
