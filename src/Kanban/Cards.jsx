import React from 'react';
import styled from 'styled-components';


const StyledCards = styled.div`

    padding: 2.4rem;

    background: #fff;
    box-shadow: .0rem .4rem 1.6rem #EAE2FD;
    border-radius: .8rem;

    line-height: 130%;

    h3{
        font-weight: 700;
        font-size: 1.4rem;
        color: #403937;
    }

    p{
        font-weight: 500;
        font-size: 1.4rem;
        color: #756966;

        margin-top: 1rem;
    }

    .tags{
        margin-top: 1rem;
        display: flex;
        align-items: center;
        gap: .8rem;

        color: #7C3AED;
        font-weight: 500;
    }

    .tags span{
        font-size: 1.1rem;
        line-height: 130%;
        background: #E2D6FF;
        border-radius: .8rem;
        padding: .4rem .8rem;
    }

`;

function crashText(texto) {
    const LIMIT = 67;
    const aboveLimit = texto.length > LIMIT;
    const dotsOrEmpty = aboveLimit ? "..." : "";
    return texto.substring(0, LIMIT) + dotsOrEmpty;
}


export default function Cards({ titulo, corpo, tags }) {

    corpo = crashText(corpo)

    return (
        <StyledCards>
            <h3>{titulo}</h3>
            <p className='corpo'>{corpo}</p>
            <div className="tags">
                {tags.map(tag => {
                    return <span key={tag}>{tag}</span>
                })}
            </div>

        </StyledCards>
    )
}
